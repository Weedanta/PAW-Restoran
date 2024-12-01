<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReservationsTable extends Migration
{
    public function up()
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('name', 100);
            $table->string('email', 100);
            $table->string('phone', 15);
            $table->dateTime('reservation_datetime');
            $table->integer('people');
            $table->enum('room_type', ['Indoor', 'Outdoor', 'VIP']);
            $table->enum('payment_method', ['BRI', 'BNI', 'Mandiri', 'BCA', 'OVO/Gopay/ShopeePay']);
            $table->text('additional_request')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('reservations');
    }
}
