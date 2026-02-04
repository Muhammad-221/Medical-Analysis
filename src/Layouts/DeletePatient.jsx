import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card"

export default function DeletePatient({open, close, remove}){
    if (!open) return null;

    return(
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <Card className="w-full max-w-md h-auto overflow-y-auto">
                <CardHeader>
                    <CardTitle>Are you absolutely sure?</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>Are you sure you want to delete this patient.</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-end gap-4">
                    <Button variant="outline" onClick={() => close(false)}>Cancel</Button>
                    <Button onClick={() => remove()} className="bg-red-500 hover:bg-red-600">Delete Patient</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
