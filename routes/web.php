<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ReservationController;
use App\Models\Menu;

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
})->name('contactUs');;

Route::get('/editmenu', function () {
    return Inertia::render('Admin/EditMenu', [
        'menus' => Menu::get()
    ]);
})->name('editMenu');

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
