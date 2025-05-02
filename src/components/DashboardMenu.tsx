//import DashboardMenuButton from "./ui/DashboardMenuButton";
type Props = {
    children: string;
  };
  
function DashboardMenuButton({ children }: Props) {
    return (
      <button className="w-[80%] bg-white hover:bg-[#F1F1F1] focus:bg-[#F1F1F1] rounded-full cursor-pointer p-2 px-4 text-left">
        {children}
      </button>
    );
  }
export default function DashboardMenu() {
    
    return (
        <div className="flex flex-col bg-[#F9F9F9] w-[25vw] h-[40vh] rounded justify-evenly items-center">
            <DashboardMenuButton>Residentes</DashboardMenuButton>
            <DashboardMenuButton>Vigilantes</DashboardMenuButton>
            <DashboardMenuButton>Datos de residencial</DashboardMenuButton>
        </div>
    );
}