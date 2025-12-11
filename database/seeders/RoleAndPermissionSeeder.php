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
        Permission::create(['name' => 'manage users']);
        Permission::create(['name' => 'edit articles']);
        Permission::create(['name' => 'delete articles']);
        Permission::create(['name' => 'publish articles']);

        // Création des rôles et assignation des permissions
        $roleAdmin = Role::create(['name' => 'admin']);
        $roleAdmin->givePermissionTo(Permission::all()); // L'admin a toutes les permissions

        $roleEditor = Role::create(['name' => 'editor']);
        $roleEditor->givePermissionTo(['edit articles', 'publish articles']);

        $roleUser = Role::create(['name' => 'user']);
        // Le rôle de base n'a peut-être aucune permission spécifique

        // Création d'un utilisateur admin pour tester
        $user = User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
        ]);
        $user->assignRole($roleAdmin);
    }
}