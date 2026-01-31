import { clsx } from "clsx";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FlaskConical,
  Stethoscope,
  Users,
  TestTube,
  UserCog,
  FileText,
  Receipt,
  Shield,
  X,
  Activity
} from 'lucide-react';


export default function LinksLayout({full, action}){
    const navItems = [
        { title: 'Dashboard', path: '/', icon: LayoutDashboard },
        { title: 'Lab Sections', path: '/sections', icon: FlaskConical },
        { title: 'Doctors', path: '/doctors', icon: Stethoscope },
        { title: 'Patients', path: '/patients', icon: Users },
        { title: 'Lab Tests', path: '/tests', icon: TestTube },
        { title: 'Employees', path: '/employees', icon: UserCog },
        { title: 'Reports', path: '/reports', icon: FileText },
        { title: 'Invoices', path: '/invoices', icon: Receipt },
        { title: 'Users', path: '/users', icon: Shield },
    ];

    const style = ({ isActive }) => clsx("flex items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium transition duration-300 text-slate-100 hover:bg-cyan-90 max-lg:py-1.5 max-lg:gap-2 max-md:text-sm max-md:py-2", isActive ? "bg-cyan-900" : "");
    
    return(
        <section className={`h-screen top-0 sticky transition-all duration-300 overflow-hidden bg-cyan-950 max-lg:invisible ${full ? 'w-2/10 max-lg:w-0' : 'w-0 max-lg:visible max-lg:w-4/10 max-md:w-5/10'}`}>
            <div className="px-4 py-2 flex gap-3 items-center border-b border-white/50 max-lg:px-2 max-sm:px-1 max-sm:gap-1">
                <Activity className="size-8 text-teal-400"/>
                <div>
                    <h1 className="text-lg font-bold text-slate-100 max-sm:text-sm">Medical Analysis</h1>
                    <span className="text-sm font-light text-slate-100 max-sm:text-xs">Center</span>
                </div>
                <X onClick={action} className="hidden ms-auto text-slate-100 max-lg:block"/>
            </div>
            <nav className="p-4 max-md:p-2">
                <ul className="space-y-1">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={style}
                            >
                                <item.icon className="size-5 max-md:size-4" />
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}