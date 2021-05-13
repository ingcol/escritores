<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Models\Aliado;
use Illuminate\Support\Facades\Storage;
class AliadosController extends Controller
{
	public function index(){
		return view('aliado.index');
	}
	public function listadoAliados(){
		return DB::table('aliados')->orderBy('id', 'desc')->get();
	}

	public function store(Request $request){


		$rules = [
			'NombreAliado' => 'required|min:3',

		];
		$messages = [
			'NombreAliado.min' => 'El campo para  el nombre de aliado es requerido',
			'NombreAliado.required' => 'El campo para  el nombre de aliado es requerido ',


		];
		$this->validate($request, $rules, $messages);

		$aliado=new Aliado;

		$aliado->NombreAliado= $request->NombreAliado;
		$aliado->EstadoAliado= "Activo";

		if ($request->file('file')) {
			
		$nameFile = $request->file('file');

		$newName = time().rand().'.'.$nameFile->getClientOriginalExtension();
       #Amazon

		$path = $nameFile->storeAs('aliados', $newName,'s3');
		Storage::disk('s3')->setVisibility($path, 'public');

		$aliado->file_url=Storage::disk('s3')->url($path);
		$aliado->file=$nameFile->getClientOriginalName();
		$aliado->file_name=$newName;
		$aliado->file_type=$nameFile->getClientOriginalExtension();

		}
		$aliado->save();
		return $aliado;



		

	}

	public function update(Request $request, $id){

		$rules = [
			'NombreAliado' => 'required|min:3',

		];
		$messages = [
			'NombreAliado.min' => 'El campo para  el nombre de aliado es requerido',
			'NombreAliado.required' => 'El campo para  el nombre de aliado es requerido ',


		];
		$this->validate($request, $rules, $messages);

		$aliado=Aliado::find($id);

		$aliado->NombreAliado= $request->NombreAliado;
		$aliado->EstadoAliado= $request->EstadoAliado;

		if ($request->file('file')) {

		if($aliado->file_url){

			Storage::disk('s3')->delete('aliados/'.$aliado->file_name);

		}
			
		$nameFile = $request->file('file');

		$newName = time().rand().'.'.$nameFile->getClientOriginalExtension();
       #Amazon

		$path = $nameFile->storeAs('aliados', $newName,'s3');
		Storage::disk('s3')->setVisibility($path, 'public');

		$aliado->file_url=Storage::disk('s3')->url($path);
		$aliado->file=$nameFile->getClientOriginalName();
		$aliado->file_name=$newName;
		$aliado->file_type=$nameFile->getClientOriginalExtension();

		}
		$aliado->update();
		return $aliado;

	}

	public function destroy($id){


		$aliado=Aliado::find($id);
		if ($aliado->file_url) {
			Storage::disk('s3')->delete('aliados/'.$aliado->file_name);
		}
        
        $delete=Aliado::where('id',$id)->delete();
        return $delete;

	}
}
