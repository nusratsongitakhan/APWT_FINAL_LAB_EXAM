<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeerController;
use App\Http\Controllers\JobController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/products', 'ProductController@index')->name('products.all');
Route::post('/products', 'ProductController@store')->name('products.store');
Route::get('/products/{product}', 'ProductController@show')->name('products.show');
Route::put('/products/{product}', 'ProductController@update')->name('products.update');
Route::delete('/products/{product}', 'ProductController@destroy')->name('products.destroy');


//////////
Route::get('/admin/employeersInformation', 'EmployeerController@employeersInformation');
Route::post('/admin/registerEmployee', 'EmployeerController@registration');
Route::delete('/admin/DeleteEmployeer/{id}', 'EmployeerController@delete');
Route::put('/admin/EditEmployeer/{id}', 'EmployeerController@edit');
Route::get('/admin/GetEmployeer/{id}', 'EmployeerController@getEmployeer');
Route::post('/admin/EmployeerInfoSearch','EmployeerController@search'); 


Route::get('/employeer/jobsInformation', 'JobController@jobsInformation');
Route::post('/employeer/addJobs', 'JobController@add');
Route::delete('/employeer/DeleteJobs/{id}', 'JobController@delete');
Route::put('/employeer/EditJob/{id}', 'JobController@edit');
Route::get('/employeer/GetJob/{id}', 'JobController@getJob');
