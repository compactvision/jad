<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SettingsController extends Controller
{
    public function index()
    {
        return \Inertia\Inertia::render('dashboard/settings/Settings', [
             // Pass separate "preferences" prop if needed, or included in user shared prop
             // But we might want to ensure it's up to date.
        ]);
    }

    public function updateNotifications(Request $request)
    {
        $request->validate([
            'preferences' => 'required|array',
        ]);

        $user = $request->user();
        $user->forceFill([
            'notification_preferences' => $request->preferences,
        ])->save();

        return back()->with('success', 'Préférences de notification mises à jour.');
    }

    public function destroy(Request $request)
    {
        $request->validate([
            'password' => 'required|current_password',
        ]);

        $user = $request->user();

        // Logout
        auth()->guard('web')->logout();

        if ($user->delete()) {
             $request->session()->invalidate();
             $request->session()->regenerateToken();
             
             return redirect('/');
        }
        
        return back()->with('error', 'Impossible de supprimer le compte.');
    }
}
