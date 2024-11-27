import React from 'react';

export default function Dashboard({ user }) {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="p-6 bg-white rounded shadow-md w-96">
                <h1 className="text-2xl font-bold mb-4 text-blue-700">
                    Welcome, {user.name}!
                </h1>
                <p className="mb-4">Email: {user.email}</p>
                <a
                    href="/logout"
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                    Logout
                </a>
            </div>
        </div>
    );
}
