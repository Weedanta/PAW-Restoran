import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

export default function Register() {
    const { data, setData, post, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow-md w-96"
            >
                <h1 className="text-2xl font-bold mb-4 text-blue-700">
                    Register
                </h1>
                <label className="block mb-2">Full Name</label>
                <input
                    type="text"
                    className="w-full p-2 mb-4 border rounded"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    required
                />
                {errors.name && (
                    <div className="text-red-500 text-sm mb-2">{errors.name}</div>
                )}

                <label className="block mb-2">Email</label>
                <input
                    type="email"
                    className="w-full p-2 mb-4 border rounded"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    required
                />
                {errors.email && (
                    <div className="text-red-500 text-sm mb-2">{errors.email}</div>
                )}

                <label className="block mb-2">Password</label>
                <input
                    type="password"
                    className="w-full p-2 mb-4 border rounded"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    required
                />
                {errors.password && (
                    <div className="text-red-500 text-sm mb-2">
                        {errors.password}
                    </div>
                )}

                <label className="block mb-2">Confirm Password</label>
                <input
                    type="password"
                    className="w-full p-2 mb-4 border rounded"
                    value={data.password_confirmation}
                    onChange={(e) =>
                        setData('password_confirmation', e.target.value)
                    }
                    required
                />
                {errors.password_confirmation && (
                    <div className="text-red-500 text-sm mb-2">
                        {errors.password_confirmation}
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                >
                    Register
                </button>
            </form>
        </div>
    );
}
