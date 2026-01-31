import TitleComp from "@/components/Title";
import { FileText, Calendar, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ReportsPage(){

    const reports = [
        { id: '1', patientId: '1', patientName: 'John Smith', testName: 'Complete Blood Count', status: 'completed', createdAt: '2024-01-25', completedAt: '2024-01-25' },
        { id: '2', patientId: '2', patientName: 'Sarah Johnson', testName: 'Lipid Panel', status: 'completed', createdAt: '2024-01-25', completedAt: '2024-01-25' },
        { id: '3', patientId: '3', patientName: 'Michael Brown', testName: 'Blood Culture', status: 'pending', createdAt: '2024-01-26' },
        { id: '4', patientId: '4', patientName: 'Emily Davis', testName: 'ANA Panel', status: 'reviewed', createdAt: '2024-01-24', completedAt: '2024-01-25' },
        { id: '5', patientId: '5', patientName: 'Robert Wilson', testName: 'Basic Metabolic Panel', status: 'pending', createdAt: '2024-01-26' },
    ];

    const statusStyles = {
        pending: 'bg-orange-100/60 text-orange-500 border-orange-500',
        completed: 'bg-green-100/60 text-green-500 border-green-500',
        reviewed: 'bg-blue-100/60 text-blue-500 border-blue-500',
    };

    return(
        <section className="px-5">
            <TitleComp title={"Reports"} description={"Laboratory test reports and results"}/>
            <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {reports.map((report) => (
                    <div key={report.id} className="p-5 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex mb-1">
                            <div className="rounded-md p-2 bg-indigo-100/60">
                                <FileText className="h-5 w-5 text-indigo-500"/>
                            </div>
                            <Badge variant="secondary" className={`ml-auto ${statusStyles[report.status]}`}>{report.status}</Badge>
                        </div>
                        <div>
                            <h4 className="font-semibold text-base text-slate-950 mb-2">{report.testName}</h4>
                            <p className="text-sm text-slate-500 mb-2"><User className="inline mr-1 h-4 w-4"/> {report.patientName}</p>
                            <p className="text-sm text-slate-500 mb-2"><Calendar className="inline mr-1 h-4 w-4"/> Created: {new Date(report.createdAt).toLocaleDateString()}</p>
                            {report.completedAt && (
                                <p className="text-xs text-slate-500 mb-2">Completed: {new Date(report.completedAt).toLocaleDateString()}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}