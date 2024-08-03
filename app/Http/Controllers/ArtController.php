<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Art;

class ArtController extends Controller
{
    public function getAll()
    {
        $arts = Art::all();
        return $arts;
    }

    public function getSpecificAmount($from, $to)
    {   
        $ArtIds = [];
        for($i=$from;$i<=$to;$i++) {array_push($ArtIds,$i);};
        $ArtCollection = Art::whereIn("id", $ArtIds)->get();
        return $ArtCollection;
    }
    

}
