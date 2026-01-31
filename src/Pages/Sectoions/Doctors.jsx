import TitleComp from "@/components/Title";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Mail, Phone } from 'lucide-react';

export default function DoctorsPage(){
    const doctors = [
        { id: '1', name: 'Dr. Amanda Chen', email: 'a.chen@hospital.com', phone: '+1 555-1001', specialty: 'Pathology', department: 'Hematology', createdAt: '2023-01-10' },
        { id: '2', name: 'Dr. James Miller', email: 'j.miller@hospital.com', phone: '+1 555-1002', specialty: 'Clinical Chemistry', department: 'Biochemistry', createdAt: '2023-02-15' },
        { id: '3', name: 'Dr. Lisa Park', email: 'l.park@hospital.com', phone: '+1 555-1003', specialty: 'Microbiology', department: 'Microbiology', createdAt: '2023-03-20' },
        { id: '4', name: 'Dr. David Thompson', email: 'd.thompson@hospital.com', phone: '+1 555-1004', specialty: 'Immunology', department: 'Immunology', createdAt: '2023-04-25' },
        { id: '5', name: 'Dr. Maria Garcia', email: 'm.garcia@hospital.com', phone: '+1 555-1005', specialty: 'Molecular Biology', department: 'Genetics', createdAt: '2023-05-30' },
    ];

    return(
        <section className="px-5">
            <TitleComp title={"Doctors"} description={"Our medical professionals and specialists"}/>
            <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {doctors.map((doctor) => (
                    <div key={doctor.id} className="flex p-5 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                        <div>
                            <div className="rounded-full mr-3 p-2 bg-purple-100/70">
                                <Stethoscope className="h-6 w-6 text-purple-500"/>
                            </div>                           
                        </div>
                        <div>
                            <h4 className="font-semibold text-base text-slate-950 mb-1">{doctor.name}</h4>
                            <Badge variant="outline" className={"mb-2"}>{doctor.specialty}</Badge>
                            <p className="text-sm text-slate-500 mb-2">{doctor.department}</p>
                            <p className="text-sm text-slate-500 mb-1"><Mail className="inline mr-1 h-4 w-4" />{doctor.email}</p>
                            <p className="text-sm text-slate-500"><Phone className="inline mr-1 h-4 w-4" />{doctor.phone}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}