<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

 
class NavigationController extends Controller
{
    public function index(Request $request) 
    {
        Inertia::render("/MainWelcomePage", [
            
        ]);
    }
}