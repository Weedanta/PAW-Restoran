<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory; // Import untuk HasFactory

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'name', 'email', 'phone', 
        'reservation_datetime', 'people', 'room_type',
        'payment_method', 'payment_proof', 'additional_request'
    ];

    protected $casts = [
        'reservation_datetime' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

