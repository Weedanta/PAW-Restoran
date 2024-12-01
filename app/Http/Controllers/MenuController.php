<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController extends Controller
{
    public function index()
    {
        $menu = Menu::orderBy('kategori')
            ->orderBy('nama_menu')
            ->get()
            ->groupBy('kategori');

        return Inertia::render('Menu/Index', [
            'menu' => $menu
        ]);
    }
}