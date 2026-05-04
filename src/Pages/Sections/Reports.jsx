import { FileText, Download, Eye } from "lucide-react";
import { toast } from "sonner";

const reports = [
  { id: "R001", title: "Monthly Lab Summary — March 2026", date: "2026-04-01", type: "Summary", size: "2.4 MB" },
  { id: "R002", title: "Critical Results Overview Q1", date: "2026-04-02", type: "Critical", size: "1.8 MB" },
  { id: "R003", title: "Patient Blood Panel Trends", date: "2026-04-05", type: "Analysis", size: "3.1 MB" },
  { id: "R004", title: "Equipment Calibration Log", date: "2026-04-08", type: "Maintenance", size: "0.9 MB" },
  { id: "R005", title: "Staff Performance Report", date: "2026-04-10", type: "HR", size: "1.5 MB" },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
        <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Reports</h1>
            <p className="text-sm text-muted-foreground">View and download generated reports.</p>
        </div>

        <div className="grid gap-4">
            {reports.map((r) => (
                <div
                    key={r.id}
                    className="flex items-center justify-between rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:bg-accent/50"
                >
                    <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                            <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium text-foreground">{r.title}</p>
                            <p className="text-sm text-muted-foreground">
                                {r.date} · {r.type} · {r.size}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
                            <Eye className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => toast.success(`Downloading ${r.title}`)}
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                        >
                            <Download className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}
