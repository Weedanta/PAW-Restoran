<?php
// app/Http/Controllers/Admin/MenuController.php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController extends Controller
{
    public function index()
    {
        $menu = Menu::latest()->get();

        return Inertia::render('Admin/Menu/Index', [
            'menu' => $menu
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'kategori' => 'required|string|max:20',
            'nama_menu' => 'required|string|max:50',
            'harga' => 'required|integer|min:0',
            'deskripsi' => 'required|string'
        ]);

        Menu::create($validated);

        return redirect()->back()
            ->with('success', 'Menu item created successfully.');
    }

    public function update(Request $request, Menu $menu)
    {
        $validated = $request->validate([
            'kategori' => 'required|string|max:20',
            'nama_menu' => 'required|string|max:50',
            'harga' => 'required|integer|min:0',
            'deskripsi' => 'required|string'
        ]);

        $menu->update($validated);

        return redirect()->back()
            ->with('success', 'Menu item updated successfully.');
    }

    public function destroy(Menu $menu)
    {
        $menu->delete();

        return redirect()->back()
            ->with('success', 'Menu item deleted successfully.');
    }
}