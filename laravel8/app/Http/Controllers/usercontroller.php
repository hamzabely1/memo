<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class usercontroller extends Controller
{
    public function index(request $request){
$user = new User;
$user ->name = $request->prix;
$user ->email = $request->prix;
$user ->password = $request->prix;
$user ->save();

return response()->json($user);




    }
}
