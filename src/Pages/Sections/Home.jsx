import { TestDistributionChart, TestTrendChart, WeeklyPatientsChart } from "@/components/Charts";
import { RecentActivity } from "@/components/RecentActivity";
import TitleComp from "@/components/Title";
import { Users, Stethoscope, TestTube, CheckCircle } from 'lucide-react';

const stats = [
    { title: 'Total Patients', value: "1,284", change: "+12.5% from last month", icon: Users, color: 'text-success'},
    { title: 'Tests This Month', value: "490", change: "+8.2% from last month", icon: Stethoscope, color: 'text-destructive'},
    { title: 'Abnormal Results', value: "42", change: "-3.1% from last month", icon: TestTube, color: 'text-muted-foreground'},
    { title: 'Success Rate', value: "91.4%", change: "+1.2% from last month", icon: CheckCircle, color: 'text-success'},
];
export default function DashboardPage(){
    return(
        <section className="space-y-6">
            <TitleComp title={"Dashboard"} description={"Overview of your medical analysis center"}/>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((item) => (
                    <div key={item.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-muted-foreground">{item.title}</p>
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <item.icon className="h-5 w-5 text-primary" />
                            </div>
                        </div>
                        <p className="mt-3 text-3xl font-bold tracking-tight text-foreground">{item.value}</p>
                        <p className={`mt-1 text-sm font-medium ${item.color}`}>
                            {item.change}
                        </p>
                    </div>
                ))}
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
                <TestTrendChart/>
                <WeeklyPatientsChart/>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <TestDistributionChart/>
                </div>
                <RecentActivity/>
            </div>
        </section>
    )
}