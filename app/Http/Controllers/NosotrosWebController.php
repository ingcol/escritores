<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Empresa;
use Mail;
class NosotrosWebController extends Controller
{
    public function index(){
    	return Empresa::first(); 
    }

    protected function contactenos(Request $request){

    	$rules = [
            'ContactoNombres' => 'required|min:3|regex:/^[\pL\s\-]+$/u',
            'ContactoTelefono' => 'required|numeric|min:8',
            'ContactoMensaje' => 'required|string|min:15',
            
        ];
        $messages = [
            'ContactoNombres.min' => 'El campo nombres  debe tener mínimo tres caracteres',
            'ContactoNombres.required' => 'El campo nombres es requerido ',
            'ContactoNombres.regex' => 'El valor ingresado para los nombres no es válido',
            'ContactoTelefono.required' => 'El campo teléfono es requerido',
            'ContactoTelefono.numeric' => 'El campo teléfono debe ser numérico',
            'ContactoMensaje.required' => 'El campo mensaje es requerido',
            'ContactoMensaje.min' => 'El mensaje debe ser más explícito',
            

        ];
        $this->validate($request, $rules, $messages);
        $InformacionContacto=["ContactoNombres"=>$request->ContactoNombres,
            "ContactoTelefono" => $request->ContactoTelefono,
            "ContactoMensaje"=>$request->ContactoMensaje,
            "ContactoAsunto"=>$request->ContactoAsunto
        ];
        $empresa=Empresa::first();

        $subject = "Llanotic contáctenos";
            $for =$empresa->EmailEmpresa;
            try{
              $envioMail=Mail::send('email.index',$InformacionContacto, function($msj) use($subject,$for){
                $msj->from("llanotic2021@gmail.com","Contáctenos llanotic" );
                $msj->subject($subject);
                $msj->to($for);
            });
          }
          catch(\Swift_RfcComplianceException $transportExp){

         
           

        }

    }
}
