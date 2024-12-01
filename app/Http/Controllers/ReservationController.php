<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ReservationController extends Controller
{
    public function index()
    {
        $reservations = auth()->user()->reservations()
            ->latest()
            ->with(['user'])
            ->get();

        return Inertia::render('Reservations/Index', [
            'reservations' => $reservations
        ]);
    }

    public function create()
    {
        return Inertia::render('Reservations/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'reservation_datetime' => 'required|date|after:+24 hours',
            'people' => 'required|integer|min:1',
            'room_type' => 'required|in:Indoor,Outdoor,VIP',
            'payment_method' => 'required|in:BRI,BNI,Mandiri,BCA,OVO/Gopay/ShopeePay',
            'payment_proof' => 'required|file|max:2048|mimes:jpeg,png,jpg,gif,pdf,doc,docx',
            'additional_request' => 'nullable|string|max:500'
        ]);

        if ($request->hasFile('payment_proof')) {
            $path = $request->file('payment_proof')->store('payment_proofs', 'public');
            $validated['payment_proof'] = $path;
        }

        $validated['user_id'] = auth()->id();
        $validated['name'] = auth()->user()->nama;
        $validated['email'] = auth()->user()->email;
        $validated['phone'] = auth()->user()->nomor_telepon;
        $validated['status'] = 'pending';

        Reservation::create($validated);

        return redirect()->route('reservations.index')
            ->with('success', 'Reservation created successfully.');
    }

    public function update(Request $request, Reservation $reservation)
    {
        $validated = $request->validate([
            'reservation_datetime' => 'required|date|after:+24 hours',
        ]);

        $reservation->update($validated);

        return redirect()->back()
            ->with('success', 'Reservation updated successfully.');
    }

    public function destroy(Reservation $reservation)
    {
        if ($reservation->user_id !== auth()->id()) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        if ($reservation->payment_proof) {
            Storage::disk('public')->delete($reservation->payment_proof);
        }

        $reservation->delete();

        return response()->json(['success' => true]);
    }
}
