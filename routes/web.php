<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Modules\Member\Infrastructure\Http\Controllers\MemberController;

Route::get('/', function () { return Inertia::render('welcome'); })->name('home');
Route::get('/become-member', function () { return Inertia::render('member');})->name('become');
Route::get('/jad-fibonacci', function () { return Inertia::render('fibonacci');})->name('fibonacci');
Route::get('/legal-notice', function () { return Inertia::render('legal');})->name('legal-notice');


Route::prefix('/dashboard')->group(function () {
    Route::get('/', function () { return Inertia::render('dashboard/dashboard');})->name('dashboard');

    Route::prefix('members')->group(function () {
        Route::get('/', function () { return Inertia::render('dashboard/members');})->name('members');
        Route::post('/store', [MemberController::class, 'store'])->name('members.store');
    });

    Route::prefix('profile')->group(function () {
        Route::get('/', function () { return Inertia::render('dashboard/profile');})->name('profile');
    });
});







// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

// require __DIR__.'/settings.php';
