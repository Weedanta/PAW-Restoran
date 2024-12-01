<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\Admin\MenuController as AdminMenuController;
use App\Http\Controllers\Admin\ReservationController as AdminReservationController;
use App\Models\Menu;

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


Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // User routes
    Route::resource('reservations', ReservationController::class);
    Route::get('/menu', [MenuController::class, 'index'])->name('menu.index');
    
    // Admin routes
    Route::middleware(['admin'])->prefix(prefix: 'admin')->name('admin.')->group(function () {
        Route::resource("Menu", AdminMenuController::class);
        Route::resource('reservations', AdminReservationController::class);
        Route::post('reservations/{reservation}/approve', [AdminReservationController::class, 'approve'])
            ->name('reservations.approve');
        Route::post('reservations/{reservation}/reject', [AdminReservationController::class, 'reject'])
            ->name('reservations.reject');
    });
});
  

Route::get('/', function () {
    return view('welcome');
});

Route::get('/', function () {
    return inertia('Home');
});


Route::post('/register', [AuthController::class, 'register'])->name('register');
