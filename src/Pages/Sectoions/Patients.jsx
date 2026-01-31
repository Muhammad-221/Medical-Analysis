import TitleComp from "@/components/Title";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from "react";

export default function PatientsPage(){
    const patients = [
        { id: '1', name: 'John Smith', email: 'john.smith@email.com', phone: '+1 555-0101', dateOfBirth: '1985-03-15', gender: 'Male', address: '123 Main St, New York', createdAt: '2024-01-15' },
        { id: '2', name: 'Sarah Johnson', email: 'sarah.j@email.com', phone: '+1 555-0102', dateOfBirth: '1990-07-22', gender: 'Female', address: '456 Oak Ave, Boston', createdAt: '2024-01-18' },
        { id: '3', name: 'Michael Brown', email: 'm.brown@email.com', phone: '+1 555-0103', dateOfBirth: '1978-11-08', gender: 'Male', address: '789 Pine Rd, Chicago', createdAt: '2024-01-20' },
        { id: '4', name: 'Emily Davis', email: 'emily.d@email.com', phone: '+1 555-0104', dateOfBirth: '1995-02-14', gender: 'Female', address: '321 Elm St, Miami', createdAt: '2024-01-22' },
        { id: '5', name: 'Robert Wilson', email: 'r.wilson@email.com', phone: '+1 555-0105', dateOfBirth: '1982-09-30', gender: 'Male', address: '654 Cedar Ln, Seattle', createdAt: '2024-01-25' },
    ];

    const [search, setSearch] = useState("")

    const filteredPatients = patients.filter(patient => 
        patient.name.toLowerCase().includes(search.toLowerCase()) ||
        patient.email.toLowerCase().includes(search.toLowerCase()) ||
        patient.phone.includes(search)
    );

    return(
        <section className="px-5">
            <TitleComp title={"Patients"} description={"Manage patient records and information"}/>
            <Input 
                type="search" 
                placeholder="Search patients..." 
                className="mb-5 w-full max-w-md"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {filteredPatients.map((patient) => (
                    <div key={patient.id} className="p-5 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex">
                            <h4 className="font-semibold text-base text-slate-950 mb-1">{patient.name}</h4>
                            <p className="text-xs text-slate-500 ml-auto">{new Date(patient.dateOfBirth).toLocaleDateString()}</p>
                        </div>
                        <div>
                            <Badge variant="outline" className={"mb-3"}>{patient.gender}</Badge>
                            <p className="text-sm text-slate-500 mb-2"><Mail className="inline mr-1 h-4 w-4" />{patient.email}</p>
                            <p className="text-sm text-slate-500 mb-2"><Phone className="inline mr-1 h-4 w-4" />{patient.phone}</p>
                            <p className="text-sm text-slate-500"><MapPin className="inline mr-1 h-4 w-4" />{patient.address}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}