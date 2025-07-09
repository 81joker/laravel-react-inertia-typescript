<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FeatureController;
use App\Http\Controllers\ProfileController;

Route::redirect('/', '/dashboard');
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::resource('feature', FeatureController::class)->except(['index', 'show']);
    Route::get('/feature', [FeatureController::class, 'index'])->name('feature.index');
    Route::get('/feature/{feature}', [FeatureController::class, 'show'])->name('feature.show');
    Route::post('feature/{feature}/upvote', [\App\Http\Controllers\UpvoteController::class, 'store'])->name('upvote.store');
    Route::delete('upvote/{upvote}/upvote', [\App\Http\Controllers\UpvoteController::class, 'destroy'])->name('upvote.destroy');


    Route::post('/feature/{feature}/comments', [CommentController::class, 'store'])
        ->name('comment.store')
        ->middleware('can:' . PermissionsEnum::ManageComments->value);
    Route::delete('/comment/{comment}', [CommentController::class, 'destroy'])
        ->name('comment.destroy')
     ->middleware('can:' . PermissionsEnum::ManageComments->value);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
