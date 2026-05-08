import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';
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
                <Label htmlFor="email" className="block text-sm/6 font-medium text-foreground max-sm:text-sm">
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
                    className="block w-full rounded-md bg-muted px-3 py-1.5 text-base text-muted-foreground sm:text-sm/6"
                />
            </div>
            <div>
                <Button
                    type="submit"
                    disabled={loading}
                    className="px-3 py-1.5 rounded-lg bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                    Reset Password
                </Button>
            </div>
        </form>
    );
}

export default ForgotPassword;