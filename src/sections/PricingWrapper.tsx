import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Link } from "react-router";

const PricingWrapper = () => {
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
                                <th scope="col" className="px-6 py-3 bg-green-200">
                                    Plan básico
                                </th>
                                <th scope="col" className="px-6 py-3 bg-green-400">
                                    Plan premium
                                </th>
                                <th scope="col" className="px-6 py-3 bg-black text-white">
                                    Plan elite
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    No. de Residentes
                                </th>
                                <td className="px-6 py-4">
                                    Hasta 10
                                </td>
                                <td className="px-6 py-4">
                                    Hasta 50
                                </td>
                                <td className="px-6 py-4">
                                    Ilimitados
                                </td>
                            </tr>
                            <tr className="border-b text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    No. de vigilantes
                                </th>
                                <td className="px-6 py-4">
                                    Hasta 2
                                </td>
                                <td className="px-6 py-4">
                                    Hasta 4
                                </td>
                                <td className="px-6 py-4">
                                    Ilimitados
                                </td>
                            </tr>
                            <tr className="border-b text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    No. Personal de Mantenimiento
                                </th>
                                <td className="px-6 py-4">
                                    Hasta 2
                                </td>
                                <td className="px-6 py-4">
                                    Hasta 6
                                </td>
                                <td className="px-6 py-4">
                                    Ilimitados
                                </td>
                            </tr>
                            <tr className="border-b text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    Familiares x Residente
                                </th>
                                <td className="px-6 py-4">
                                    Hasta 4
                                </td>
                                <td className="px-6 py-4">
                                    Ilimitados
                                </td>
                                <td className="px-6 py-4">
                                    Ilimitados
                                </td>
                            </tr>
                            <tr className="border-b text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    Visitantes x Residente
                                </th>
                                <td className="px-6 py-4">
                                    Hasta 4
                                </td>
                                <td className="px-6 py-4">
                                    Ilimitados
                                </td>
                                <td className="px-6 py-4">
                                    Ilimitados
                                </td>
                            </tr>
                            <tr className="border-b text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    QR para residentes e invitados
                                </th>
                                <td className="px-6 py-4">
                                    <IoCheckmarkCircleOutline />
                                </td>
                                <td className="px-6 py-4">
                                    <IoCheckmarkCircleOutline />
                                </td>
                                <td className="px-6 py-4">
                                    <IoCheckmarkCircleOutline />
                                </td>
                            </tr>
                            <tr className="border-b text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    Registro de entradas y salidas
                                </th>
                                <td className="px-6 py-4">
                                    <IoCheckmarkCircleOutline />
                                </td>
                                <td className="px-6 py-4">
                                    <IoCheckmarkCircleOutline />
                                </td>
                                <td className="px-6 py-4">
                                    <IoCheckmarkCircleOutline />
                                </td>
                            </tr>
                            <tr className="border-b text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    Soporte técnico
                                </th>
                                <td className="px-6 py-4">
                                    Básico
                                </td>
                                <td className="px-6 py-4">
                                    Premium
                                </td>
                                <td className="px-6 py-4">
                                    Elite (prioritario)
                                </td>
                            </tr>
                            <tr className="border-b text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    Notificaciones en tiempo real
                                </th>
                                <td className="px-6 py-4">
                                    <IoCheckmarkCircleOutline />
                                </td>
                                <td className="px-6 py-4">
                                    <IoCheckmarkCircleOutline />
                                </td>
                                <td className="px-6 py-4">
                                    <IoCheckmarkCircleOutline />
                                </td>
                            </tr>
                            <tr className="border-b text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    Costo mensual
                                </th>
                                <td className="px-6 py-4 text-2xl">
                                    $499
                                </td>
                                <td className="px-6 py-4 text-2xl">
                                    $999
                                </td>
                                <td className="px-6 py-4 text-2xl">
                                    $1,499
                                </td>
                            </tr>
                            <tr className="text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    
                                </th>
                                <td className="px-6 py-4 text-2xl">
                                    <Link to={"/"} className="
                                        rounded-md px-4 py-2
                                        bg-green-200 text-black
                                        hover:bg-black hover:text-green-200
                                        transition-all ease-in-out duration-300
                                        font-medium text-sm text-center">
                                        Seleccionar
                                    </Link>
                                </td>
                                <td className="px-6 py-4 text-2xl">
                                    <Link to={"/"} className="
                                        rounded-md px-4 py-2
                                        bg-green-400 text-black
                                        hover:bg-black hover:text-green-400
                                        hover:scale-50
                                        transition-all ease-in-out duration-300
                                        font-medium text-sm text-center">
                                        Seleccionar
                                    </Link>
                                </td>
                                <td className="px-6 py-4 text-2xl">
                                    <Link to={"/"} className="
                                        rounded-md px-4 py-2
                                        bg-black text-white
                                        hover:bg-white hover:text-black
                                        transition-all ease-in-out duration-300
                                        font-medium text-sm text-center">
                                        Seleccionar
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default PricingWrapper;