<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Modules\Member\Infrastructure\Http\Controllers\MemberController;
use App\Modules\Member\Infrastructure\Http\Controllers\ProfileController;

Route::get('/', function () { return Inertia::render('welcome'); })->name('home');
Route::get('/become-member', function () { return Inertia::render('become-member');})->name('become');
Route::post('/become-member', [MemberController::class, 'store'])->name('become.store');
Route::get('/jad-fibonacci', function () { return Inertia::render('fibonacci');})->name('fibonacci');
Route::get('/legal-notice', function () { return Inertia::render('legal');})->name('legal-notice');
Route::get('/members', [MemberController::class, 'publicIndex'])->name('members.public');
Route::get('/maintenance', function () { return Inertia::render('Maintenance'); })->name('maintenance');
Route::get('/politique-de-confidentialite', function () { return Inertia::render('politique'); })->name('privacy-policy');

Route::middleware(['auth', 'verified'])
    ->prefix('/dashboard')
    ->group(function () {
        
        // Routes accessibles à tous les membres connectés
        Route::prefix('profile')->group(function () {
             Route::get('/', [ProfileController::class, 'edit'])->name('profile.edit');
             Route::patch('/', [ProfileController::class, 'update'])->name('profile.update');
        });

        // Routes réservées à l'administrateur
        Route::middleware([\App\Http\Middleware\CheckRole::class.':administrateur_jad'])->group(function () {
            Route::get('/', function () { return Inertia::render('dashboard/dashboard');})->name('dashboard');

            Route::prefix('members')->group(function () {
                Route::get('/', [MemberController::class, 'index'])->name('members');
                Route::post('/store', [MemberController::class, 'store'])->name('members.store');
                Route::get('/{id}', [MemberController::class, 'show'])->name('members.show');
                Route::patch('/{id}/approve', [MemberController::class, 'approve'])->name('members.approve');
                Route::patch('/{id}/visibility', [MemberController::class, 'toggleVisibility'])->name('members.visibility');
            });
        });

        // Settings Routes (Accessible to all)
        Route::prefix('settings')->group(function () {
            Route::get('/', [\App\Http\Controllers\SettingsController::class, 'index'])->name('settings.index');
            Route::patch('/notifications', [\App\Http\Controllers\SettingsController::class, 'updateNotifications'])->name('settings.notifications');
            Route::delete('/account', [\App\Http\Controllers\SettingsController::class, 'destroy'])->name('settings.destroy');
        });

        // Super Admin Routes
        Route::middleware([\App\Http\Middleware\CheckRole::class . ':super_admin'])->group(function () {
             Route::resource('roles', \App\Http\Controllers\RoleController::class)->names([
                 'index' => 'roles.index',
                 'store' => 'roles.store',
                 'update' => 'roles.update',
                 'destroy' => 'roles.destroy',
             ])->except(['create', 'edit', 'show']); // Using modals

             Route::resource('users', \App\Http\Controllers\UserController::class)->names([
                 'index' => 'users.index',
                 'update' => 'users.update',
             ])->only(['index', 'update']);

             // Site Settings
             Route::get('/site-settings', [\App\Http\Controllers\SiteSettingsController::class, 'index'])->name('site-settings.index');
             Route::post('/site-settings', [\App\Http\Controllers\SiteSettingsController::class, 'update'])->name('site-settings.update');
        });
});







// Route::middleware(['auth:sanctum', 'verified'])->group(function () {
//     Route::get('/dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

// require __DIR__.'/settings.php';
