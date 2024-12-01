<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory; // Import untuk HasFactory


class Menu extends Model
{
    use HasFactory;

    protected $fillable = [
        'kategori', 'nama_menu', 'harga', 'deskripsi'
    ];
}
