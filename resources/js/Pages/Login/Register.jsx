import React from 'react';
import { useForm } from '@inertiajs/react';

const Register = () => {
    const { data, setData, post, errors } = useForm({
        nama: '',
        jenis_kelamin: 'Laki-Laki',
        alamat: '',
        email: '',
        nomor_telepon: '',
        password: '',
        password_confirmation: '',
        deskripsi: '', // Tambahkan field deskripsi
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/register'); // Kirim request POST ke route register
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                <form onSubmit={handleSubmit}>
                    {/* Nama */}
                    <div className="mb-4">
                        <label htmlFor="nama" className="block text-sm font-medium text-gray-700">Nama</label>
                        <input
                            type="text"
                            id="nama"
                            name="nama"
                            value={data.nama}
                            onChange={(e) => setData('nama', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                        {errors.nama && <span className="text-red-500 text-xs">{errors.nama}</span>}
                    </div>

                    {/* Jenis Kelamin */}
                    <div className="mb-4">
                        <label htmlFor="jenis_kelamin" className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
                        <select
                            id="jenis_kelamin"
                            name="jenis_kelamin"
                            value={data.jenis_kelamin}
                            onChange={(e) => setData('jenis_kelamin', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="Laki-Laki">Laki-Laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                        {errors.jenis_kelamin && <span className="text-red-500 text-xs">{errors.jenis_kelamin}</span>}
                    </div>

                    {/* Alamat */}
                    <div className="mb-4">
                        <label htmlFor="alamat" className="block text-sm font-medium text-gray-700">Alamat</label>
                        <textarea
                            id="alamat"
                            name="alamat"
                            value={data.alamat}
                            onChange={(e) => setData('alamat', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                        {errors.alamat && <span className="text-red-500 text-xs">{errors.alamat}</span>}
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                        {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                    </div>

                    {/* Nomor Telepon */}
                    <div className="mb-4">
                        <label htmlFor="nomor_telepon" className="block text-sm font-medium text-gray-700">Nomor Telepon</label>
                        <input
                            type="text"
                            id="nomor_telepon"
                            name="nomor_telepon"
                            value={data.nomor_telepon}
                            onChange={(e) => setData('nomor_telepon', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.nomor_telepon && <span className="text-red-500 text-xs">{errors.nomor_telepon}</span>}
                    </div>

                    {/* Deskripsi */}
                    <div className="mb-4">
                        <label htmlFor="deskripsi" className="block text-sm font-medium text-gray-700">Deskripsi</label>
                        <textarea
                            id="deskripsi"
                            name="deskripsi"
                            value={data.deskripsi}
                            onChange={(e) => setData('deskripsi', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.deskripsi && <span className="text-red-500 text-xs">{errors.deskripsi}</span>}
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
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

                    {/* Password Confirmation */}
                    <div className="mb-4">
                        <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">Konfirmasi Password</label>
                        <input
                            type="password"
                            id="password_confirmation"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                        {errors.password_confirmation && <span className="text-red-500 text-xs">{errors.password_confirmation}</span>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
