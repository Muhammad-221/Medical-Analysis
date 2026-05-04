import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'sonner';

function Signup() {
    const { signup, user } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [formSignup, setFormSignup] = useState({name: "", email: "", password: "", confirmPassword: ""});
    const changeName = (event) => setFormSignup({...formSignup, name: event.target.value});
    const changeEmail = (event) => setFormSignup({...formSignup, email: event.target.value});
    const changePassword = (event) => setFormSignup({...formSignup, password: event.target.value});
    const changeConfirmPassword = (event) => setFormSignup({...formSignup, confirmPassword: event.target.value});

    if (user) {
        return <Navigate to="/dashboard" replace />;
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(formSignup.password != formSignup.confirmPassword) {
            return toast.error("Passwords do not match");
        }
        try{
            toast.dismiss();
            setLoading(true);
            await signup(formSignup.name, formSignup.email, formSignup.password, formSignup.confirmPassword);
            navigate("/dashboard");
        }catch(e){
            toast.error("Failed to update account: "+ e.message)
        }
        setLoading(false)
    };

    return (
        <form onSubmit={handleSubmit} method="POST" className="space-y-3">
            <div className='space-y-1'>
                <Label htmlFor="name" className="block text-sm/6 font-medium text-gray-900 max-sm:text-sm">
                    Full Name
                </Label>
                <Input
                id="name"
                name="name"
                value={formSignup.name}
                onChange={changeName}
                placeholder="Enter your full name"
                type="text"
                required
                autoComplete="name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
            <div className='space-y-1'>
                <Label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 max-sm:text-sm">
                    Email address
                </Label>
                <Input
                id="email"
                name="email"
                value={formSignup.email}
                onChange={changeEmail}
                placeholder="Enter your email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
            <div className='space-y-1'>
                <Label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 max-sm:text-sm">
                    Password
                </Label>
                <Input
                id="password"
                name="password"
                value={formSignup.password}
                onChange={changePassword}
                placeholder="Enter your password"
                type="password"
                required
                autoComplete="current-password"
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
                value={formSignup.confirmPassword}
                onChange={changeConfirmPassword}
                placeholder="Confirm your password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
            <div>
                <Button
                    type="submit"
                    disabled={loading}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Signup
                </Button>
            </div>
        </form>
    );
}

export default Signup;