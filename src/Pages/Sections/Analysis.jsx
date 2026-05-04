import { Clock, CheckCircle, AlertTriangle } from "lucide-react";

const analyses = [
  { id: "A001", test: "Blood Panel - Complete", patient: "Ahmed Hassan", date: "2026-04-14", status: "Completed", priority: "Normal", priorityBadge:"bg-muted text-muted-foreground", icon:CheckCircle, color:"text-success"},
  { id: "A002", test: "Thyroid Function T3/T4", patient: "Sara Ali", date: "2026-04-13", status: "In Progress", priority: "Urgent", priorityBadge:"bg-warning/10 text-warning", icon:Clock, color:"text-info"},
  { id: "A003", test: "Liver Function Panel", patient: "Omar Khalid", date: "2026-04-12", status: "Completed", priority: "Critical", priorityBadge:"bg-destructive/10 text-destructive", icon:CheckCircle, color:"text-success"},
  { id: "A004", test: "Complete Blood Count", patient: "Fatima Zahra", date: "2026-04-11", status: "Pending", priority: "Normal", priorityBadge:"bg-muted text-muted-foreground", icon:AlertTriangle, color:"text-warning"},
  { id: "A005", test: "Kidney Function Panel", patient: "Youssef Mansour", date: "2026-04-10", status: "Completed", priority: "Urgent", priorityBadge:"bg-warning/10 text-warning", icon:CheckCircle, color:"text-success"},
  { id: "A006", test: "Cardiac Markers", patient: "Khaled Ibrahim", date: "2026-04-08", status: "In Progress", priority: "Critical", priorityBadge:"bg-destructive/10 text-destructive", icon:Clock, color:"text-info"},
];

export default function AnalysisPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Analysis</h1>
        <p className="text-sm text-muted-foreground">Track and manage laboratory analysis.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
              <CheckCircle className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">24</p>
              <p className="text-sm text-muted-foreground">Completed Today</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-info/10">
              <Clock className="h-5 w-5 text-info" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">8</p>
              <p className="text-sm text-muted-foreground">In Progress</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
              <AlertTriangle className="h-5 w-5 text-warning" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">5</p>
              <p className="text-sm text-muted-foreground">Pending Review</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">ID</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Test</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Patient</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Date</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Priority</th>
              </tr>
            </thead>
            <tbody>
              {analyses.map((a) => (
                  <tr key={a.id} className="border-b border-border transition-colors hover:bg-muted/30">
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{a.id}</td>
                    <td className="px-4 py-3 font-medium text-foreground">{a.test}</td>
                    <td className="px-4 py-3 text-muted-foreground">{a.patient}</td>
                    <td className="px-4 py-3 text-muted-foreground">{a.date}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${a.color}`}>
                        <a.icon className="h-3.5 w-3.5" />
                        {a.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${a.priorityBadge}`}>
                        {a.priority}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
