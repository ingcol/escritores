<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
class GaleriaWebController extends Controller
{
 public function index(){
 	return DB::table('galerias')->orderBy('id','Desc')->select('file_url')->get();
 }   
}
