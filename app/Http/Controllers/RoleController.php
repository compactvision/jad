<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Inertia\Inertia;

class RoleController extends Controller
{
    public function index()
    {
        return Inertia::render('dashboard/roles/index', [
            'roles' => Role::with('permissions')->get(),
            'permissions' => Permission::all(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:roles,name',
            'permissions' => 'array',
            'permissions.*' => 'exists:permissions,name', // Validate names
        ]);

        $role = Role::create(['name' => $validated['name']]);
        
        if (!empty($validated['permissions'])) {
             $role->syncPermissions($validated['permissions']);
        }

        return redirect()->back()->with('success', 'Rôle créé avec succès.');
    }

    public function update(Request $request, Role $role)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:roles,name,' . $role->id,
            'permissions' => 'array',
            'permissions.*' => 'exists:permissions,name',
        ]);

        $role->update(['name' => $validated['name']]);
        
        if (isset($validated['permissions'])) {
             $role->syncPermissions($validated['permissions']);
        }

        return redirect()->back()->with('success', 'Rôle mis à jour avec succès.');
    }

    public function destroy(Role $role)
    {
        if (in_array($role->name, ['super_admin', 'admin', 'user'])) {
            return redirect()->back()->with('error', 'Ce rôle système ne peut pas être supprimé.');
        }

        $role->delete();
        return redirect()->back()->with('success', 'Rôle supprimé avec succès.');
    }
}
