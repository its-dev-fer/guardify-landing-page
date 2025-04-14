import onboarding from "../assets/onboarding.png";

const HeroWrapper = () => {
    return (
        <>
            <div className="w-full relative">
                <div className="
                    w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12
                    mx-auto mt-6
                    rounded-3xl
                    bg-gradient-to-r from-slate-900 to-teal-900 p-12 pb-0
                    grid grid-cols-1 md:grid-cols-2 gap-1
                ">
                    <div className="order-2 md:order-1">
                        <h2 className="text-left font-bold text-2xl md:text-4xl text-white">Control de accesos inteligente para tu residencial</h2>
                        <p className="mt-2 text-md font-light text-white text-left">Supervisa y gestiona en tiempo real las entradas y salidas de residentes, visitantes y personal. Aumenta la seguridad con accesos digitales, notificaciones instantáneas y un historial detallado de movimientos.</p>
                        <div className="flex flex-col sm:flex-row mb-6">
                            <button className="mt-6 rounded-full bg-guardify text-black font-bold text-md px-3 py-2 lg:px-6 lg:py-3 hover:bg-white hover:text-guardify-dark transition-all ease-in-out">Solicita una demo</button>
                            <button className="mt-6 mb-6 sm:mb-0 md:ml-2 rounded-full bg-transparent text-white font-bold text-md px-3 py-2 lg:px-6 lg:py-3 hover:bg-white hover:text-guardify-dark transition-all ease-in-out">Ver características</button>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 overflow-hidden max-h-80">
                        <img className="h-full w-auto scale mx-auto" src={onboarding} alt="Guardify - Onboarding" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroWrapper;