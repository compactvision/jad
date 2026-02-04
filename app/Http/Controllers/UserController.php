<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Modules\Member\Infrastructure\Eloquent\EloquentMember;
use Spatie\Permission\Models\Role;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $query = EloquentMember::query()->with('roles');

        if ($search = $request->input('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%");
            });
        }

        $users = $query->paginate(10)->through(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->roles->pluck('name')->first() ?? ($user->member_roles[0] ?? null), // Spatie role or first native role
                'created_at' => $user->created_at->format('d/m/Y'),
            ];
        });

        return Inertia::render('dashboard/users/index', [
            'users' => $users,
            'roles' => Role::all(),
            'filters' => $request->only(['search']),
        ]);
    }

    public function update(Request $request, $id)
    {
        $user = EloquentMember::findOrFail($id);
        
        $validated = $request->validate([
            'role' => 'required|exists:roles,name',
        ]);

        // Sync Spatie role
        $user->syncRoles([$validated['role']]);
        
        // Also update native role column for consistency if needed, or rely on Spatie
        // Ideally we migrate away from 'role' column to just Spatie, but for now we keep both synced if possible
        // But Role Enum might not match Spatie role names exactly if we add custom roles.
        // Let's assume we just use Spatie roles for access control now.
        
        return redirect()->back()->with('success', 'Rôle utilisateur mis à jour avec succès.');
    }
}
