<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $fillable = [
        'user_id',
        'name',
        'email',
        'phone',
        'reservation_datetime',
        'people',
        'room_type',
        'payment_method',
        'additional_request',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

