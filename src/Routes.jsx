import WithDashLayout from "./utils/WithDash";
import ErrorPage from "./Pages/Error";
import DashboardPage from "./Pages/Sections/Home";
import LabTestsPage from "./Pages/Sections/LabTests";
import PatientsPage from "./Pages/Sections/Patients";
import ReportsPage from "./Pages/Sections/Reports";
import SettingsPage from "./Pages/Sections/Settings";
import AnalysisPage from "./Pages/Sections/Analysis";
import AuthLayout from "./Layouts/AuthLayout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";

const routes = [
    {
        path: "/",
        element: <AuthLayout/>,
        children:[
            {
                index: true,
                element: <Login/>
            },
            {
                path: "/signup",
                element: <Signup/>
            },
            {
                path: "/forgotpassword",
                element: <ForgotPassword/>
            }
        ]
    },
    {
        path: "/dashboard",
        element: WithDashLayout(<DashboardPage/>)
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
        path: "/analysis",
        element: WithDashLayout(<AnalysisPage/>),
    },
    {
        path: "/reports",
        element: WithDashLayout(<ReportsPage/>),
    },
    {
        path: "/settings",
        element: WithDashLayout(<SettingsPage/>),
    },
    {
        path: "*",
        element: <ErrorPage/>,
    },
]

export {routes};