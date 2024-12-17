import React, { useState } from 'react';
import { router, useForm } from '@inertiajs/react';

const AdminReservationStatus = ({ reservations }) => {
    const { data, setData, post, processing, errors } = useForm({
        id: null,
        status: 'Pending',
    });

    const [showModal, setShowModal] = useState(false);

    // Open the modal and set data for editing status
    const openEditStatusForm = (reservation) => {
        setData({
            id: reservation.id,
            status: reservation.status,
        });
        setShowModal(true);
    };

    // Close the modal
    const closeModal = () => {
        setShowModal(false);
    };

    // Handle status update submission
    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/validate-reservation`, data);
        setShowModal(false);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Manage Reservation Status</h1>

            {/* Reservations Table */}
            <table className="w-full mt-6 border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Status</th>
                        <th className="border px-4 py-2">Reservation Date & Time</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map((reservation) => (
                        <tr key={reservation.id} className="hover:bg-gray-100">
                            <td className="border px-4 py-2 text-center">{reservation.id}</td>
                            <td className="border px-4 py-2">{reservation.name}</td>
                            <td className="border px-4 py-2">{reservation.status}</td>
                            <td className="border px-4 py-2">{reservation.reservation_datetime}</td>
                            <td className="border px-4 py-2 text-center">
                                <button
                                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                                    onClick={() => openEditStatusForm(reservation)}
                                >
                                    Update Status
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

            {/* Modal for Updating Status */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h2 className="text-xl font-semibold mb-4">Update Reservation Status</h2>
                        <form onSubmit={handleSubmit}>
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

                            <div className="flex justify-between">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    disabled={processing}
                                >
                                    Update
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

export default AdminReservationStatus;
