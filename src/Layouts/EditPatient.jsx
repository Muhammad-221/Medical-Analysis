import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"

export default function UpdatePatient({open, close, patient, onUpdate}) {
    const [updatePatient, setUpdatePatient] = useState({
        name: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        gender: "",
        address: "",
    })
    useEffect(() => {
        if (patient) {
            setUpdatePatient(patient);
        }
    }, [patient]);
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <Card className="w-full max-w-md h-auto overflow-y-auto">
                <CardHeader>
                    <CardTitle>Update Patient</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input value={updatePatient.name} id="name" type="text" placeholder="Enter patient's full name" required onChange={(e) => setUpdatePatient({...updatePatient, name: e.target.value})} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input value={updatePatient.email} id="email" type="email" placeholder="Enter email address" required onChange={(e) => setUpdatePatient({...updatePatient, email: e.target.value})}/>
                            </div>
                            <div className="flex justify-between">
                                <div className="grid gap-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input value={updatePatient.phone} id="phone" type="tel" placeholder="Enter phone number" required onChange={(e) => setUpdatePatient({...updatePatient, phone: e.target.value})}/>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="dob">Date of Birth</Label>
                                    <Input value={updatePatient.dateOfBirth} id="dob" type="date" required onChange={(e) => setUpdatePatient({...updatePatient, dateOfBirth: e.target.value})}/>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="gender">Gender</Label>
                                <Select value={updatePatient.gender} onValueChange={(value) => setUpdatePatient({...updatePatient, gender: value})} className="w-full inline-block">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Gender"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Male">Male</SelectItem>
                                        <SelectItem value="Female">Female</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="address">Address</Label>
                                <Input value={updatePatient.address} id="address" type="text" placeholder="Enter address" required onChange={(e) => setUpdatePatient({...updatePatient, address: e.target.value})}/>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-end gap-4">
                    <Button variant="outline" onClick={() => close(false)}>Cancel</Button>
                    <Button onClick={() => onUpdate(updatePatient)}>Save Changes</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
