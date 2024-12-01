import { useState } from 'react';
import { Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Sidebar from '@/Components/Sidebar';

export default function AuthenticatedLayout({ user, children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar 
                user={user} 
                onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            />

            <Sidebar 
                isOpen={isSidebarOpen} 
                onClose={() => setIsSidebarOpen(false)} 
            />

            <main className="pt-16 pb-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </div>
    );
}