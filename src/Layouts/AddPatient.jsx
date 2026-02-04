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

export default function AddPatient({open, close, add, patient, setFormPatient}) {
    const {name, email, phone, dateOfBirth, gender, address} = patient;
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <Card className="w-full max-w-md h-auto overflow-y-auto max-sm:max-w-sm">
                <CardHeader>
                    <CardTitle>Add New Patient</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-4">
                            <div className="grid gap-2 max-sm:gap-1">
                                <Label htmlFor="name">Full Name</Label>
                                <Input value={name} id="name" type="text" placeholder="Enter patient's full name" required onChange={(e) => setFormPatient({...patient, name: e.target.value})} />
                            </div>
                            <div className="grid gap-2 max-sm:gap-1">
                                <Label htmlFor="email">Email Address</Label>
                                <Input value={email} id="email" type="email" placeholder="Enter email address" required onChange={(e) => setFormPatient({...patient, email: e.target.value})}/>
                            </div>
                            <div className="flex justify-between max-sm:flex-col max-sm:gap-4">
                                <div className="grid gap-2 max-sm:gap-1">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input value={phone} id="phone" type="tel" placeholder="Enter phone number" required onChange={(e) => setFormPatient({...patient, phone: e.target.value})}/>
                                </div>
                                <div className="grid gap-2 max-sm:gap-1">
                                    <Label htmlFor="dob">Date of Birth</Label>
                                    <Input value={dateOfBirth} id="dob" type="date" required onChange={(e) => setFormPatient({...patient, dateOfBirth: e.target.value})} />
                                </div>
                            </div>
                            <div className="grid gap-2 max-sm:gap-1">
                                <Label htmlFor="gender">Gender</Label>
                                <Select className="w-full inline-block" value={gender} onValueChange={(value) => setFormPatient({...patient, gender: value})}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2 max-sm:gap-1">
                                <Label htmlFor="address">Address</Label>
                                <Input value={address} type="text" placeholder="Enter address" required onChange={(e) => setFormPatient({...patient, address: e.target.value})}/>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-end gap-4">
                    <Button variant="outline" onClick={() => close(false)}>Cancel</Button>
                    <Button onClick={() => add()}>Add Patient</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
