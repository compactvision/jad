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
        Schema::table('members', function (Blueprint $table) {
            $table->string('company_name')->nullable()->after('company_logo');
            $table->text('company_description')->nullable()->after('company_name');
            $table->string('company_website')->nullable()->after('company_description');
            $table->string('company_phone')->nullable()->after('company_website');
            $table->string('company_address')->nullable()->after('company_phone');
            $table->enum('primary_name_display', ['personal', 'company'])->default('personal')->after('primary_image_display');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('members', function (Blueprint $table) {
            $table->dropColumn([
                'company_name',
                'company_description',
                'company_website',
                'company_phone',
                'company_address',
                'primary_name_display'
            ]);
        });
    }
};
