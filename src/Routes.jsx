import WithDashLayout from "./utils/WithDash";
import ErrorPage from "./Pages/Error";
import DoctorsPage from "./Pages/Sectoions/Doctors";
import EmployeesPage from "./Pages/Sectoions/Employees";
import DashboardPage from "./Pages/Sectoions/Home";
import InvoicesPage from "./Pages/Sectoions/Invoices";
import LabSectionPage from "./Pages/Sectoions/LabSection";
import LabTestsPage from "./Pages/Sectoions/LapTests";
import PatientsPage from "./Pages/Sectoions/Patients";
import ReportsPage from "./Pages/Sectoions/Reports";
import UsersPage from "./Pages/Sectoions/Users";
import SigninPage from "./Pages/Signin";

const routes = [
    // {
    //     path: "/",
    //     element: <SigninPage/>
    // },
    {
        path: "/",
        element: WithDashLayout(<DashboardPage/>),
    },
    {
        path: "/sections",
        element: WithDashLayout(<LabSectionPage/>),
    },
    {
        path: "/doctors",
        element: WithDashLayout(<DoctorsPage/>),
    },
    {
        path: "/patients",
        element: WithDashLayout(<PatientsPage/>),
    },
    {
        path: "/tests",
        element: WithDashLayout(<LabTestsPage/>),
    },
    {
        path: "/employees",
        element: WithDashLayout(<EmployeesPage/>),
    },
    {
        path: "/reports",
        element: WithDashLayout(<ReportsPage/>),
    },
    {
        path: "/invoices",
        element: WithDashLayout(<InvoicesPage/>),
    },
    {
        path: "/users",
        element: WithDashLayout(<UsersPage/>),
    },
    {
        path: "*",
        element: <ErrorPage/>,
    },
]

export {routes};