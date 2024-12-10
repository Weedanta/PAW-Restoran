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
        Schema::create('menus', function (Blueprint $table) {
            $table->id();  // Kolom id sebagai primary key dan auto increment
            $table->foreignId('admin_id')->constrained('admins')->onDelete('cascade');  // Kolom admin_id yang menjadi foreign key ke tabel admins
            $table->string('kategori', 20)->nullable();  // Kolom kategori, panjang maksimal 20 karakter
            $table->string('nama_menu', 50);  // Kolom nama_menu, panjang maksimal 50 karakter
            $table->integer('harga');  // Kolom harga (integer)
            $table->text('deskripsi')->nullable();  // Kolom deskripsi (nullable karena tidak semua menu membutuhkan deskripsi)
            $table->timestamps();  // Kolom created_at dan updated_at
       });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menus');
    }
};
