import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

export default function ReservationForm() {
    const { data, setData, post, errors } = useForm({
        reservation_datetime: '',
        people: '',
        room_type: '',
        payment_method: '',
        additional_request: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/reservations');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow-md w-96"
            >
                <h1 className="text-2xl font-bold mb-4 text-blue-700">
                    New Reservation
                </h1>
                <label className="block mb-2">Date & Time</label>
                <input
                    type="datetime-local"
                    className="w-full p-2 mb-4 border rounded"
                    value={data.reservation_datetime}
                    onChange={(e) =>
                        setData('reservation_datetime', e.target.value)
                    }
                    required
                />

                <label className="block mb-2">Number of People</label>
                <input
                    type="number"
                    className="w-full p-2 mb-4 border rounded"
                    value={data.people}
                    onChange={(e) => setData('people', e.target.value)}
                    required
                />

                <label className="block mb-2">Room Type</label>
                <select
                    className="w-full p-2 mb-4 border rounded"
                    value={data.room_type}
                    onChange={(e) => setData('room_type', e.target.value)}
                    required
                >
                    <option value="">Choose...</option>
                    <option value="Indoor">Indoor</option>
                    <option value="Outdoor">Outdoor</option>
                    <option value="VIP">VIP</option>
                </select>

                <label className="block mb-2">Payment Method</label>
                <select
                    className="w-full p-2 mb-4 border rounded"
                    value={data.payment_method}
                    onChange={(e) =>    
                        setData('payment_method', e.target.value)
                    }
                    required
                >
                    <option value="">Choose...</option>
                    <option value="BRI">BRI</option>
                    <option value="BNI">BNI</option>
                    <option value="Mandiri">Mandiri</option>
                    <option value="BCA">BCA</option>
                    <option value="OVO/Gopay/ShopeePay">
                        OVO/Gopay/ShopeePay
                    </option>
                </select>

                <label className="block mb-2">Additional Request</label>
                <textarea
                    className="w-full p-2 mb-4 border rounded"
                    value={data.additional_request}
                    onChange={(e) =>
                        setData('additional_request', e.target.value)
                    }
                ></textarea>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                >
                    Submit Reservation
                </button>
            </form>
        </div>
    );
}
