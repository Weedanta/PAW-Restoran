<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Menu', [
            'menus' => Menu::get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validated = request()->validate([
            'kategori' => ['nullable', 'string', 'max:20'],  // Kategori bersifat opsional, maksimal 20 karakter
            'nama_menu' => ['required', 'string', 'max:50'],  // Nama menu wajib diisi dan maksimal 50 karakter
            'harga' => ['required', 'integer', 'min:0'],  // Harga wajib diisi dan harus angka positif
            'deskripsi' => ['nullable', 'string'],  // Deskripsi opsional, dan harus berupa string jika ada
        ]);

        $admin_id = session('admin_id');

        // Menyimpan ke database
        $menu = Menu::create([
            'kategori' => $validated['kategori'],
            'nama_menu' => $validated['nama_menu'],
            'harga' => $validated['harga'],
            'deskripsi' => $validated['deskripsi'],         
            'admin_id' => $admin_id
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Menu $menu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Menu $menu)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Menu $menu)
    {
        $validated = request()->validate([
            'id' => ['int'],
            'kategori' => ['nullable', 'string', 'max:20'],  // Kategori bersifat opsional, maksimal 20 karakter
            'nama_menu' => [ 'string', 'max:50'],  // Nama menu wajib diisi dan maksimal 50 karakter
            'harga' => [ 'integer', 'min:0'],  // Harga wajib diisi dan harus angka positif
            'deskripsi' => ['nullable', 'string'],  // Deskripsi opsional, dan harus berupa string jika ada
        ]);

        $admin_id = session('admin_id');

        $new_menu = [
            // 'id' => $validated['id'],
            'kategori' => $validated['kategori'],
            'nama_menu' => $validated['nama_menu'],
            'harga' => $validated['harga'],
            'deskripsi' => $validated['deskripsi'],
            'admin_id' => $admin_id
        ];

        Menu::where('id', $validated['id'])->update($new_menu);
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Menu $menu, string $id)
    {
        Menu::where('id', $id)->delete();
    }
}
