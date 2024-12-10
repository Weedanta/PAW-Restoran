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
        Schema::create('users', function (Blueprint $table) {
            $table->id();  // Auto increment id
            $table->string('nama', 100);  // Kolom untuk nama pengguna
            $table->enum('jenis_kelamin', ['Laki-laki', 'Perempuan']);  // Kolom jenis kelamin
            $table->text('alamat');  // Kolom alamat
            $table->text('deskripsi')->nullable();  // Kolom deskripsi (opsional)
            $table->string('email', 100)->unique();  // Kolom email dengan constraint UNIQUE
            $table->string('nomor_telepon', 20)->nullable();  // Kolom nomor telepon (opsional)
            $table->string('password');  // Kolom password
            $table->timestamps();  // Kolom created_at dan updated_at (secara otomatis mencatat waktu pembuatan dan perubahan)
       });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
