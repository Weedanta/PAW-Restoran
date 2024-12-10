<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();  // Kolom id sebagai primary key
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');  // Kolom user_id yang menjadi foreign key ke tabel users
            $table->string('name', 100);  // Kolom nama reservasi
            $table->enum('status', ['Pending', 'Rejected', 'Approved']);  // Kolom status
            $table->dateTime('reservation_datetime');  // Kolom waktu reservasi
            $table->integer('people');  // Kolom jumlah orang
            $table->enum('room_type', ['Indoor', 'Outdoor', 'VIP']);  // Kolom tipe ruangan
            $table->enum('payment_method', ['BRI', 'BNI', 'Mandiri', 'BCA', 'OVO/Gopay/ShopeePay']);  // Kolom metode pembayaran
            $table->text('additional_request')->nullable();  // Kolom permintaan tambahan (nullable)
            $table->timestamp('created_at')->useCurrent();  // Kolom created_at dengan default timestamp CURRENT_TIMESTAMP
            $table->timestamp('updated_at')->nullable();  // Kolom updated_at (nullable)
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
