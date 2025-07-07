<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FeatureController;
Route::redirect('/', '/dashboard' );
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');
    Route::resource('feature', FeatureController::class)->except(['index', 'show']);
    Route::get('/feature' , [FeatureController::class, 'index'])->name('feature.index');
    Route::get('/feature/{feature}' , [FeatureController::class, 'show'])->name('feature.show');
    Route::post('feature/{feature}/upvote', [\App\Http\Controllers\UpvoteController::class, 'store'])->name('upvote.store');
    Route::delete('upvote/{upvote}/upvote', [\App\Http\Controllers\UpvoteController::class, 'destroy'])->name('upvote.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
