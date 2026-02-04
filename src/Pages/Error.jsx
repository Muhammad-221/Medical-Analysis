import { NavLink } from "react-router-dom";

export default function ErrorPage(){
    return(
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-1/2 text-center">
                <h1 className="text-4xl font-bold text-red-500">Error 404: Page Not Found</h1>
                <p className="text-lg mt-4 text-teal-950 font-medium">The page you are looking for does not exist.</p>
                <NavLink to="/" className="mt-4 font-semibold inline-block bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300">
                    Go Back Home
                </NavLink>
            </div>
        </div>
    )
}