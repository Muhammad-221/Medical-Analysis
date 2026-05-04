import { Activity, AlertTriangle, Calendar, FileCheck } from "lucide-react";

const recentActivities = [
  { id: "1", action: "Blood test completed", patient: "Ahmed Hassan", time: "5 min ago", type: "result", icon: FileCheck, color: "text-success" },
  { id: "2", action: "Critical alert triggered", patient: "Omar Khalid", time: "12 min ago", type: "alert", icon: AlertTriangle, color: "text-destructive" },
  { id: "3", action: "New appointment scheduled", patient: "Fatima Zahra", time: "25 min ago", type: "appointment", icon: Calendar, color: "text-primary" },
  { id: "4", action: "Lab results uploaded", patient: "Sara Ali", time: "1 hour ago", type: "result", icon: FileCheck, color: "text-success" },
  { id: "5", action: "Test ordered", patient: "Youssef Mansour", time: "2 hours ago", type: "test", icon: Activity, color: "text-info" },
  { id: "6", action: "Follow-up scheduled", patient: "Khaled Ibrahim", time: "3 hours ago", type: "appointment", icon: Calendar, color: "text-primary" },
];

export function RecentActivity() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
      <div className="mt-4 space-y-4">
        {recentActivities.map((r) => (
            <div key={r.id} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent">
                <r.icon className={`h-4 w-4 ${r.color}`} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground">{r.action}</p>
                <p className="text-xs text-muted-foreground">
                  {r.patient} · {r.time}
                </p>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}