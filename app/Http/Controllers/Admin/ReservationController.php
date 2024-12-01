<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Reservation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReservationController extends Controller
{
    public function index()
    {
        $reservations = Reservation::with('user')
            ->latest()
            ->get();

        return Inertia::render('Admin/Reservations/Index', [
            'reservations' => $reservations
        ]);
    }

    public function approve(Reservation $reservation)
    {
        $reservation->update(['status' => 'approved']);

        return redirect()->back()
            ->with('success', 'Reservation approved successfully.');
    }

    public function reject(Reservation $reservation)
    {
        $reservation->update(['status' => 'rejected']);

        return redirect()->back()
            ->with('success', 'Reservation rejected successfully.');
    }
}
