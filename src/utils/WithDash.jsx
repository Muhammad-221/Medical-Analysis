import DashboardLayout from "../Layouts/Landing";

export default function WithDashLayout(page){
    return(
        <DashboardLayout>{page}</DashboardLayout>
    )
}