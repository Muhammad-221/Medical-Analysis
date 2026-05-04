import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';
import { toast } from 'sonner';

export default function SettingsPage() {
    const { user, updateName, updateUserEmail, updateUserPassword } = useAuth();
    const [loading, setLoading] = useState(false);
    const [formUpdate, setFormUpdate] = useState({name: "", email: "", password: "", confirmPassword: ""});
    const changeName = (event) => setFormUpdate({...formUpdate, name: event.target.value});
    const changeEmail = (event) => setFormUpdate({...formUpdate, email: event.target.value});
    const changePassword = (event) => setFormUpdate({...formUpdate, password: event.target.value});
    const changeConfirmPassword = (event) => setFormUpdate({...formUpdate, confirmPassword: event.target.value});

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formUpdate.password != formUpdate.confirmPassword) {
            return toast.error("Passwords do not match");
        }
        const promises = [];
        setLoading(true);
        toast.dismiss();
        if(formUpdate.name != user.displayName ){
            promises.push(updateName(formUpdate.name));
        }
        if(formUpdate.email != user.email){
            promises.push(updateUserEmail(formUpdate.email));
        }
        if(formUpdate.password){
            promises.push(updateUserPassword(formUpdate.password));
        }
        Promise.all(promises)
            .then(() => {
                toast.success("Account updated successfully");
                setFormUpdate(prev => ({...prev, password: "", confirmPassword: ""}));
            })
            .catch(() => {
                toast.error("Failed to update account")
            })
            .finally(() => {
                setLoading(false);
            })
    };
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-foreground">Settings</h1>
                <p className="text-sm text-muted-foreground">Manage your account and system preferences.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">Profile</h3>
                <form onSubmit={handleSubmit} method="POST" className="mt-4 space-y-4">
                    <div className='space-y-1'>
                        <Label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                            Full Name
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            onChange={changeName}
                            defaultValue={user.displayName}
                            placeholder="Enter your full name"
                            type="text"
                            required
                            autoComplete="name"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    <div className='space-y-1'>
                        <Label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Email address
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            onChange={changeEmail}
                            defaultValue={user?.email}
                            placeholder="Enter your email"
                            type="email"
                            required
                            autoComplete="email"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    <div className='space-y-1'>
                        <Label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                            Password
                        </Label>
                        <Input
                            id="password"
                            name="password"
                            value={formUpdate.password}
                            onChange={changePassword}
                            placeholder="Enter your password"
                            autoComplete="new-password"
                            type="password"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    <div className='space-y-1'>
                        <Label htmlFor="confirmPassword" className="block text-sm/6 font-medium text-gray-900 max-sm:text-sm">
                            Confirm Password
                        </Label>
                        <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formUpdate.confirmPassword}
                            onChange={changeConfirmPassword}
                            placeholder="Confirm your password"
                            autoComplete="new-password"
                            type="password"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    <div className='space-y-1'>
                        <Label className="text-sm font-medium text-foreground">Role</Label>
                        <Input
                            type="text"
                            defaultValue="Admin"
                            disabled
                            className="mt-1 h-10 w-full rounded-lg border border-input bg-muted px-3 text-sm text-muted-foreground"
                        />
                    </div>
                    <Button
                        type="submit"
                        disabled={loading}
                        className="h-10 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                        Save Changes
                    </Button>
                </form>
            </div>
        </div>
    );
}
