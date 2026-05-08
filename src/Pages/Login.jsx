import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

function Login() {
    const { login, user } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.pathname || "/dashboard";
    const [formLogin, setFormLogin] = useState({email: "", password: ""});
    const changeEmail = (event) => setFormLogin({...formLogin, email: event.target.value});
    const changePassword = (event) => setFormLogin({...formLogin, password: event.target.value});
    
    if (user) {
        return <Navigate to="/dashboard" replace />;
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            toast.dismiss();
            setLoading(true);
            await login(formLogin.email, formLogin.password);
            navigate(redirectPath, { replace: true });
        }catch(e){
            toast.error("Failed to login: "+ e.message)
        }
        setLoading(false)
    };

    return (
        <form onSubmit={handleSubmit} method="POST" className="space-y-3">
            <div className='space-y-1'>
                <Label htmlFor="email" className="block text-sm/6 font-medium text-foreground max-sm:text-sm">
                    Email address
                </Label>
                <Input
                    id="email"
                    name="email"
                    value={formLogin.email}
                    onChange={changeEmail}
                    placeholder="Enter your email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-muted px-3 py-1.5 text-base text-muted-foreground sm:text-sm/6"
                />
            </div>
            <div className='space-y-1'>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-foreground max-sm:text-sm">
                    Password
                    </label>
                    <div className="text-sm max-sm:text-xs">
                        <NavLink to="/forgotpassword" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                        </NavLink>
                    </div>
                </div>
                <Input
                    id="password"
                    name="password"
                    value={formLogin.password}
                    onChange={changePassword}
                    placeholder="Enter your password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-muted px-3 py-1.5 text-base text-muted-foreground sm:text-sm/6"
                />
            </div>
            <div>
                <Button
                    type="submit"
                    disabled={loading}
                    className="px-3 py-1.5 rounded-lg bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                    Sign In
                </Button>
            </div>
        </form>
    );
}

export default Login;