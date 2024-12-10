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
        Schema::create('admins', function (Blueprint $table) {
            $table->id();  // Kolom admin_id sebagai primary key
            $table->string('admin_email', 255)->unique();  // Kolom email dengan constraint UNIQUE
            $table->string('admin_password');  // Kolom password
            $table->timestamps();  // Kolom created_at dan updated_at
         });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admins');
    }
};
