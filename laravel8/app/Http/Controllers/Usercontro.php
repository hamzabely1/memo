<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\Console\Input\Input;


class Usercontro extends Controller
{

public function index(Request $request){
$user = new User;
$user->name = $request->input('name');
$user->email = $request->input('email');
$user->password = Hash::make($request->input('password'));

$user->save();


return $user;



}


public function addbudget(Request $request){

    $model = User::find(1);
    $model->update(['budget', $request->input('budget')]);
    $model->save();

return $model;


}


public function login(Request $req){
    $email =  $req->input('email');
    $password = $req->input('password');


    $user = User::where('email',$email)->first();
       echo $user->email;

       echo $password;

}
public function budget(){




}



}
