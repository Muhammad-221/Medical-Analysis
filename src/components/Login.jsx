import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function FormLogin() {
    const [formLogin, setFormLogin] = useState({userName: "", password: ""})
    const changeUserName = (event) => setFormLogin({...formLogin, userName: event.target.value});
    const changePassword = (event) => setFormLogin({...formLogin, password: event.target.value});

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            return event.stopPropagation();
        }
    };

    return (
        <div className="w-1/2 mx-auto max-md:w-4/5">
            <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                        Username
                    </label>
                    <div className="mt-2">
                        <input
                        id="username"
                        name="username"
                        value={formLogin.userName}
                        onChange={changeUserName}
                        type="text"
                        required
                        autoComplete="username"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                        Password
                        </label>
                        <div className="text-sm">
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                Forgot password?
                            </a>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input
                        id="password"
                        name="password"
                        value={formLogin.password}
                        onChange={changePassword}
                        type="password"
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Login
                    </button>
                </div>
            </form>
            <p className="mt-10 text-center text-sm/6 text-gray-500">
                Not a member?{' '}
                <NavLink to="/dashboard" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Start a 14 day free trial
                </NavLink>
            </p>
        </div>
    );
}

export default FormLogin;