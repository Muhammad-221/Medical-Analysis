import { LayoutDashboard, Users, TestTube, FlaskConical, FileText, Settings, Activity } from 'lucide-react';
import { cn } from "@/lib/utils";
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Patients', path: '/patients', icon: Users },
  { label: 'Lab Tests', path: '/tests', icon: TestTube },
  { label: 'Analysis', path: '/analysis', icon: FlaskConical },
  { label: 'Reports', path: '/reports', icon: FileText },
  { label: 'Settings', path: '/settings', icon: Settings },
];

export default function LinksLayout({collapsed}) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={cn(
          "flex h-screen flex-col border-r border-border bg-card transition-all duration-300 max-md:hidden",
          collapsed ? "w-16" : "w-64"
        )}
      >
        <div className="flex h-16 items-center gap-3 border-b border-border px-4 max-md:hidden">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary">
            <Activity className="h-5 w-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <h1 className="text-lg font-bold tracking-tight text-foreground">
              Medical Analysis
            </h1>
          )}
        </div>

        <nav className="flex-1 space-y-1 p-3">
          {navItems.map((item) => (
              <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                  cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )
                  }
              >
                  <item.icon className="h-5 w-5 shrink-0" />
                  {!collapsed && <span>{item.label}</span>}
              </NavLink>
          ))}
        </nav>
      </aside>
      {/* Mobile floating bottom navigation */}
      <nav
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-90 w-[calc(100%-2rem)] max-w-lg bg-card/95 backdrop-blur border border-border rounded-full shadow-[0_8px_30px_-4px_rgba(0,0,0,0.25)]"
        style={{ marginBottom: "env(safe-area-inset-bottom)" }}
        aria-label="Primary"
      >
        <ul className="flex items-center justify-around px-2 py-2">
          {navItems.slice(0, 5).map((item) => (
            <li key={item.path} className="flex-1">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                  "flex flex-col items-center justify-center gap-0.5 rounded-lg px-2 py-2 text-xs font-medium transition-all",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="truncate text-[10px] leading-none mt-0.5">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
