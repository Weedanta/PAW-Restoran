<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $fillable = [
        'user_id',
        'name',
        'status',
        'reservation_datetime',
        'people',
        'room_type',
        'payment_method',
        'additional_request',
        'created_at',
        'updated_at'
    ]; 
}
