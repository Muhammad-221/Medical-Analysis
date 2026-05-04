import { useState} from "react";
import HeaderLayout from "./Header";
import LinksLayout from "./Links";
import { PatientsProvider } from "@/contexts/PatientContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function DashboardLayout({children}){
    const [collapsed, setCollapsed] = useState(false);
    const handleToggle = () => setCollapsed(!collapsed)

    return(
        
        <ThemeProvider>
            <div className="flex h-screen w-full overflow-hidden bg-background">
                <LinksLayout collapsed={collapsed}/>
                <section className="flex flex-1 flex-col overflow-hidden">
                    <HeaderLayout action={handleToggle}/>
                    <PatientsProvider>
                        <div className="flex-1 overflow-y-auto p-6">
                            {children}
                        </div>
                    </PatientsProvider>
                </section> 
            </div>
        </ThemeProvider>
    )
}