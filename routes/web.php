<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PhotosController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\formController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\SliderWebController;
use App\Http\Controllers\GaleriaController;
use App\Http\Controllers\GaleriaWebController;
use App\Http\Controllers\ActividadController;
use App\Http\Controllers\ActividadWebController;
use App\Http\Controllers\EmpresaController;
use App\Http\Controllers\NosotrosWebController;
use App\Http\Controllers\AliadosController;
use App\Http\Controllers\AliadoWebController;




/*
Route::get('/', function () {
    return view('index');
});
*/






//Route::get('/prueba', 'HomeController@prueba');


// user information
Route::get('page/user/profile', [App\Http\Controllers\HomeController::class, 'userProfile'])->name('page/user/profile');


// -----------------------------login-----------------------------------------
Route::get('/login', [App\Http\Controllers\Auth\LoginController::class, 'login'])->name('login');
Route::post('/login', [App\Http\Controllers\Auth\LoginController::class, 'authenticate']);
Route::get('/logout', [App\Http\Controllers\Auth\LoginController::class, 'logout'])->name('logout');

// ------------------------------register---------------------------------------


// -----------------------------forget password ------------------------------
Route::get('forget-password', [App\Http\Controllers\Auth\ForgotPasswordController::class, 'getEmail'])->name('forget-password');
Route::post('forget-password', [App\Http\Controllers\Auth\ForgotPasswordController::class, 'postEmail'])->name('forget-password');

// -----------------------------reset password ------------------------------
Route::get('reset-password/{token}', [App\Http\Controllers\Auth\ResetPasswordController::class, 'getPassword']);
Route::post('reset-password', [App\Http\Controllers\Auth\ResetPasswordController::class, 'updatePassword']);


// -----------------------------API-----------------------------------------





// -----------------------------VISTAS ADMIN-----------------------------------------

Route::group(['middleware' => 'auth'], function () {
Route::resource('/slider', SliderController::class);
Route::get('/usuario', [App\Http\Controllers\Auth\RegisterController::class, 'index']);
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::resource('/galeria', GaleriaController::class);
Route::get('/actividadAdmin',[ActividadController::class,'index']);
Route::get('/empresa',[EmpresaController::class,'index']);
Route::get('/aliadoAdmin',[AliadosController::class,'index']);


});
// -----------------------------API ADMIN-----------------------------------------
Route::group(['prefix' => 'api', 'middleware' => ['auth']], function(){

	Route::get('/slider', [SliderController::class, 'listado']);
	Route::get('/usuarioListado', [App\Http\Controllers\Auth\RegisterController::class, 'listado']);
	Route::post('/usuario', [App\Http\Controllers\Auth\RegisterController::class, 'store']);
	Route::put('/usuario/{id}', [App\Http\Controllers\Auth\RegisterController::class, 'update']);
	Route::delete('/usuarioEliminar/{id}', [App\Http\Controllers\Auth\RegisterController::class, 'destroy']);

	Route::get('/galeriaListado', [GaleriaController::class, 'listado']);

	Route::post('/actividad', [ActividadController::class, 'store']);
	Route::get('/listadoActividad', [ActividadController::class, 'listadoActividad']);
	Route::put('/actividad/{id}', [ActividadController::class, 'update']);
	Route::delete('/eliminarImagenActividad/{id}', [ActividadController::class, 'eliminarImagenActividad']);

	Route::delete('/eliminarActividad/{id}', [ActividadController::class, 'destroy']);
	Route::get('/empresa', [EmpresaController::class, 'empresa']);
	Route::post('/empresaActualizar', [EmpresaController::class, 'update']);
	Route::get('/aliados',[AliadosController::class,'listadoAliados']);
	Route::post('/aliado',[AliadosController::class,'store']);
	Route::put('/aliado/{id}',[AliadosController::class,'update']);
	Route::delete('/eliminarAliado/{id}',[AliadosController::class,'destroy']);

});





//Web
Route::group(['prefix' => 'api/web'], function(){

	Route::get('/slider', [SliderWebController::class, 'index']);
	Route::get('/galeria', [GaleriaWebController::class, 'index']);
	Route::get('/actividades', [ActividadWebController::class, 'index']);
	Route::get('/actividad/{slug}', [ActividadWebController::class, 'slug']);
	Route::get('/nosotros', [NosotrosWebController::class, 'index']);
	Route::post('/contactenos', [NosotrosWebController::class, 'contactenos']);
	Route::get('/aliados', [AliadoWebController::class, 'index']);
});





//
Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');