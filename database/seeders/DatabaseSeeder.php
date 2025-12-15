<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // Create Admin Member
        \App\Modules\Member\Infrastructure\Eloquent\EloquentMember::create([
            'name' => 'Admin JAD',
            'email' => 'admin@jad.com',
            'password' => bcrypt('password'), // 
            'phone' => '+0000000000',
            'role' => \App\Modules\Member\Domain\Enums\Role::ADMINISTRATEUR_JAD->value,
            'province' => 'Kinshasa',
            'city' => 'Kinshasa',
            'sector' => \App\Modules\Member\Domain\Enums\Sector::AUTRE->value,
            'status' => 'approved',
            'is_visible' => false,
        ]);
    }
}
