import TitleComp from "@/components/Title";
import { Badge } from "@/components/ui/badge";
import { FlaskConical } from 'lucide-react';

export default function LabSectionPage(){
    const labSections = [
        { id: '1', name: 'Hematology', description: 'Blood cell analysis and coagulation studies', headDoctor: 'Dr. Amanda Chen', testsCount: 45, createdAt: '2023-01-01' },
        { id: '2', name: 'Biochemistry', description: 'Chemical analysis of blood and body fluids', headDoctor: 'Dr. James Miller', testsCount: 62, createdAt: '2023-01-01' },
        { id: '3', name: 'Microbiology', description: 'Bacterial, viral, and fungal cultures', headDoctor: 'Dr. Lisa Park', testsCount: 38, createdAt: '2023-01-01' },
        { id: '4', name: 'Immunology', description: 'Immune system and autoimmune disease testing', headDoctor: 'Dr. David Thompson', testsCount: 28, createdAt: '2023-01-01' },
        { id: '5', name: 'Genetics', description: 'DNA analysis and genetic testing', headDoctor: 'Dr. Maria Garcia', testsCount: 22, createdAt: '2023-01-01' },
        { id: '6', name: 'Urinalysis', description: 'Urine chemistry and microscopy', testsCount: 15, createdAt: '2023-01-01' },
    ];

    return(
        <section className="px-5">
            <TitleComp title={"Lab Section"} description={"Laboratory departments and their specializations"}/>
            <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {labSections.map((section) => (
                    <div key={section.id} className="p-5 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex mb-1">
                            <div className="rounded-md p-2 bg-teal-100/40">
                                <FlaskConical className="h-5 w-5 text-teal-500"/>
                            </div>
                            <Badge variant="secondary" className="ml-auto bg-slate-100">{section.testsCount} tests</Badge>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg text-slate-950 mb-2">{section.name}</h4>
                            <p className="text-sm text-slate-500 mb-2">{section.description}</p>
                            <p className="text-sm text-slate-900 font-medium">Head: {section.headDoctor}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}