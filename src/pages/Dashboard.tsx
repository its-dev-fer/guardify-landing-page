//import React, { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardMenu from "../components/DashboardMenu";

export default function Dashboard() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <DashboardHeader />
            <div className="w-[90vw]">
                <DashboardMenu />
            </div>
        </div>
    );
}