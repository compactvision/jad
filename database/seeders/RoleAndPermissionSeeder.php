<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use App\Models\User; // Importez votre modèle User

class RoleAndPermissionSeeder extends Seeder
{
    public function run(): void
    {
        // Réinitialise les caches pour éviter les erreurs
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Création des permissions
        $permissions = [
            'manage users',
            'edit articles',
            'delete articles',
            'publish articles',
            'view_audit',
            'manage_settings',
            'manage_roles',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission]);
        }

        // Création des rôles et assignation des permissions
        $roleSuperAdmin = Role::firstOrCreate(['name' => 'super_admin']);
        $roleSuperAdmin->givePermissionTo(Permission::all());

        $roleAdmin = Role::firstOrCreate(['name' => 'admin']);
        $roleAdmin->givePermissionTo(['manage users', 'edit articles', 'publish articles']);

        $roleEditor = Role::firstOrCreate(['name' => 'editor']);
        $roleEditor->givePermissionTo(['edit articles', 'publish articles']);

        $roleUser = Role::firstOrCreate(['name' => 'user']);
        
        $roleJadAdmin = Role::firstOrCreate(['name' => 'administrateur_jad']);
        // $roleJadAdmin->givePermissionTo([...]); // Add specific permissions if needed

        // Création d'un utilisateur Super Admin pour tester (dans la table members car c'est le provider d'auth)
        $superAdminEmail = 'superadmin@example.com';
        if (!\App\Modules\Member\Infrastructure\Eloquent\EloquentMember::where('email', $superAdminEmail)->exists()) {
            $member = \App\Modules\Member\Infrastructure\Eloquent\EloquentMember::create([
                'name' => 'Super Admin',
                'email' => $superAdminEmail,
                'phone' => '0000000000', // Dummy phone
                'password' => bcrypt('password'),
                'member_roles' => ['super_admin'],
                'province' => 'AdminProv',
                'city' => 'AdminCity',
                'member_sectors' => ['autre'],
                'status' => 'active',
                'is_visible' => false,
            ]);
            $member->assignRole($roleSuperAdmin);
        }
        
        // Disable User seeder logic for now as auth uses members table
        /*
        if (!User::where('email', $superAdminEmail)->exists()) {
             // ...
        }
        */
    }
}