<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Menu extends Model
{
    use HasFactory;

    protected $fillable = [
        'kategori', 'nama_menu', 'harga', 'deskripsi'
    ];
}
