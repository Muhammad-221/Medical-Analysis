import AddPatient from "@/Layouts/AddPatient";
import DeletePatient from "@/Layouts/DeletePatient";
import UpdatePatient from "@/Layouts/EditPatient";
import TitleComp from "@/components/Title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Trash, SquarePen, Plus } from 'lucide-react';
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const patients = [
    { id: uuidv4(), name: 'John Smith', email: 'john.smith@email.com', phone: '+1 555-0101', dateOfBirth: '1985-03-15', gender: 'Male', address: '123 Main St, New York', createdAt: '2024-01-15' },
    { id: uuidv4(), name: 'Sarah Johnson', email: 'sarah.j@email.com', phone: '+1 555-0102', dateOfBirth: '1990-07-22', gender: 'Female', address: '456 Oak Ave, Boston', createdAt: '2024-01-18' },
    { id: uuidv4(), name: 'Michael Brown', email: 'm.brown@email.com', phone: '+1 555-0103', dateOfBirth: '1978-11-08', gender: 'Male', address: '789 Pine Rd, Chicago', createdAt: '2024-01-20' },
    { id: uuidv4(), name: 'Emily Davis', email: 'emily.d@email.com', phone: '+1 555-0104', dateOfBirth: '1995-02-14', gender: 'Female', address: '321 Elm St, Miami', createdAt: '2024-01-22' },
    { id: uuidv4(), name: 'Robert Wilson', email: 'r.wilson@email.com', phone: '+1 555-0105', dateOfBirth: '1982-09-30', gender: 'Male', address: '654 Cedar Ln, Seattle', createdAt: '2024-01-25' },
];

export default function PatientsPage(){
    const [search, setSearch] = useState("")
    const [openAdd, setOpenAdd] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
    const [isPatient, setIsPatient] = useState(patients)
    const [selectedPatient, setSelectedPatient] = useState(null);

    const filteredPatients = isPatient.filter(patient => 
        patient.name.toLowerCase().includes(search.toLowerCase()) ||
        patient.email.toLowerCase().includes(search.toLowerCase()) ||
        patient.phone.includes(search)
    );
    const handleAddPatient = (data) => {
        setIsPatient((prev) => [
            ...prev,
            {
            ...data,
            id: uuidv4(),
            createdAt: new Date().toISOString().split("T")[0],
            },
        ]);
    };
    const handleUpdatePatient = (updated) => {
        setIsPatient((prev) =>
            prev.map((p) => (p.id === updated.id ? updated : p))
        );
        setOpenUpdate(false);
    };
    const handleDeletePatient = () => {
        setIsPatient((prev) =>
            prev.filter((p) => p.id !== selectedPatient.id)
    );
        setOpenDelete(false);
    };

    return(
        <section className="px-5 relative">
            <TitleComp title={"Patients"} description={"Manage patient records and information"}/>
            <div className="flex max-sm:flex-col max-sm:mb-5">
                <Input 
                    type="search" 
                    placeholder="Search patients..." 
                    className="mb-5 w-full max-w-md max-sm:h-9"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button className="ml-auto" onClick={() => setOpenAdd(true)}><Plus className="size-5"/>Add Patient</Button>
            </div>
            <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {filteredPatients.map((patient) => (
                    <div key={patient.id} className="p-5 border border-slate-200 rounded-lg hover:shadow-md transition-shadow duration-300 group">
                        <div className="flex">
                            <h4 className="font-semibold text-base text-slate-950 mb-1">{patient.name}</h4>
                            <p className="text-xs text-slate-500 ml-auto">{new Date(patient.dateOfBirth).toLocaleDateString()}</p>
                        </div>
                        <div className="flex">
                            <div>
                                <Badge variant="outline" className={"mb-3"}>{patient.gender}</Badge>
                                <p className="text-sm text-slate-500 mb-2"><Mail className="inline mr-1 h-4 w-4"/>{patient.email}</p>
                                <p className="text-sm text-slate-500 mb-2"><Phone className="inline mr-1 h-4 w-4"/>{patient.phone}</p>
                                <p className="text-sm text-slate-500"><MapPin className="inline mr-1 h-4 w-4"/>{patient.address}</p>
                            </div>
                            <div className="ml-auto mt-auto flex flex-col gap-3">
                                <button onClick={() => {setSelectedPatient(patient); setOpenDelete(true)}}>
                                    <Trash className="text-red-400 cursor-pointer lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible transition-opacity duration-700 visible"/>
                                </button>
                                <button onClick={() => {setSelectedPatient(patient); setOpenUpdate(true)}}>
                                    <SquarePen className="text-blue-400 cursor-pointer lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible transition-opacity duration-700 visible"/>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <AddPatient 
                open={openAdd} 
                close={setOpenAdd} 
                add={handleAddPatient} 
            />
            <DeletePatient
                open={openDelete}
                close={setOpenDelete}
                remove={handleDeletePatient}
            />
            <UpdatePatient
                open={openUpdate}
                close={setOpenUpdate}
                patient={selectedPatient}
                onUpdate={handleUpdatePatient}
                />
        </section>
    )
}
