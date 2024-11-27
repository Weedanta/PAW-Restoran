<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->dateTime('reservation_datetime');
            $table->integer('people');
            $table->enum('room_type', ['Indoor', 'Outdoor', 'VIP']);
            $table->enum('payment_method', ['BRI', 'BNI', 'Mandiri', 'BCA', 'OVO/Gopay/ShopeePay']);
            $table->text('additional_request')->nullable();
            $table->timestamps();
        });
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
