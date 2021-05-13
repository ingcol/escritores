<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmpresaRequestUpdate extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'NombreEmpresa' => 'required|min:3',
            'TelefonoEmpresa' => 'required|min:6|numeric',
            'DireccionEmpresa'=> 'required|min:6',
            'EmailEmpresa'=> 'required|email',
            'NosotrosEmpresa'=>'required|min:16',
            'MisionEmpresa'=>'nullable|min:10',
            'VisionEmpresa'=>'nullable|min:10',
            'ValoresEmpresa'=>'nullable|min:10',

            'FacebookEmpresa'=>'nullable|url',
            'TwitterEmpresa'=>'nullable|url',
            'InstagramEmpresa'=>'nullable|url',
            'WhatsappEmpresa' => 'required|min:6|numeric',
            'VideoYoutubeEmpresa'=>'required'
            
        ];
        
       
    
    }
    public function messages()
    {
        return [
            'NombreEmpresa.required' => 'El campo nombre es requerido',
            'NombreEmpresa.min' => 'El campo nombre debe tener más de 3 caracteres',
            'TelefonoEmpresa.required' => 'El campo teléfono es requerido',
            'TelefonoEmpresa.numeric' => 'El campo teléfono debe ser numérico',
            'ValoresEmpresa.min' => 'El campo valor debe tener más de 5 caracteres',
            'NosotrosEmpresa.min' => 'El valor para la descripción nosotros  debe ser más explicita',
            'MisionEmpresa.min' => 'El valor para la descripción misión  debe ser más explicita',
            'VisionEmpresa.min' => 'El valor para la descripción visión  debe ser más explicita',
            'WhatsappEmpresa.required' => 'El campo Whatsapp es requerido',
            'VideoYoutubeEmpresa.required' => 'El campo vídeo de youtube es requerido',
        
            


        ];
    }
}
