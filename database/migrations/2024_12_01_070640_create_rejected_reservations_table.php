<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRejectedReservationsTable extends Migration
{
    public function up()
    {
        Schema::create('rejected_reservations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('phone', 15)->nullable();
            $table->dateTime('reservation_datetime');
            $table->integer('people');
            $table->string('room_type', 50)->nullable();
            $table->string('payment_method', 50)->nullable();
            $table->string('payment_proof')->nullable();
            $table->text('additional_request')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('rejected_reservations');
    }
}
