<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
class SliderWebController extends Controller
{
	public function index(){
    return DB::table('sliders')->where('EstadoSlider','Activo')->get();
}
}
