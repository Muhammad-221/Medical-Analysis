import TitleComp from "@/components/Title";
import { Badge } from "@/components/ui/badge";
import { UserCog, Mail, Phone, Building } from 'lucide-react';

export default function EmployeesPage(){
    const employees = [
        { id: '1', name: 'Jennifer Adams', email: 'j.adams@hospital.com', phone: '+1 555-2001', role: 'Lab Technician', department: 'Hematology', createdAt: '2023-06-01' },
        { id: '2', name: 'Mark Stevens', email: 'm.stevens@hospital.com', phone: '+1 555-2002', role: 'Lab Technician', department: 'Biochemistry', createdAt: '2023-06-15' },
        { id: '3', name: 'Rachel Kim', email: 'r.kim@hospital.com', phone: '+1 555-2003', role: 'Receptionist', department: 'Front Desk', createdAt: '2023-07-01' },
        { id: '4', name: 'Tom Bradley', email: 't.bradley@hospital.com', phone: '+1 555-2004', role: 'Lab Manager', department: 'Administration', createdAt: '2023-03-10' },
        { id: '5', name: 'Susan White', email: 's.white@hospital.com', phone: '+1 555-2005', role: 'Phlebotomist', department: 'Sample Collection', createdAt: '2023-08-01' },
    ];

    return(
        <section className="px-5">
            <TitleComp title={"Employees"} description={"Staff directory and management"}/>
            <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {employees.map((employee) => (
                    <div key={employee.id} className="flex p-5 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                        <div>
                            <div className="rounded-full mr-3 p-2 bg-blue-100/70">
                                <UserCog className="h-6 w-6 text-blue-500"/>
                            </div>                           
                        </div>
                        <div>
                            <h4 className="font-semibold text-base text-slate-950 mb-1">{employee.name}</h4>
                            <Badge variant="outline" className={"mb-2"}>{employee.role}</Badge>
                            <p className="text-sm text-slate-500 mb-2"><Building className="inline mr-1 h-4 w-4" />{employee.department}</p>
                            <p className="text-sm text-slate-500 mb-1"><Mail className="inline mr-1 h-4 w-4" />{employee.email}</p>
                            <p className="text-sm text-slate-500"><Phone className="inline mr-1 h-4 w-4" />{employee.phone}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}