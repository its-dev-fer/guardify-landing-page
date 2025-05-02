type Props = {
    children: string;
  };
  
  export default function DashboardMenuButton({ children }: Props) {
    return (
      <button className="w-[80%] bg-white hover:bg-[#F1F1F1] focus:bg-[#F1F1F1] rounded-full cursor-pointer p-2 px-4 text-left">
        {children}
      </button>
    );
  }
  