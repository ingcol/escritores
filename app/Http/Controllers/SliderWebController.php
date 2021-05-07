<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
class SliderWebController extends Controller
{
	public function index(){
    return DB::table('sliders')->orderBy('id','Desc')->where('EstadoSlider','Activo')->get();
}
}
