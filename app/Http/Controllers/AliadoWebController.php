<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class AliadoWebController extends Controller
{
    public function index(){

    	return DB::table('aliados')->where('EstadoAliado','Activo')->get();
    }
}
