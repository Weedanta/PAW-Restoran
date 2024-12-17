<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ReservationController;
use App\Models\Menu;
use App\Models\Reservation;

// Route untuk halaman utama (Home)
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/reservation', function () {
    return Inertia('Reservation');
});

Route::get('/menu', [MenuController::class, 'index']);

Route::get('/aboutUs', function () {
    return Inertia('AboutUs');
})->name('aboutUs');

Route::get('/contactus', function () {
    return Inertia('ContactUs');
})->name('contactUs');

Route::get('/admin', function () {
    return Inertia::render('Admin/DashboardAdmin');
})->name('admin');

// Menu
Route::get('/editmenu', function () {
    return Inertia::render('Admin/EditMenu', [
        'menus' => Menu::get()
    ]);
})->name('editMenu');

// Reserrvation 
Route::get('/editreservation', function () {
    return Inertia::render('ReservationUser', [
        'reservations' => Reservation::get()
    ]);
})->name('reservationUser');

Route::post('/add-reservation', [ReservationController::class, 'store'])->name('add.reservation');
Route::post('/update-reservation', [ReservationController::class, 'update'])->name('update.reservation');
Route::delete('/delete-reservation/{id}', [ReservationController::class, 'destroy'])->name('delete.reservation');

Route::get('/reservationvalidate', function () {
    return Inertia::render('ReservationValidate', [
        'reservations' => Reservation::get()
    ]);
})->name('reservationValidate');

Route::post('/validate-reservation', [ReservationController::class, 'validate'])->name('validate.reservation');


Route::post('/add-menu', [MenuController::class, 'store'])->name('add.menu');
Route::post('/update-menu', [MenuController::class, 'update'])->name('update.menu');
Route::delete('/delete-menu/{id}', [MenuController::class, 'destroy'])->name('delete.menu');

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

