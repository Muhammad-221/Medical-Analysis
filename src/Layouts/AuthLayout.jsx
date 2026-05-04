import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Activity } from "lucide-react";

export default function AuthLayout() {
    const location = useLocation();
    const isSignIn = location.pathname === "/signin" || location.pathname === "/";

    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-background px-4 max-sm:my-2">
            <div className="w-full max-w-md rounded-2xl border border-border bg-card px-8 py-5 shadow-lg">
                <div className="mb-6 flex flex-col items-center gap-3 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <Activity className="h-6 w-6 text-primary" />
                    </div>
                    <h1 className="text-2xl font-bold text-foreground">Medical Analysis</h1>
                    <p className="text-sm text-muted-foreground"> {isSignIn ? "Sign in to your dashboard" : "Sign up for your dashboard"} </p>
                </div>
                <Outlet/>
                <p className="mt-6 text-center text-sm text-muted-foreground">
                    {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
                    <NavLink to={isSignIn ? "/signup" : "/"} className="font-semibold text-indigo-600 hover:text-indigo-500">
                        {isSignIn ? "Sign up" : "Sign in"}
                    </NavLink>
                </p>
            </div>
        </div>
    );
}