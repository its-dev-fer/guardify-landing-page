import DashboardMenuButton from "./ui/DashboardMenuButton";

export default function DashboardMenu() {
    
    return (
        <div className="flex flex-col bg-[#F9F9F9] w-[25vw] h-[40vh] rounded justify-evenly items-center">
            <DashboardMenuButton>Residentes</DashboardMenuButton>
            <DashboardMenuButton>Vigilantes</DashboardMenuButton>
            <DashboardMenuButton>Datos de residencial</DashboardMenuButton>
        </div>
    );
}