<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArtController;
use App\Models\Art;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
 
Route::prefix("/arts")->group(function () {
    Route::get("/", [ArtController::class, "getAll"]);

    Route::get("/{artModel}", function(Art $artModel) {
        return $artModel;
    });

    Route::get("/specificAmount/{from}/{to}", function ( $from,  $to) {
        $artController = new ArtController;
        return $artController->getSpecificAmount(intval($from), intval($to));
    });
});




/*
- get art by id
- get all arts
- get specific amount of arts, point out "from" and "to"
- get arts by filters




*/