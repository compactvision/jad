<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Inertia\Inertia;

class CheckMaintenanceMode
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Bypass for login, logout, and maintenance page itself to avoid loops
        if ($request->is('login') || $request->is('logout') || $request->is('maintenance')) {
            return $next($request);
        }

        // Check if maintenance mode is enabled
        $maintenanceMode = \App\Models\SiteSetting::where('key', 'maintenance_mode')->value('value');

        if ($maintenanceMode === 'true') {
            // Allow Super Admin and Admins to bypass
            $user = $request->user();
            if ($user && ($user->hasRole('super_admin') || $user->hasRole('administrateur_jad'))) {
                return $next($request);
            }

            // Redirect others to maintenance page
            return Inertia::render('Maintenance')->toResponse($request); // We need to create this page or return 503
            // For now, let's just abort 503 or redirect
            // abort(503, 'Site en maintenance');
        }

        return $next($request);
    }
}
