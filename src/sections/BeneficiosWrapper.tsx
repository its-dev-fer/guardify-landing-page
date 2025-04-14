import BenefitCard from "../components/benefit.card";

const BeneficiosWrapper = () => {
    return (
        <>
            <div className="w-full relative">
                <div className="
                    w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12
                    mx-auto mt-28
                ">
                    <h2 className="text-left font-bold text-3xl md:text-4xl text-guardify-dark">Beneficios clave</h2>
                    <p className="mt-2 text-md font-light text-dark text-left w-full md:w-6/12">Optimiza la seguridad y el control en tu residencial con un sistema fácil de usar, que registra accesos, envía notificaciones en tiempo real y permite la gestión remota de residentes y visitas.</p>
                </div>

                <div className="
                mt-6
                w-11/12 
                lg:w-10/12
                xl:w-9/12
                2xl:w-8/12
                grid gap-6
                grid-cols-1
                md:grid-cols-3
                xl:grid-cols-4
                mx-auto items-stretch justify-stretch">
                    <BenefitCard
                        props={{
                            ctaText: "Pedir una demo ⤴",
                            ctaLink: "/demo",
                            image: "https://blog.grupoemerita.com/hs-fs/hubfs/VALENIA%20PDC/Sesi%C3%B3n%20febrero%202021/1.%20P%C3%B3rtico.jpg?width=711&name=1.%20P%C3%B3rtico.jpg", // Importando la imagen
                            title: "Mayor seguridad",
                            description: "Registra cada acceso y evita intrusos."
                        }}
                    />
                    <BenefitCard
                        props={{
                            ctaText: "Pedir una demo ⤴",
                            ctaLink: "/demo",
                            image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Importando la imagen
                            title: "Control total",
                            description: "Gestiona residentes, visitas y proveedores desde cualquier lugar."
                        }}
                    />
                    <BenefitCard
                        props={{
                            ctaText: "Pedir una demo ⤴",
                            ctaLink: "/demo",
                            image: "https://images.unsplash.com/photo-1560617544-b4f287789e24?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Importando la imagen
                            title: "Notificaciones en tiempo real",
                            description: "Recibe alertas al instante."
                        }}
                    />
                    <BenefitCard
                        props={{
                            ctaText: "Pedir una demo ⤴",
                            ctaLink: "/demo",
                            image: "https://images.unsplash.com/photo-1625463006115-09f08489f591?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Importando la imagen
                            title: "Fácil de usar",
                            description: "Interfaz intuitiva para administradores y residentes."
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default BeneficiosWrapper;