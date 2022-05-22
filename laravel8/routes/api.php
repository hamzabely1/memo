<?php

use App\Http\Controllers\budget;
use App\Http\Controllers\Usercontro;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/register',[Usercontro::class,'index']);

Route::post('/login',[Usercontro::class,'login']);
Route::post('/add',[budgetcontro::class,'index']);
