import TitleComp from "@/components/Title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from '@/components/ui/badge';
import { Shield, Mail, Clock } from 'lucide-react';

export default function UsersPage(){

    const users = [
        { id: '1', name: 'Admin User', email: 'admin@hospital.com', role: 'admin', status: 'active', lastLogin: '2024-01-26 09:00', createdAt: '2023-01-01' },
        { id: '2', name: 'Dr. Amanda Chen', email: 'a.chen@hospital.com', role: 'doctor', status: 'active', lastLogin: '2024-01-26 08:30', createdAt: '2023-01-10' },
        { id: '3', name: 'Jennifer Adams', email: 'j.adams@hospital.com', role: 'lab_technician', status: 'active', lastLogin: '2024-01-26 07:00', createdAt: '2023-06-01' },
        { id: '4', name: 'Rachel Kim', email: 'r.kim@hospital.com', role: 'receptionist', status: 'active', lastLogin: '2024-01-25 17:00', createdAt: '2023-07-01' },
        { id: '5', name: 'Former Employee', email: 'former@hospital.com', role: 'lab_technician', status: 'inactive', createdAt: '2023-02-01' },
    ];

    const roleStyles = {
        admin: 'bg-purple-100/50 text-purple-500 border-purple-500',
        doctor: 'bg-blue-100/50 text-blue-500 border-blue-500',
        lab_technician: 'bg-teal-100/50 text-teal-500 border-teal-500',
        receptionist: 'bg-orange-100/50 text-orange-500 border-orange-500',
    };

    const roleLabels = {
        admin: 'Admin',
        doctor: 'Doctor',
        lab_technician: 'Lab Technician',
        receptionist: 'Receptionist',
    };

    return(
        <section className="px-5">
            <TitleComp title={"Users"} description={"System users and access management"}/>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Last Login</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell className="font-medium">
                            <div className={"flex items-center"}>
                                <Shield className="mr-2 h-4 w-4 text-slate-500"/>
                                {user.name}
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className={"flex items-center text-sm text-slate-500"}>
                                <Mail className="mr-2 h-4 w-4"/>
                                {user.email}
                            </div>
                        </TableCell>
                        <TableCell>
                            <Badge variant="secondary" className={`ml-auto ${roleStyles[user.role]}`}>{roleLabels[user.role]}</Badge>
                        </TableCell>
                        <TableCell>
                            {user.lastLogin ? (
                                <div className="flex items-center text-sm text-slate-500">
                                    <Clock className="mr-2 h-4 w-4" />
                                    {user.lastLogin}
                                </div>
                            ) : (
                                <span className="text-slate-500">Never</span>
                            )}
                        </TableCell>
                        <TableCell>
                            <Badge className={`ml-auto ${user.status === 'active' ? 'bg-cyan-700 text-white' : 'bg-cyan-50 text-black'}`}>{user.status}</Badge>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </section>
    )
}