import { Link } from "react-router";
import { useEffect, useState } from "react";
import handleAPIFetch from "../helpers/handleFetch";
import IconCheck from "./ui/IconCheck";

type SubscriptionPlan = {
    nombre: string;
    limite_residentes: number;
    residentes_ilimitados: boolean;
    limite_vigilantes: number;
    vigilantes_ilimitados: boolean;
    precio_mensual: number;
}

export default function BillingBoard() {
    const [plans, setPlans] = useState<SubscriptionPlan[]>([]);

    useEffect(() => {
        async function getPlans() {
            const response = await handleAPIFetch('/api/plans', 'GET', [200], "include", null, (error) => {
                console.log(error);
                setPlans([{
                    nombre: "basico", 
                    limite_residentes: 10, 
                    residentes_ilimitados: false, 
                    limite_vigilantes: 3,
                    vigilantes_ilimitados: false, 
                    precio_mensual: 200
                }, {
                    nombre: "premium", 
                    limite_residentes: 50, 
                    residentes_ilimitados: false, 
                    limite_vigilantes: 10,
                    vigilantes_ilimitados: false, 
                    precio_mensual: 500
                }, {
                    nombre: "elite", 
                    limite_residentes: 0, 
                    residentes_ilimitados: true, 
                    limite_vigilantes: 0,
                    vigilantes_ilimitados: true, 
                    precio_mensual: 800
                }]);
            });
            
            if (!response) {
                return;
            }
            
            setPlans(response.planes as SubscriptionPlan[]);
        }

        getPlans();
    }, []);

    const displayLimit = (limit: number, isUnlimited: boolean) => {
        if (isUnlimited) return "Ilimitados";
        return `Hasta ${limit}`;
    };

    if (plans.length === 0) {
        return (
            <div className="relative w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 mx-auto rounded-3xl bg-gradient-to-r from-slate-900 to-teal-900 p-6 md:p-12">
                <h2 className="font-bold text-white text-3xl">Cargando planes...</h2>
            </div>
        );
    }

    const planStyles = [
        "bg-green-200",
        "bg-green-400",
        "bg-black text-white"
    ];

    const buttonStyles = [
        "bg-green-200 text-black hover:bg-black hover:text-green-200",
        "bg-green-400 text-black hover:bg-black hover:text-green-400",
        "bg-black text-white hover:bg-white hover:text-black"
    ];

    return (
        <>
            <div id="pricing" className="
                relative w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12
                mx-auto
                rounded-3xl
                bg-gradient-to-r from-slate-900 to-teal-900 p-6 md:p-12">
                <h2 className="font-bold text-white text-3xl">Elige el plan adecuado para tí</h2>
                <div className="mx-auto mt-4 relative overflow-x-auto rounded-md w-full">
                    <table className="w-full text-sm text-left rtl:text-right rounded-md">
                        <thead className="text-xs bg-slate-50/40 rounded-md">
                            <tr className="rounded-md">
                                <th scope="col" className="px-6 py-3">
                                    Características
                                </th>
                                {plans.map((plan, index) => (
                                    <th key={`header-${index}`} scope="col" className={`px-6 py-3 ${planStyles[index]}`}>
                                        Plan {plan.nombre}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    No. de Residentes
                                </th>
                                {plans.map((plan, index) => (
                                    <td key={`residentes-${index}`} className="px-6 py-4">
                                        {displayLimit(plan.limite_residentes, plan.residentes_ilimitados)}
                                    </td>
                                ))}
                            </tr>
                            <tr className="border-b text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    No. de vigilantes
                                </th>
                                {plans.map((plan, index) => (
                                    <td key={`vigilantes-${index}`} className="px-6 py-4">
                                        {displayLimit(plan.limite_vigilantes, plan.vigilantes_ilimitados)}
                                    </td>
                                ))}
                            </tr>
                            <tr className="border-b text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    QR para residentes e invitados
                                </th>
                                <IconCheck/>
                                <IconCheck/>
                                <IconCheck/>
                            </tr>
                            <tr className="border-b text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    Registro de entradas y salidas
                                </th>
                                <IconCheck/>
                                <IconCheck/>
                                <IconCheck/>
                            </tr>
                            <tr className="border-b text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    Soporte
                                </th>
                                {plans.map((plan, index) => (
                                    <td key={`vigilantes-${index}`} className="px-6 py-4">
                                        {plan.nombre}
                                    </td>
                                ))}
                            </tr>
                            <tr className="border-b text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    Notificaciones en tiempo real
                                </th>
                                <IconCheck/>
                                <IconCheck/>
                                <IconCheck/>
                            </tr>
                            <tr className="border-b text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    Costo mensual
                                </th>
                                {plans.map((plan, index) => (
                                    <td key={`precio-${index}`} className="px-6 py-4 text-2xl">
                                        ${plan.precio_mensual}
                                    </td>
                                ))}
                            </tr>
                            <tr className="text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    
                                </th>
                                {plans.map((plan, index) => (
                                    <td key={`accion-${index}`} className="px-6 py-4 text-2xl">
                                        <Link to={`/payment/${plan.nombre}`} className={`
                                            rounded-md px-4 py-2
                                            ${buttonStyles[index]}
                                            transition-all ease-in-out duration-300
                                            font-medium text-sm text-center`}>
                                            Seleccionar
                                        </Link>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};