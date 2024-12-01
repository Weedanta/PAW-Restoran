<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ReservationController;

// Route untuk halaman utama (Home)
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/reservation', function () {
    return Inertia('Reservation');
});

Route::get('/menu', function () {
    return Inertia('Menu');
});

Route::get('/aboutUs', function () {
    return Inertia('AboutUs');
});

Route::get('/contactus', function () {
    return Inertia('ContactUs');
});

Route::get('/login', function () {
    return Inertia::render('Login');
});

Route::get('/register', function () {
    return Inertia::render('Register');
});

Route::get('/login-admin', function () {
    return Inertia::render('LoginAdmin');
});

// Middleware untuk membatasi akses hanya untuk pengguna yang sudah login
// Route::middleware(['auth'])->group(function () {

//     // Dashboard
//     Route::get('/dashboard', function () {
//         return Inertia::render('Dashboard', [
//             'user' => Auth::user(), // Menggunakan Auth::user() untuk data pengguna
//         ]);
//     })->name('dashboard');

//     // Routes untuk Reservasi
//     Route::get('/reservations', [ReservationController::class, 'index'])->name('reservations.index');
//     Route::get('/reservations/create', [ReservationController::class, 'create'])->name('reservations.create');
//     Route::post('/reservations', [ReservationController::class, 'store'])->name('reservations.store');
//     Route::get('/reservations/{reservation}', [ReservationController::class, 'show'])->name('reservations.show');
//     Route::get('/reservations/{reservation}/edit', [ReservationController::class, 'edit'])->name('reservations.edit');
//     Route::put('/reservations/{reservation}', [ReservationController::class, 'update'])->name('reservations.update');
//     Route::delete('/reservations/{reservation}', [ReservationController::class, 'destroy'])->name('reservations.destroy');
// });

  

Route::get('/', function () {
    return view('welcome');
});

Route::get('/', function () {
    return inertia('Home');
});


Route::post('/register', [AuthController::class, 'register'])->name('register');
