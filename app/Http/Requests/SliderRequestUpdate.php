<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SliderRequestUpdate extends FormRequest
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
            'TituloSlider' => 'required|min:6',
            'DescripcionSlider' => 'required|min:10',
            'file' => 'nullable|mimes:jpeg,jpg,png|max:5000',
            
        ];
    }

    public function messages()
    {
        return [
            'TituloSlider.required' => 'El campo título es requerido',
            'TituloSlider.min' => 'El campo título debe tener más de 6 caracteres',
            
            'DescripcionSlider.required' => 'El campo descripción es requerido',
            'DescripcionSlider.min' => 'El campo descripción debe tener más de 10 caracteres',
            


        ];
    }
}
