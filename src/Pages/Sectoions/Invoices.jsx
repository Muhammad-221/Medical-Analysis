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
import { Calendar, User, DollarSign } from 'lucide-react';

export default function InvoicesPage(){

    const invoices = [
        { id: '1', invoiceNumber: 'INV-2024-001', patientId: '1', patientName: 'John Smith', amount: 245.00, status: 'paid', createdAt: '2024-01-20', dueDate: '2024-02-20' },
        { id: '2', invoiceNumber: 'INV-2024-002', patientId: '2', patientName: 'Sarah Johnson', amount: 180.50, status: 'pending', createdAt: '2024-01-22', dueDate: '2024-02-22' },
        { id: '3', invoiceNumber: 'INV-2024-003', patientId: '3', patientName: 'Michael Brown', amount: 320.00, status: 'overdue', createdAt: '2024-01-10', dueDate: '2024-01-25' },
        { id: '4', invoiceNumber: 'INV-2024-004', patientId: '4', patientName: 'Emily Davis', amount: 150.00, status: 'paid', createdAt: '2024-01-23', dueDate: '2024-02-23' },
        { id: '5', invoiceNumber: 'INV-2024-005', patientId: '5', patientName: 'Robert Wilson', amount: 275.75, status: 'pending', createdAt: '2024-01-25', dueDate: '2024-02-25' },
    ];
    
    const statusStyles = {
        pending: 'bg-orange-100/60 text-orange-500 border-orange-500',
        paid: 'bg-green-100/60 text-green-500 border-green-500',
        overdue: 'bg-red-100/60 text-red-500 border-red-500',
    };

    return(
        <section className="px-5">
            <TitleComp title={"Invoices"} description={"Billing and payment management"}/>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Invoice #</TableHead>
                        <TableHead>Patient</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.invoiceNumber}</TableCell>
                        <TableCell>
                            <div className={" flex items-center"}>
                                <User className="mr-2 h-4 w-4 text-slate-500"/>
                                {invoice.patientName}
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className={" flex items-center"}>
                                <DollarSign className="mr-2 h-4 w-4 text-slate-500"/>
                                {invoice.amount.toFixed(2)}
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className={" flex items-center text-sm text-slate-500"}>
                                <Calendar className="inline mr-2 h-4 w-4"/>
                                {new Date(invoice.dueDate).toLocaleDateString()}
                            </div>
                        </TableCell>
                        <TableCell>
                            <Badge variant="secondary" className={`ml-auto ${statusStyles[invoice.status]}`}>{invoice.status}</Badge>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </section>
    )
}