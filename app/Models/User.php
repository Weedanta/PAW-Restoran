<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    //
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nama',
        'jenis_kelamin',
        'alamat',
        'deskripsi',
        'email',
        'nomor_telepon',
        'password',
    ];  
}
