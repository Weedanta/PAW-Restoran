<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AuthController
{
    public function loginAdmin(Request $request)
    {
        $validated = request()->validate(
            [
                'email' => ['required', 'email', 'max:255'],
                'password' => ['required', 'string', 'max:255'],
            ]
        );

        $admin = DB::table('admins')->where('admin_email', $validated['email'])->first();

        if (!isset($admin)) {
            return Inertia('Login/Login', [
                'message' => 'email and password not found'
            ]);
        }

        if ($admin->admin_password != $validated['password']) {
            return Inertia('Login/Login', [
                'message' => 'email and password not found'
            ]);
        }

        session(['admin_id' => $admin->id]);

        return to_route('contactUs');
    }


    public function loginUser(Request $request)
    {
        $validated = request()->validate(
            [
                'email' => ['required', 'email', 'max:255'],
                'password' => ['required', 'string', 'max:255'],
            ]
        );

        $user = DB::table('users')->where('email', $validated['email'])->first();

        if (!isset($user)) {
            return Inertia('Login/Login', [
                'message' => 'email and password not found'
            ]);
        }

        if ($user->password != $validated['password']) {
            return Inertia('Login/Login', [
                'message' => 'email and password not found'
            ]);
        }

        session(['user_email' => $user->email]);

        return to_route('contactUs');
    }

    public function registerUser(Request $request)
    {
        $validated = request()->validate(
            [
                'nama' => ['required', 'string', 'max:100'],
                'jenis_kelamin' => ['required', 'in:Laki-Laki,Perempuan'],
                'alamat' => ['required', 'string'],
                'deskripsi' => ['required', 'string'],
                'email' => ['required', 'email', 'max:255', 'unique:users,email'],
                'nomor_telepon' => ['nullable', 'string', 'max:20'],
                'password' => ['required', 'string'], 
            ]
        );

        // Buat pengguna baru dan simpan ke database
        $user = User::create([
            'nama' => $validated['nama'],
            'jenis_kelamin' => $validated['jenis_kelamin'],
            'alamat' => $validated['alamat'],
            'deskripsi' => $validated['deskripsi'],
            'email' => $validated['email'],
            'nomor_telepon' => $validated['nomor_telepon'] ?? null,
            'password' => $validated['password'],
        ]);

        return to_route('contactUs');
    }
}
