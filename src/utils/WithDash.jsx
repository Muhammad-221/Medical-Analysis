import DashboardLayout from "@/Layouts/DashboardLayout";
import ProtectedRoute from "@/Layouts/ProtectedRoute";

export default function WithDashLayout(page){
    return(
        <ProtectedRoute>
            <DashboardLayout>{page}</DashboardLayout>
        </ProtectedRoute>
    )
}