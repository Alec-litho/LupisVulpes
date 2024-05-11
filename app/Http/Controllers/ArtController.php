<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Art;

class ArtController extends Controller
{
    public function index()
    {
        $arts = Art::all();
        return $arts;
    }

    public function show(string $id)
    {
        
    }

}
