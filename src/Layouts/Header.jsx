import { Menu, Moon, Sun, LogOut, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function HeaderLayout({action}){
    const {theme, toggleTheme} = useTheme();
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const handleSignOut = async() => {
        await logout();
        navigate("/");
    };

    return (
        <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6 max-md:h-14 max-md:px-4">
            <div className="relative w-72">
                <Menu onClick={action} className="size-10 cursor-pointer flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors max-md:hidden"/>
                <div className="hidden items-center gap-3 max-md:flex">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary">
                        <Activity className="size-5 text-primary-foreground" />
                    </div>
                    <h1 className="text-base font-bold tracking-tight text-foreground">
                        Medical Analysis
                    </h1>
                </div>
            </div>

            <div className="flex items-center gap-3 max-md:gap-1">
                <Button 
                    onClick={toggleTheme} 
                    className={"flex size-9 items-center justify-center rounded-lg bg-white text-muted-foreground hover:bg-accent hover:text-foreground transition-colors max-md:size-8"}
                >
                    {theme === "dark" ? 
                        <Sun className="size-5 max-md:size-4"/> : 
                        <Moon className="size-5 max-md:size-4"/>}
                </Button>

                <div className="ml-2 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                        {user ? user.displayName?.slice(0, 2).toUpperCase() : "DR"}
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-sm font-medium text-foreground truncate max-w-[140px]">{user ? user.displayName : "Dr. Mohamed"}</p>
                        <p className="text-xs text-muted-foreground">Admin</p>
                    </div>
                </div>

                <button
                    onClick={handleSignOut}
                    title="Sign out"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                >
                    <LogOut className="h-4 w-4" />
                </button>
            </div>
        </header>
    );
}