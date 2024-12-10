import React, { useState } from 'react';
import { router, useForm } from '@inertiajs/react';

const EditMenu = ({ menus }) => {
    const { data, setData, post, processing, errors } = useForm({
        kategori: '',
        nama_menu: '',
        harga: '',
        deskripsi: '',
        id: null,
    });

    const [showModal, setShowModal] = useState(false);

    // Handle opening the modal with data
    const openEditForm = (menu) => {
        setData({
            id: menu.id,
            kategori: menu.kategori,
            nama_menu: menu.nama_menu,
            harga: menu.harga,
            deskripsi: menu.deskripsi || '',
        });
        setShowModal(true);
    };

    // Handle closing the modal
    const closeModal = () => {
        setShowModal(false);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.id === undefined) {
            post('/add-menu', data); // Post data to Laravel route
            setShowModal(false);
        } else {
            post('/update-menu', data); // Post data to Laravel route
        }
    };


    return (
        <div className="main-container">
            <h1 className="text-2xl font-bold">Edit Menu</h1>
            <button
                className="add-menu-btn bg-blue-500 text-white p-2 rounded mt-4"
                onClick={() => openEditForm({})} // Empty object to reset form for adding a new menu
            >
                Add New Menu
            </button>
            <table className="styled-table mt-4 w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Category</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Price</th>
                        <th className="border px-4 py-2">Description</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {menus.map((menu) => (
                        <tr key={menu.id} data-id={menu.id}>
                            <td className="border px-4 py-2">{menu.id}</td>
                            <td className="border px-4 py-2">{menu.kategori}</td>
                            <td className="border px-4 py-2">{menu.nama_menu}</td>
                            <td className="border px-4 py-2">{menu.harga.toLocaleString()}</td>
                            <td className="border px-4 py-2">{menu.deskripsi}</td>
                            <td className="border px-4 py-2">
                                <button
                                    className="edit-btn bg-yellow-500 text-white px-4 py-2 rounded"
                                    onClick={() => openEditForm(menu)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="delete-btn bg-red-500 text-white px-4 py-2 rounded ml-2"
                                    onClick={() => router.delete(`/delete-menu/${menu.id}`)} // Replace with actual delete function
                                    formMethod='delete'
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="button-container-edit-menu mt-4">
                <a href="/admin-dashboard" className="back-edit-menu text-blue-500">Back</a>
            </div>

            {/* Modal for adding/editing menu */}
            {showModal && (
                <div className="modal fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h2 className="text-xl font-semibold mb-4">Edit Menu</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="menu-category" className="block text-sm font-medium text-gray-700">
                                    Category
                                </label>
                                <input
                                    type="text"
                                    id="menu-category"
                                    name="kategori"
                                    value={data.kategori}
                                    onChange={(e) => setData('kategori', e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="menu-name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="menu-name"
                                    name="nama_menu"
                                    value={data.nama_menu}
                                    onChange={(e) => setData('nama_menu', e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="menu-price" className="block text-sm font-medium text-gray-700">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    id="menu-price"
                                    name="harga"
                                    value={data.harga}
                                    onChange={(e) => setData('harga', e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="menu-description" className="block text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <textarea
                                    id="menu-description"
                                    name="deskripsi"
                                    value={data.deskripsi}
                                    onChange={(e) => setData('deskripsi', e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                                ></textarea>
                            </div>
                            <div className="flex justify-between mt-4">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                    disabled={processing}
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="bg-gray-500 text-white px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditMenu;
