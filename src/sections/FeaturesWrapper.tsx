import { useState } from "react";
import visitas from "../assets/features/visitas.svg";
import miHogar from "../assets/features/miHogar.svg";
import accesoQr from "../assets/features/accesoQr.svg";
import vehiculos from "../assets/features/vehiculos.svg";
import accesos from "../assets/features/accesos.svg";
import notificaciones from "../assets/features/notificaciones.svg";
import seguridad from "../assets/features/seguridad.svg";
import { IphoneMockup } from "../components/iphoneMockup";

interface SlideType {
    image: string,
    title: string
};

const FeaturesWrapper = () => {
    const slides: SlideType[] = [
        {
            title: "Registro de visitantes",
            image: visitas,
        },
        {
            title: "Gestiona tu hogar",
            image: miHogar,
        },
        {
            title: "Acceso con QR",
            image: accesoQr,
        },
        {
            title: "Registro de vehículos propios",
            image: vehiculos,
        },
        {
            title: "Historial detallado de accesos",
            image: accesos,
        },
        {
            title: "Notificaciones en tiempo real",
            image: notificaciones,
        },
        {
            title: "Seguridad para tu familia",
            image: seguridad,
        },
    ];
    const [slideIndex, setSlideIndex] = useState(0);

    return (
        <>
            <div className="
                w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12
                mx-auto mt-28
            " id="features">
                <h2 className="text-left font-bold text-3xl md:text-4xl text-guardify-dark">Características</h2>
                <p className="mt-2 text-md font-light text-dark text-left w-full md:w-6/12">Échale un vistazo a las características que nuestros usuarios aman.</p>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-[40%_60%] h-fit w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 mx-auto gap-4 py-12">
                {/* Lado izquierdo - Características */}
                <div className="flex flex-col gap-4 items-center justify-center w-full flex-[4] md:flex-none">
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            className={`
          px-2 py-1 w-56 h-16
          ${slideIndex === index ? "bg-guardify-dark text-white hover:bg-guardify hover:text-black" : "bg-white text-black hover:bg-guardify-dark hover:text-white"}
          rounded-2xl shadow-lg transition
        `}
                            onClick={() => setSlideIndex(index)}
                        >
                            {slide.title}
                        </button>
                    ))}
                </div>

                {/* Lado derecho - Mockup con imagen */}
                <div className="flex items-center justify-center w-full flex-[6] md:flex-none">
                    {slides.map((slide, index) => (
                        <IphoneMockup
                            key={index}
                            className={`
                                ${slideIndex !== index ? "hidden" : "block"}
                                max-w-full max-h-full object-contain transition duration-300
                            `}
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-auto"
                            />
                        </IphoneMockup>
                    ))}
                </div>
            </div>


        </>
    );
};

export default FeaturesWrapper;