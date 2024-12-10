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
})->name('aboutUs');

Route::get('/contactus', function () {
    return Inertia('ContactUs');
})->name('contactUs');;



// Routes untuk Autentikasi
Route::get('/login', function () {
    return inertia('Login/Login');
})->name('login');
Route::post('/loginAdmin', [AuthController::class, 'loginAdmin'])->name('login.post');
Route::post('/login', [AuthController::class, 'loginUser'])->name('login.post2');

Route::get('/register', function () {
    return Inertia::render('Login/Register');
})->name('register');
Route::post('/register', [AuthController::class, 'registerUser'])->name('register.post');

Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
