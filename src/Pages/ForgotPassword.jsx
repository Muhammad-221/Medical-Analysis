import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'sonner';

function ForgotPassword() {
    const { resetPassword } = useAuth();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const changeEmail = (e) => setEmail(e.target.value)

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            toast.dismiss();
            setLoading(true);
            await resetPassword(email);
            toast.success("check your email for password reset instructions.")
        }catch(e){
            toast.error("Failed to reset password: "+ e.message)
        }
        setLoading(false)
    };

    return (
        <form onSubmit={handleSubmit} method="POST" className="space-y-3">
            <div className='space-y-1'>
                <Label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 max-sm:text-sm">
                    Your Email
                </Label>
                <Input
                    id="email"
                    name="email"
                    value={email}
                    onChange={changeEmail}
                    placeholder="Enter your email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
            <div>
                <Button
                    type="submit"
                    disabled={loading}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Reset Password
                </Button>
            </div>
        </form>
    );
}

export default ForgotPassword;