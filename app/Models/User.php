<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;  // Import untuk HasApiTokens
use Illuminate\Database\Eloquent\Factories\HasFactory; // Import untuk HasFactory

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable; // Gunakan trait yang benar

    protected $fillable = [
        'nama', 'jenis_kelamin', 'alamat', 'deskripsi',
        'email', 'nomor_telepon', 'password'
    ];

    protected $hidden = [
        'password',
    ];

    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }
}