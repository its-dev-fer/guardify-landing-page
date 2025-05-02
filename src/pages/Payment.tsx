import { useState, useEffect } from "react";
import { useParams } from "react-router";
import handleAPIFetch from "../helpers/handleFetch";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

// Carga tu clave pública de Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

type SubscriptionPlan = {
  nombre: string;
  precio_mensual: number;
};

function CheckoutForm({ plan }: { plan: SubscriptionPlan }) {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: card!,
    });

    if (error) {
      setErrorMessage(error.message || "Error al procesar la tarjeta.");
      return;
    }
    setErrorMessage("No se pudo completar el pago.");
    const response = await handleAPIFetch('/api/subscribe', 'POST', [200], 'include', {
      paymentMethodId: paymentMethod.id,
      nombre_plan: plan.nombre,
    }, (error) => {
      setErrorMessage((error as Error).message);
    });
    if (response) {
      setSuccess(true);
    } else {
      setErrorMessage(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[80%] max-w-md">
      <h2 className="text-xl font-semibold text-center">Plan: {plan.nombre}</h2>
      <p className="text-center text-gray-600 mb-2">
        Precio mensual: ${Number(plan.precio_mensual).toFixed(2)}
      </p>
      <CardElement
        className="p-3 border rounded-md bg-white"
        options={{ hidePostalCode: true }}
      />
      <button
        type="submit"
        className="bg-white hover:bg-[#F1F1F1] focus:bg-[#F1F1F1] rounded-full cursor-pointer p-2 px-4"
      >
        Pagar
      </button>
      {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}
      {success && <p className="text-green-600 text-sm text-center">¡Pago exitoso!</p>}
    </form>
  );
}

export default function Payment() {
  const { nombre } = useParams();
  const [plan, setPlan] = useState<SubscriptionPlan>();

  useEffect(() => {
    async function getPlan() {
      const response = await handleAPIFetch(`/api/plans/index/${nombre}`, 'GET', [200], 'include');
      if (!response) return;
      setPlan(response.plan as SubscriptionPlan);
    }
    getPlan();
  }, [nombre]);

  if (!plan) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-[#F9F9F9] rounded-md p-6">
      <Elements stripe={stripePromise}>
        <CheckoutForm plan={plan} />
      </Elements>
    </div>
  );
}
