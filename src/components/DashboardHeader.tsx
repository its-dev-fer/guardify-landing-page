import icono from '../assets/guardify-app-icon.svg';
import { useNavigate } from 'react-router';

export default function DashboardHeader() {
    const navigate = useNavigate();
    
    function handleLogout() {
        //logica ...
        navigate('/');
    }

    return (
        <div className="flex w-[90vw] h-[7vh] pt-[1vh] justify-between mb-[9vh]">
            <div className='w-[10%] h-full flex justify-evenly'>
                <img src={icono} alt="guardify icon" className='' />
                <h1 className='pt-1 font-bold'>Guardify</h1>
            </div>
            <div className='w-[25%] h-full flex justify-between'>
                <button className='focus:border-b-2 border-black'>Mi residencial</button>
                <button className='focus:border-b-2 border-black'>Gestionar membresía</button>
            </div>
            <button className='bg-[#338680] rounded-full px-4 py-2 text-white' onClick={handleLogout}>Cerrar sesion</button>
        </div>
    );
}