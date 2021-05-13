<?php

namespace App\Http\Controllers;
use App\Models\Empresa;
use Illuminate\Http\Request;
use App\Http\Requests\EmpresaRequestUpdate;

class EmpresaController extends Controller
{
	public function index(){
		return view('empresa.index');
	}
	public function empresa(){

		$empresa=Empresa::first();

		return $empresa;

	}
	public function update(EmpresaRequestUpdate $request){
		$empresa=Empresa::first();
		if ($empresa) {
			$empresa->NombreEmpresa=$request->NombreEmpresa;
			$empresa->TelefonoEmpresa=$request->TelefonoEmpresa;
			$empresa->NitEmpresa=$request->NitEmpresa;
			$empresa->EsloganEmpresa=$request->EsloganEmpresa;
			$empresa->DireccionEmpresa=$request->DireccionEmpresa;
			$empresa->EmailEmpresa=$request->EmailEmpresa;
			$empresa->NosotrosEmpresa=$request->NosotrosEmpresa;
			$empresa->MisionEmpresa=$request->MisionEmpresa;
			$empresa->VisionEmpresa=$request->VisionEmpresa;
			$empresa->ValoresEmpresa=$request->ValoresEmpresa;

			$empresa->FacebookEmpresa=$request->FacebookEmpresa;
			$empresa->TwitterEmpresa=$request->TwitterEmpresa;
			$empresa->InstagramEmpresa=$request->InstagramEmpresa;
			$empresa->WhatsappEmpresa=$request->WhatsappEmpresa;
			$empresa->VideoYoutubeEmpresa=$request->VideoYoutubeEmpresa;


			$empresa->update();
			return $empresa;
		}else{
			$empresa=new Empresa;
			$empresa->NombreEmpresa=$request->NombreEmpresa;
			$empresa->TelefonoEmpresa=$request->TelefonoEmpresa;
			$empresa->NitEmpresa=$request->NitEmpresa;
			$empresa->EsloganEmpresa=$request->EsloganEmpresa;
			$empresa->DireccionEmpresa=$request->DireccionEmpresa;
			$empresa->EmailEmpresa=$request->EmailEmpresa;
			$empresa->NosotrosEmpresa=$request->NosotrosEmpresa;
			$empresa->MisionEmpresa=$request->MisionEmpresa;
			$empresa->VisionEmpresa=$request->VisionEmpresa;
			$empresa->ValoresEmpresa=$request->ValoresEmpresa;
            $empresa->FacebookEmpresa=$request->FacebookEmpresa;
			$empresa->TwitterEmpresa=$request->TwitterEmpresa;
			$empresa->InstagramEmpresa=$request->InstagramEmpresa;
			$empresa->WhatsappEmpresa=$request->WhatsappEmpresa;
			$empresa->VideoYoutubeEmpresa=$request->VideoYoutubeEmpresa;


			$empresa->save();
			return $empresa;

		}

		

	}
}
