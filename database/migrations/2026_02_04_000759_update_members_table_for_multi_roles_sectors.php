<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // SQLite doesn't support modifying columns easily
        // We need to recreate the table
        
        // 1. Create new columns
        Schema::table('members', function (Blueprint $table) {
            $table->json('roles_temp')->nullable();
            $table->json('sectors_temp')->nullable();
        });
        
        // 2. Copy and convert data
        $members = DB::table('members')->get();
        foreach ($members as $member) {
            DB::table('members')
                ->where('id', $member->id)
                ->update([
                    'roles_temp' => json_encode([$member->role]),
                    'sectors_temp' => json_encode([$member->sector]),
                ]);
        }
        
        // 3. Drop old columns (this might fail on SQLite with CHECK constraints)
        // We'll use a try-catch to handle this gracefully
        try {
            Schema::table('members', function (Blueprint $table) {
                $table->dropColumn(['role', 'sector']);
            });
        } catch (\Exception $e) {
            // If dropping fails, we'll rename instead
            DB::statement('ALTER TABLE members RENAME COLUMN role TO role_old');
            DB::statement('ALTER TABLE members RENAME COLUMN sector TO sector_old');
        }
        
        // 4. Rename temp columns to final names
        DB::statement('ALTER TABLE members RENAME COLUMN roles_temp TO roles');
        DB::statement('ALTER TABLE members RENAME COLUMN sectors_temp TO sectors');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // 1. Create old columns
        Schema::table('members', function (Blueprint $table) {
            $table->string('role_temp')->nullable();
            $table->string('sector_temp')->nullable();
        });
        
        // 2. Convert JSON back to single values
        $members = DB::table('members')->get();
        foreach ($members as $member) {
            $roles = json_decode($member->roles, true);
            $sectors = json_decode($member->sectors, true);
            
            DB::table('members')
                ->where('id', $member->id)
                ->update([
                    'role_temp' => $roles[0] ?? null,
                    'sector_temp' => $sectors[0] ?? null,
                ]);
        }
        
        // 3. Drop new columns
        DB::statement('ALTER TABLE members RENAME COLUMN roles TO roles_old');
        DB::statement('ALTER TABLE members RENAME COLUMN sectors TO sectors_old');
        
        // 4. Rename temp to final
        DB::statement('ALTER TABLE members RENAME COLUMN role_temp TO role');
        DB::statement('ALTER TABLE members RENAME COLUMN sector_temp TO sector');
        
        // 5. Clean up
        Schema::table('members', function (Blueprint $table) {
            $table->dropColumn(['roles_old', 'sectors_old']);
        });
    }
};
