import React, { useState } from "react";
import handleAPIFetch from "../helpers/handleFetch";
import RegistrationFormField from "../components/ui/RegistrationFormField";
import imagen from "../assets/ImagenDeFamilia.jpg";
import { useNavigate } from "react-router";

const FormField = RegistrationFormField;

export default function TenantRegistrationForm() {
    const [nombreResidencial, setNombreResidencial] = useState<string>("");
    const navigate = useNavigate();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log("formulario enviado");
        if (!nombreResidencial) return;

        const result = await handleAPIFetch(
            "/api/tenants/register",
            "POST",
            [201],
            "include",
            { nombre_residencial: nombreResidencial }
        );

        if (result) {
            navigate('/admin/user/register');
        }
    }

    return (    
        <div className="min-h-screen flex items-center justify-center">
          <img src={imagen} alt=""
              className="w-[50vw] h-[100vh] hidden smd:block" />
          <div className="w-full lg:w-1/2 h-[75vh] flex flex-col justify-between">
              <div className="w-full flex justify-center mb-6">
                  <h1 className="text-[#338680] font-sans text-xl block w-[75%] font-bold"
                  >La mejor experiencia y seguridad para tu residencial comienzan aquí</h1>
              </div>
              <form onSubmit={handleSubmit} className="w-full h-[80%] flex flex-col justify-start gap-8">
                  <FormField labelHtmlFor="nombre_residencial" labeltext="Ingresa el nombre de tu residencial"
                  inputType="text" valueSetter={setNombreResidencial} inputValue={nombreResidencial}/>
                  <div className="flex justify-center w-full mt-2">
                      <button type="submit" className="w-[70%] h-12 rounded bg-[#338680] text-white">Continuar</button>
                  </div>
              </form>
          </div>
        </div>
      );
}
