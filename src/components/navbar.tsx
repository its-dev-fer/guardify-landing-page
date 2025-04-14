import { Link } from "react-router";
import { useState } from "react";
import appIcon from "../assets/guardify-app-icon.svg";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <header className="z-10 w-screen py-3 flex flex-row justify-around items-center">
                <div className="flex flex-row items-center justify-around">
                    <img src={appIcon} alt="Guardify - Vigilancia Inteligente" className="w-10 h-auto" draggable={false} />
                    <h1 className="font-bold text-xl ml-2">Guardify</h1>
                </div>

                <div className="hidden w-fit md:flex flex-row items-center justify-between">
                    <Link className="relative mr-6 text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-guardify-dark after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to="#features"> Características </Link>
                    <Link className="relative mr-6 text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-guardify-dark after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to="#pricing"> Precios </Link>
                    <Link className="relative mr-6 text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-guardify-dark after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to="/"> Contacto </Link>
                </div>

                <button className="rounded p-2 text-3xl text-guardify-dark md:hidden" onClick={() => setOpen(!open)}>
                ☰
                </button>
                <button className="hidden md:block py-2 px-4 text-md bg-guardify-dark text-white rounded-full">
                    Solicita una demo
                </button>
            </header>
            { open && <div className="
                md:hidden
                mt-4
                rounded-xl
                z-20 w-11/12 h-fit fixed py-4 px-4 mx-auto left-0 right-0 
                flex flex-col items-center justify-start
                bg-white/90
                backdrop-blur-lg
                backdrop-saturate-150
                animate-in zoom-in duration-200
            ">
                <Link className="mt-6  relative text-2xl font-bold w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-guardify-dark after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to="#features"> Características </Link>

                <Link className=" mt-12 relative text-2xl font-bold w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-guardify-dark after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to="#pricing"> Precios </Link>
                
                
                <Link className="my-12 relative text-2xl font-bold w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-guardify-dark after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to="/"> Contacto </Link>
                
                
            </div> }
        </>
    );
};

export default Navbar;