<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ReservationController extends Controller
{
    // Menampilkan daftar semua reservasi milik user yang sedang login
    public function index()
    {
        /** @var User $user */
        $user = auth()->user();  // Mendapatkan pengguna yang sedang login

        // Cek apakah user terautentikasi
        if (!$user) {
            return redirect()->route('login');  // Jika user tidak ditemukan, redirect ke login
        }

        // Mengambil semua reservasi terkait user yang terautentikasi
        $reservations = $user->reservations()  // Pastikan $user adalah objek yang benar
            ->latest()
            ->with(['user'])
            ->get();

        return Inertia::render('Reservations/Index', [
            'reservations' => $reservations
        ]);
    }

    // Menampilkan halaman form untuk membuat reservasi baru
    public function create()
    {
        return Inertia::render('Reservations/Create');
    }

    // Menyimpan reservasi baru
    public function store(Request $request)
    {
        // Validasi input dari user
        $validated = $request->validate([
            'reservation_datetime' => 'required|date|after:+24 hours',
            'people' => 'required|integer|min:1',
            'room_type' => 'required|in:Indoor,Outdoor,VIP',
            'payment_method' => 'required|in:BRI,BNI,Mandiri,BCA,OVO,Gopay,ShopeePay',
            'payment_proof' => 'required|file|max:2048|mimes:jpeg,png,jpg,gif,pdf,doc,docx',
            'additional_request' => 'nullable|string|max:500'
        ]);

        // Menyimpan file bukti pembayaran jika ada
        if ($request->hasFile('payment_proof')) {
            $path = $request->file('payment_proof')->store('payment_proofs', 'public');
            $validated['payment_proof'] = $path;
        }

        /** @var User $user */
        $user = auth()->user();  // Mendapatkan pengguna yang sedang login

        // Cek apakah user terautentikasi
        if (!$user) {
            return redirect()->route('login');  // Jika user tidak ditemukan, redirect ke login
        }

        // Menambahkan data tambahan sebelum menyimpan reservasi
        $validated['user_id'] = $user->id;  // Pastikan 'id' adalah atribut yang valid
        $validated['name'] = $user->name;  // Pastikan 'name' adalah atribut yang valid
        $validated['email'] = $user->email;
        $validated['phone'] = $user->phone;  // Pastikan 'phone' adalah atribut yang valid
        $validated['status'] = 'pending';  // Status default

        // Membuat reservasi baru
        Reservation::create($validated);

        return redirect()->route('reservations.index')
            ->with('success', 'Reservation created successfully.');
    }

    // Mengupdate informasi reservasi
    public function update(Request $request, Reservation $reservation)
    {
        // Validasi data input untuk update
        $validated = $request->validate([
            'reservation_datetime' => 'required|date|after:+24 hours',
        ]);

        // Mengupdate data reservasi
        $reservation->update($validated);

        return redirect()->back()
            ->with('success', 'Reservation updated successfully.');
    }

    // Menghapus reservasi
    public function destroy(Reservation $reservation)
    {
        // Cek apakah user yang sedang login adalah pemilik reservasi
        if ($reservation->user_id !== auth()->id()) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        // Hapus file bukti pembayaran jika ada
        if ($reservation->payment_proof) {
            Storage::disk('public')->delete($reservation->payment_proof);
        }

        // Hapus reservasi
        $reservation->delete();

        return response()->json(['success' => true]);
    }
}
