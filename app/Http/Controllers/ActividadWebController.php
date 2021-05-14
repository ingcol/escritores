<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Models\Actividad;
class ActividadWebController extends Controller
{
	public function index(){
       return DB::table('actividades')->orderBy('id','desc')->where('EstadoActividad','Activo')->get();
	}

	public function slug($slug){

		 $actividad=Actividad::where('slug',$slug)->first();
		 if ($actividad) {
		 
		 $imagenes= $actividad->imagenes;
		 return response()->json(['actividad'=>$actividad,
		 	'imagenes'=>$imagenes]);
		 	# code...
		 }else{
		 	return response()->json('errors', 422);
		 }


	}
    
}
