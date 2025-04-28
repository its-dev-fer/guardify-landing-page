import React, { useState } from "react";
import { useNavigate } from "react-router";
import handleAPIFetch from "../helpers/handleFetch";
import RegistrationFormField from "../components/ui/RegistrationFormField";
import imagen from "../assets/onboarding.png";

const FormField = RegistrationFormField;

export default function RegistrationPage() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  async function handleSubmit (e: React.FormEvent) {
      e.preventDefault();
      if ((!nombre || !email) || (!password || !confirmPassword)) {
          //logica adicional
          return;
      }
      if (password !== confirmPassword) {
          //logica adicional
          return;
      }
      const result = await handleAPIFetch('/api/users/register-admin', 'POST', [201], { nombre, email, password, confirmPassword });
      if (result) {
          navigate('/dashboard');
      }
    };
    

  return (
      <div className="min-h-screen flex items-center justify-center">
          <img src={imagen} alt=""
              className="w-[50vw] h-[100vh]" />
          <div className="w-1/2 h-[75vh] flex flex-col justify-between">
              <div className="w-full flex justify-center mb-6">
                  <h1 className="text-[#338680] font-sans text-xl block w-[75%] font-bold"
                >La mejor experiencia y seguridad para tu residencial comienzan aquí</h1>
              </div>
              <form onSubmit={handleSubmit} className="w-full h-[80%] flex flex-col justify-between">
                  <FormField labelHtmlFor="nombre" labeltext="ingresa tu nombre completo" inputType="text" valueSetter={setNombre} inputValue={nombre} />
                  <FormField labelHtmlFor="email" labeltext="ingresa tu correo electronico" inputType="email" valueSetter={setEmail} inputValue={email} />
                  <FormField labelHtmlFor="password" labeltext="ingresa tu contraseña" inputType="password" valueSetter={setPassword} inputValue={password} />
                  <FormField labelHtmlFor="confirmPassword" labeltext="confirma tu contraseña" inputType="password" valueSetter={setConfirmPassword} inputValue={confirmPassword} />
                  <div className="flex justify-center w-full h-[15%]">
                    <button type="submit" className="w-[70%] h-full rounded bg-[#338680] text-white">Crear mi cuenta</button>
                  </div>
              </form>
          </div>
    </div>
  );
}
