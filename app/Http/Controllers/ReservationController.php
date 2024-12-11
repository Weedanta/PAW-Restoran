<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;

class ReservationController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validasi data reservasi
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'status' => ['required', 'in:Pending,Rejected,Approved'],
            'reservation_datetime' => ['required', 'date', 'after_or_equal:today'],
            'people' => ['required', 'integer', 'min:1'],
            'room_type' => ['required', 'in:Indoor,Outdoor,VIP'],
            'payment_method' => ['required', 'in:BRI,BNI,Mandiri,BCA,OVO/Gopay/ShopeePay'],
            'additional_request' => ['nullable', 'string'],
        ]);

        $user_id = session('user_id');

        $reservation = Reservation::create([
            'name' => $validated['name'],
            'status' => $validated['status'],
            'reservation_datetime' => $validated['reservation_datetime'],
            'people' => $validated['people'],
            'room_type' => $validated['room_type'],
            'payment_method' => $validated['payment_method'],
            'additional_request' => $validated['additional_request'],
            'user_id' => $user_id
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Reservation $reservation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Reservation $reservation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Reservation $reservation)
    {
        // Validasi data reservasi
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'status' => ['required', 'in:Pending,Rejected,Approved'],
            'reservation_datetime' => ['required', 'date', 'after_or_equal:today'],
            'people' => ['required', 'integer', 'min:1'],
            'room_type' => ['required', 'in:Indoor,Outdoor,VIP'],
            'payment_method' => ['required', 'in:BRI,BNI,Mandiri,BCA,OVO/Gopay/ShopeePay'],
            'additional_request' => ['nullable', 'string'],
        ]);

        $user_id = session('user_id');

        $new_reservation = [
            'name' => $validated['name'],
            'status' => $validated['status'],
            'reservation_datetime' => $validated['reservation_datetime'],
            'people' => $validated['people'],
            'room_type' => $validated['room_type'],
            'payment_method' => $validated['payment_method'],
            'additional_request' => $validated['additional_request'],
            'user_id' => $user_id
        ];

        Reservation::where('id', $validated['id'])->update($new_reservation);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reservation $reservation, string $id)
    {
        Reservation::where('id', $id)->delete();
    }
}
