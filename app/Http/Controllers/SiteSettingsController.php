<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SiteSetting;
use Inertia\Inertia;

class SiteSettingsController extends Controller
{
    public function index()
    {
        return Inertia::render('dashboard/site-settings/index', [
            'settings' => SiteSetting::all()->pluck('value', 'key'),
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'maintenance_mode' => 'required|boolean',
            // Add other settings here as needed
        ]);

        foreach ($validated as $key => $value) {
            SiteSetting::updateOrCreate(
                ['key' => $key],
                ['value' =>AsString($value)]
            );
        }

        return redirect()->back()->with('success', 'Paramètres du site mis à jour.');
    }
}

function AsString($value) {
    return is_bool($value) ? ($value ? 'true' : 'false') : (string)$value;
}
