import React, { useState } from 'react';
import { router, useForm } from '@inertiajs/react';

const EditReservation = ({ reservations }) => {
    const { data, setData, post, processing, errors } = useForm({
        id: null,
        user_id: '',
        name: '',
        
        reservation_datetime: '',
        people: '',
        room_type: 'Indoor',
        payment_method: 'BRI',
        additional_request: '',
    });

    const [showModal, setShowModal] = useState(false);

    // Open the modal and set data for editing or adding a new reservation
    const openEditForm = (reservation) => {
        setData({
            id: reservation.id || null,
            user_id: reservation.user_id || '',
            name: reservation.name || '',
            
            reservation_datetime: reservation.reservation_datetime || '',
            people: reservation.people || '',
            room_type: reservation.room_type || 'Indoor',
            payment_method: reservation.payment_method || 'BRI',
            additional_request: reservation.additional_request || '',
        });
        setShowModal(true);
    };

    // Close the modal
    const closeModal = () => {
        setShowModal(false);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.id === null) {
            post('/add-reservation', data);
        } else {
            post('/update-reservation', data);
        }
        setShowModal(false);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Edit Reservation</h1>

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => openEditForm({})}
            >
                Add New Reservation
            </button>

            {/* Reservations Table */}
            <table className="w-full mt-6 border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">User ID</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Status</th>
                        <th className="border px-4 py-2">Reservation Date & Time</th>
                        <th className="border px-4 py-2">People</th>
                        <th className="border px-4 py-2">Room Type</th>
                        <th className="border px-4 py-2">Payment Method</th>
                        <th className="border px-4 py-2">Additional Request</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map((reservation) => (
                        <tr key={reservation.id} className="hover:bg-gray-100">
                            <td className="border px-4 py-2 text-center">{reservation.id}</td>
                            <td className="border px-4 py-2">{reservation.user_id}</td>
                            <td className="border px-4 py-2">{reservation.name}</td>
                            <td className="border px-4 py-2">{reservation.status}</td>
                            <td className="border px-4 py-2">{reservation.reservation_datetime}</td>
                            <td className="border px-4 py-2">{reservation.people}</td>
                            <td className="border px-4 py-2">{reservation.room_type}</td>
                            <td className="border px-4 py-2">{reservation.payment_method}</td>
                            <td className="border px-4 py-2">{reservation.additional_request}</td>
                            <td className="border px-4 py-2 text-center">
                                <button
                                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2"
                                    onClick={() => openEditForm(reservation)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                    onClick={() => router.delete(`/delete-reservation/${reservation.id}`)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-4">
                <a href="/admin-dashboard" className="text-blue-500 hover:underline">
                    Back
                </a>
            </div>

            {/* Modal for Edit/Add Form */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h2 className="text-xl font-semibold mb-4">{data.id ? 'Edit Reservation' : 'Add Reservation'}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full px-3 py-2 border rounded focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Status</label>
                                <select
                                    value={data.status}
                                    onChange={(e) => setData('status', e.target.value)}
                                    className="w-full px-3 py-2 border rounded focus:outline-none"
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Rejected">Rejected</option>
                                    <option value="Approved">Approved</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Reservation Date & Time</label>
                                <input
                                    type="datetime-local"
                                    value={data.reservation_datetime}
                                    onChange={(e) => setData('reservation_datetime', e.target.value)}
                                    className="w-full px-3 py-2 border rounded focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">People</label>
                                <input
                                    type="number"
                                    value={data.people}
                                    onChange={(e) => setData('people', e.target.value)}
                                    className="w-full px-3 py-2 border rounded focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Room Type</label>
                                <select
                                    value={data.room_type}
                                    onChange={(e) => setData('room_type', e.target.value)}
                                    className="w-full px-3 py-2 border rounded focus:outline-none"
                                >
                                    <option value="Indoor">Indoor</option>
                                    <option value="Outdoor">Outdoor</option>
                                    <option value="VIP">VIP</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                                <select
                                    value={data.payment_method}
                                    onChange={(e) => setData('payment_method', e.target.value)}
                                    className="w-full px-3 py-2 border rounded focus:outline-none"
                                >
                                    <option value="BRI">BRI</option>
                                    <option value="BNI">BNI</option>
                                    <option value="Mandiri">Mandiri</option>
                                    <option value="BCA">BCA</option>
                                    <option value="OVO/Gopay/ShopeePay">OVO/Gopay/ShopeePay</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Additional Request</label>
                                <textarea
                                    value={data.additional_request}
                                    onChange={(e) => setData('additional_request', e.target.value)}
                                    className="w-full px-3 py-2 border rounded focus:outline-none"
                                ></textarea>
                            </div>

                            <div className="flex justify-between">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    disabled={processing}
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
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

export default EditReservation;
