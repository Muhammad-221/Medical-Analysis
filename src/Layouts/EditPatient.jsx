import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./Schema";
import { useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { AlertCircle } from "lucide-react";
import { usePatients } from "@/contexts/PatientContext";

export default function UpdatePatient() {
    const { ui, selectedPatient, dispatch } = usePatients()
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            dateOfBirth: "",
            gender: "",
            address: "",
        },
    });
    useEffect(() => {
        if (selectedPatient) {
            form.reset(selectedPatient);
        }
    }, [selectedPatient, form]);

    const onSubmit = (data) => {
        dispatch({type: "updatePatient", payload: {...data, id: selectedPatient.id}});
    };

    if (!ui.openUpdate || !selectedPatient) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <Card className="w-full max-w-md h-auto overflow-y-auto">
                <CardHeader>
                    <CardTitle>Update Patient</CardTitle>
                </CardHeader>
                <CardContent>
                    <TooltipProvider>
                    <form id="update-form" onSubmit={form.handleSubmit(onSubmit)}>
                        <FieldGroup>
                            <Controller
                                name="name"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                <Field className="relative grid gap-2" data-invalid={fieldState.invalid}>
                                    <FieldLabel>Full Name</FieldLabel>
                                    <div className="relative">
                                        <Input type="text" {...field} className="pr-10"/>
                                        {fieldState.isTouched && fieldState.error && (
                                            <Tooltip>
                                            <TooltipTrigger asChild>
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 cursor-pointer"><AlertCircle size={16}/></span>
                                            </TooltipTrigger>
                                            <TooltipContent side="right"><p className="text-sm">{fieldState.error.message}</p></TooltipContent>
                                            </Tooltip>
                                        )}
                                    </div>
                                </Field>
                            )}
                            />
                            <Controller
                                name="email"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                <Field className="relative grid gap-2" data-invalid={fieldState.invalid}>
                                    <FieldLabel>Email Address</FieldLabel>
                                    <div className="relative">
                                        <Input type="email" {...field} className="pr-10"/>
                                        {fieldState.isTouched && fieldState.error && (
                                            <Tooltip>
                                            <TooltipTrigger asChild>
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 cursor-pointer"><AlertCircle size={16}/></span>
                                            </TooltipTrigger>
                                            <TooltipContent side="right"><p className="text-sm">{fieldState.error.message}</p></TooltipContent>
                                            </Tooltip>
                                        )}
                                    </div>
                                </Field>
                                )}
                            />
                            <div className="flex gap-2">
                                <Controller
                                    name="phone"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                    <Field className="relative grid gap-2 basis-2/3" data-invalid={fieldState.invalid}>
                                        <FieldLabel>Phone Number</FieldLabel>
                                        <div className="relative">
                                            <Input type="tel" {...field} className="pr-10"/>
                                            {fieldState.isTouched && fieldState.error && (
                                                <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 cursor-pointer"><AlertCircle size={16}/></span>
                                                </TooltipTrigger>
                                                <TooltipContent side="right"><p className="text-sm">{fieldState.error.message}</p></TooltipContent>
                                                </Tooltip>
                                            )}
                                        </div>
                                    </Field>
                                    )}
                                />
                                <Controller
                                    name="dateOfBirth"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                    <Field className="relative grid gap-2 basis-1/3" data-invalid={fieldState.invalid}>
                                        <FieldLabel>Date of Birth</FieldLabel>
                                        <div className="relative">
                                            <Input type="date" {...field} className="pr-10"/>
                                            {fieldState.isTouched && fieldState.error && (
                                                <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 cursor-pointer"><AlertCircle size={16}/></span>
                                                </TooltipTrigger>
                                                <TooltipContent side="right"><p className="text-sm">{fieldState.error.message}</p></TooltipContent>
                                                </Tooltip>
                                            )}
                                        </div>
                                    </Field>
                                    )}
                                />
                            </div>
                            <Controller
                                name="gender"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                <Field className="relative grid gap-2" data-invalid={fieldState.invalid}>
                                    <FieldLabel>Gender</FieldLabel>
                                    <div className="relative">
                                        <Select key={field.value} value={field.value ?? ""} onValueChange={field.onChange}>
                                            <SelectTrigger className="pr-10">
                                                <SelectValue placeholder={field.value} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Male">Male</SelectItem>
                                                <SelectItem value="Female">Female</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {fieldState.isTouched && fieldState.error && (
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500"><AlertCircle size={16} /></span>
                                                </TooltipTrigger>
                                                    <TooltipContent side="right">{fieldState.error.message}
                                                </TooltipContent>
                                            </Tooltip>
                                        )}
                                    </div>
                                </Field>
                                )}
                            />
                            <Controller
                                name="address"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                <Field className="relative grid gap-2" data-invalid={fieldState.invalid}>
                                    <FieldLabel>Address</FieldLabel>
                                    <div className="relative">
                                        <Input type="text" {...field} className="pr-10"/>
                                        {fieldState.isTouched && fieldState.error && (
                                            <Tooltip>
                                            <TooltipTrigger asChild>
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 cursor-pointer"><AlertCircle size={16}/></span>
                                            </TooltipTrigger>
                                            <TooltipContent side="right"><p className="text-sm">{fieldState.error.message}</p></TooltipContent>
                                            </Tooltip>
                                        )}
                                    </div>    
                                </Field>
                                )}
                                />
                        </FieldGroup>
                    </form>
                    </TooltipProvider>
                </CardContent>
                <CardFooter className="flex justify-end gap-4">
                    <Button variant="outline" onClick={() => dispatch({type: "toggleModal", payload: "openUpdate"})}>Cancel</Button>
                    <Button type="submit" form="update-form">Save Changes</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
