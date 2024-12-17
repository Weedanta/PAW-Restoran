import React, { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import Hero from '../../Components/LandingPage/Hero';

const Login = () => {
    const { message } = usePage().props
    const { data, setData, post, errors } = useForm({
        email: '',
        password: '',
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.email.substring(0, 5) === "admin") {
            post('/loginAdmin');
        } else {
            post('/login')
        }
    };

    return (
        <Hero image={"/images/Hero.png"}>
            <div className="flex justify-center items-center w-full pt-8">
                <div className="relative bg-primary-7 bg-opacity-90 p-8 rounded-lg shadow-lg w-[84%] lg:w-[32vw]">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

                    {message && (
                        <div className="text-lg text-red-500 text-center mb-4">{message}</div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm text-left font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
                                required
                            />
                            {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm text-left font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                            {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-primary-4 text-white font-semibold rounded-lg shadow-md duration-300 hover:brightness-75 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Login
                        </button>
                    </form>

                    {/* Link ke Halaman Register */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600 text-sm">
                            Belum punya akun?{' '}
                            <a href="/register" className="text-primary-4 hover:underline">
                                Daftar di sini
                            </a>
                        </p>
                    </div>
                </div>
            </div>

        </Hero>
    );
};

export default Login;
