import AddPatient from "@/Layouts/AddPatient";
import DeletePatient from "@/Layouts/DeletePatient";
import UpdatePatient from "@/Layouts/EditPatient";
import TitleComp from "@/components/Title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePatients } from "@/contexts/PatientContext";
import { Mail, Phone, MapPin, Trash, SquarePen, Plus } from 'lucide-react';

export default function PatientsPage(){
    const { search, filteredPatients, dispatch } = usePatients()

    return(
            <section className="px-5 relative">
                <TitleComp title={"Patients"} description={"Manage patient records and information"}/>
                <div className="flex max-sm:flex-col max-sm:mb-5">
                    <Input 
                        type="search" 
                        placeholder="Search patients..." 
                        className="mb-5 w-full max-w-md max-sm:h-9"
                        value={search}
                        onChange={(e) => dispatch({type: "setSearch", payload: e.target.value})}
                    />
                    <Button className="ml-auto" onClick={() => dispatch({type: "toggleModal", payload: "openAdd"})}>
                        <Plus className="size-5"/>
                        Add Patient
                    </Button>
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
                                    <button onClick={() => {dispatch({type: "toggleModal", payload: "openDelete"}); dispatch({type: "setSelected", payload: patient})}}>
                                        <Trash className="text-red-400 cursor-pointer lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible transition-opacity duration-700 visible"/>
                                    </button>
                                    <button onClick={() => {dispatch({type: "toggleModal", payload: "openUpdate"}); dispatch({type: "setSelected", payload: patient})}}>
                                        <SquarePen className="text-blue-400 cursor-pointer lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible transition-opacity duration-700 visible"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <AddPatient/>
                <DeletePatient/>
                <UpdatePatient/>
            </section>
    )
}
