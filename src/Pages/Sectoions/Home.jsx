import TitleComp from "@/components/Title";
import { Users, Stethoscope, TestTube, CheckCircle, Clock, DollarSign } from 'lucide-react';

export default function DashboardPage(){
    const stats = [
        { title: 'Total Patients', value: "2,847", icon: Users, color: 'text-blue-500', bg: 'bg-blue-100', border: 'border-l-blue-500' },
        { title: 'Total Doctors', value: "42", icon: Stethoscope, color: 'text-purple-500', bg: 'bg-purple-100', border: 'border-l-purple-500' },
        { title: 'Daily Tests', value: "156", icon: TestTube, color: 'text-teal-500', bg: 'bg-teal-100', border: 'border-l-teal-500' },
        { title: 'Completed Analyses', value: "1,893", icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100', border: 'border-l-green-600' },
        { title: 'Pending Results', value: "67", icon: Clock, color: 'text-orange-500', bg: 'bg-orange-100', border: 'border-l-orange-500' },
        { title: 'Monthly Revenue', value: "$284,500", icon: DollarSign, color: 'text-indigo-500', bg: 'bg-indigo-100', border:'border-l-indigo-500' },
    ];

    return(
        <section className="px-5 max-sm:px-3">
            <TitleComp title={"Dashboard"} description={"Overview of your medical analysis center"}/>
            <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {stats.map((item) => (
                    <div key={item.title} className={`h-24 flex gap-5 items-center p-4 border border-l-4 ${item.border} rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
                        <div className={`rounded-md p-2 ${item.bg}`}>
                            <item.icon className={`h-6 w-6 ${item.color}`}/>
                        </div>
                        <div>
                            <span className="text-teal-950 text-2xl font-bold block">{item.value}</span>
                            <span className="text-slate-500 text-sm">{item.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}