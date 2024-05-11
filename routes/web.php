<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('WelcomePage', [

    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
});

