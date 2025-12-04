<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () { return Inertia::render('welcome'); })->name('home');
Route::get('/become-member', function () { return Inertia::render('member');})->name('become');
Route::get('/jad-fibonacci', function () { return Inertia::render('fibonacci');})->name('fibonacci');










// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

// require __DIR__.'/settings.php';
