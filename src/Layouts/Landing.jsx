import { useState } from "react";
import HeaderLayout from "./Header";
import LinksLayout from "./Links";
import { PatientsProvider } from "@/contexts/PatientContext";

export default function DashboardLayout({children}){
    const [isFull, setIsFull] = useState(true);
    const handleToggle = () => setIsFull(prev => !prev)

    return(
        <div className="w-full flex">
            <LinksLayout full={isFull} action={handleToggle}/>
            <section className={`min-h-screen flex flex-col transition-all duration-300 max-lg:w-full ${isFull ? 'w-8/10' : 'w-full'}`}>
                <HeaderLayout action={handleToggle}/>
                <PatientsProvider>
                    <div className="h-full">{children}</div>
                </PatientsProvider>
                <footer className="mb-0 h-15 text-sm border-t border-slate-500/30 grid place-items-center text-slate-500">Created By Our Team</footer> 
            </section> 
        </div>
    )
}