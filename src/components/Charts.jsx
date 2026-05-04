import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const monthlyTestData = [
  { month: "Sep", tests: 420, abnormal: 38 },
  { month: "Oct", tests: 480, abnormal: 45 },
  { month: "Nov", tests: 510, abnormal: 52 },
  { month: "Dec", tests: 390, abnormal: 30 },
  { month: "Jan", tests: 460, abnormal: 41 },
  { month: "Feb", tests: 530, abnormal: 48 },
  { month: "Mar", tests: 570, abnormal: 55 },
  { month: "Apr", tests: 490, abnormal: 42 },
];

const testDistribution = [
  { name: "Blood Panel", value: 35, fill: "var(--color-chart-1)" },
  { name: "Thyroid", value: 18, fill: "var(--color-chart-2)" },
  { name: "Liver", value: 15, fill: "var(--color-chart-3)" },
  { name: "Kidney", value: 12, fill: "var(--color-chart-4)" },
  { name: "Other", value: 20, fill: "var(--color-chart-5)" },
];

const weeklyData = [
  { day: "Mon", patients: 32 },
  { day: "Tue", patients: 28 },
  { day: "Wed", patients: 45 },
  { day: "Thu", patients: 38 },
  { day: "Fri", patients: 41 },
  { day: "Sat", patients: 22 },
  { day: "Sun", patients: 15 },
];

export function TestTrendChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-foreground">Monthly Test Trends</h3>
      <p className="mt-1 text-sm text-muted-foreground">Tests performed vs abnormal results</p>
      <div className="mt-4 h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={monthlyTestData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "var(--muted-foreground)" }} />
            <YAxis tick={{ fontSize: 12, fill: "var(--muted-foreground)" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="tests"
              stroke="var(--primary)"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="Total Tests"
            />
            <Line
              type="monotone"
              dataKey="abnormal"
              stroke="var(--destructive)"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="Abnormal"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function WeeklyPatientsChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-foreground">Weekly Patients</h3>
      <p className="mt-1 text-sm text-muted-foreground">Patient visits this week</p>
      <div className="mt-4 h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="day" tick={{ fontSize: 12, fill: "var(--muted-foreground)" }} />
            <YAxis tick={{ fontSize: 12, fill: "var(--muted-foreground)" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
              }}
            />
            <Bar dataKey="patients" fill="var(--primary)" radius={[6, 6, 0, 0]} name="Patients" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const COLORS = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)", "var(--chart-4)", "var(--chart-5)"];

export function TestDistributionChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-foreground">Test Distribution</h3>
      <p className="mt-1 text-sm text-muted-foreground">Breakdown by test type</p>
      <div className="mt-4 h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={testDistribution}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={4}
              dataKey="value"
            >
              {testDistribution.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}