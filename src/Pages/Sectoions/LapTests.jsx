import TitleComp from "@/components/Title";
import { Badge } from "@/components/ui/badge";
import { TestTube, Clock, DollarSign } from 'lucide-react';

export default function LabTestsPage(){
    const labTests = [
        { id: '1', name: 'Complete Blood Count (CBC)', code: 'HEM-001', section: 'Hematology', price: 45, turnaroundTime: '2 hours', description: 'Comprehensive blood cell analysis' },
        { id: '2', name: 'Basic Metabolic Panel', code: 'BIO-001', section: 'Biochemistry', price: 65, turnaroundTime: '4 hours', description: 'Glucose, electrolytes, kidney function' },
        { id: '3', name: 'Lipid Panel', code: 'BIO-002', section: 'Biochemistry', price: 55, turnaroundTime: '4 hours', description: 'Cholesterol and triglycerides' },
        { id: '4', name: 'Blood Culture', code: 'MIC-001', section: 'Microbiology', price: 120, turnaroundTime: '48-72 hours', description: 'Detection of bloodstream infections' },
        { id: '5', name: 'ANA Panel', code: 'IMM-001', section: 'Immunology', price: 150, turnaroundTime: '24 hours', description: 'Autoimmune antibody screening' },
        { id: '6', name: 'Genetic Screening', code: 'GEN-001', section: 'Genetics', price: 350, turnaroundTime: '5-7 days', description: 'Comprehensive genetic analysis' },
    ];

    return(
        <section className="px-5">
            <TitleComp title={"Lab Tests"} description={"Available laboratory tests and pricing"}/>
            <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {labTests.map((test) => (
                    <div key={test.id} className="p-5 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex mb-1">
                            <div className="rounded-md p-2 bg-green-100/60">
                                <TestTube className="h-5 w-5 text-green-600"/>
                            </div>
                            <Badge variant="secondary" className="ml-auto bg-slate-100">{test.code}</Badge>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg text-slate-950 mb-2">{test.name}</h4>
                            <p className="text-sm text-slate-500 mb-2">{test.description}</p>
                            <p className="text-xs text-slate-500 mb-2">Section: {test.section}</p>
                        </div>
                        <div className="flex justify-between mt-4">
                            <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4 text-slate-500"/>
                                <span className="text-sm text-slate-500">{test.turnaroundTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <DollarSign className="h-4 w-4 text-green-600"/>
                                <span className="text-sm text-green-600">{test.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}