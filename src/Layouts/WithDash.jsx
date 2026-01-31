import DashboardLayout from "./Landing";

export default function WithDashLayout(page){
    return(
        <DashboardLayout>{page}</DashboardLayout>
    )
}