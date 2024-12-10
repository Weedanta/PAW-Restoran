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

// Routes untuk Autentikasi
Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');
Route::post('/login', [AuthController::class, 'login'])->name('login.post');

Route::get('/register', function () {
    return Inertia::render('Auth/Register');
})->name('register');
Route::post('/register', [AuthController::class, 'register'])->name('register.post');

Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
