<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function index()
    {
        $reservations = Reservation::where('user_id', auth()->id)->get();

        return inertia('Reservations/Index', [
            'reservations' => $reservations,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'reservation_datetime' => 'required|date|after:tomorrow',
            'people' => 'required|integer|min:1',
            'room_type' => 'required|string',
            'payment_method' => 'required|string',
        ]);

        Reservation::create([
            'user_id' => auth()->id,
            'name' => auth()->user->name,
            'email' => auth()->user->email,
            'phone' => $request->phone,
            'reservation_datetime' => $request->reservation_datetime,
            'people' => $request->people,
            'room_type' => $request->room_type,
            'payment_method' => $request->payment_method,
            'additional_request' => $request->additional_request,
        ]);        

        return redirect()->route('reservations.index');
    }
}
