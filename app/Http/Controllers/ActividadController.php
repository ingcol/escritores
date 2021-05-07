<?php

namespace App\Http\Controllers;
use App\Models\Actividad;
use App\Models\Imagen_actividad;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Storage;

class ActividadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('actividad.index');
    }

    public function listadoActividad(){
        return Actividad::orderBy('id','Desc')->with('imagenes')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $rules = [
            'TituloActividad' => 'required|min:3',
            'DescripcionActividad' => 'required|min:10',
            
        ];
        $messages = [
            'TituloActividad.min' => 'El campo título debe ser más explicito',
            'TituloActividad.required' => 'El campo título es requerido ',
            'DescripcionActividad.min' => 'El campo descripción debe ser más explicito',
            'DescripcionActividad.required' => 'El campo descripción es requerido '

        ];
        $this->validate($request, $rules, $messages);
        $actividad=new Actividad;
        $actividad->TituloActividad=$request->TituloActividad;
        $actividad->DescripcionActividad=$request->DescripcionActividad;
        $actividad->EstadoActividad="Activo";
        $actividad->slug=$actividad->slugify($request->TituloActividad);
        $actividad->save();

        //insert imagenes en 
        if ($request->hasFile('files')) {


            foreach ($request->file('files') as $file) {
                $nameFile = $file;
                $extension= $nameFile->getClientOriginalExtension();

                if ($extension=="png" || $extension=="jpeg" || $extension=="jpg" || $extension=="gif") {



                    $imagen=new Imagen_actividad;


                    $newName = time().rand().'.'.$nameFile->getClientOriginalExtension();
       #Amazon

                    $path = $nameFile->storeAs('actividades', $newName,'s3');
                    Storage::disk('s3')->setVisibility($path, 'public');

                    $imagen->file_url=Storage::disk('s3')->url($path);
                    $imagen->file=$nameFile->getClientOriginalName();
                    $imagen->file_name=$newName;
                    $imagen->file_type=$nameFile->getClientOriginalExtension();



                    $imagen->actividad_id=$actividad->id;

                    $imagen->save();
                }


            }



        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
    
      
        $rules = [
            'TituloActividad' => 'required|min:3',
            'DescripcionActividad' => 'required|min:10',
            
        ];
        $messages = [
            'TituloActividad.min' => 'El campo título debe ser más explicito',
            'TituloActividad.required' => 'El campo título es requerido ',
            'DescripcionActividad.min' => 'El campo descripción debe ser más explicito',
            'DescripcionActividad.required' => 'El campo descripción es requerido '

        ];
        $this->validate($request, $rules, $messages);
        $actividad=Actividad::find($id);
        $actividad->TituloActividad=$request->TituloActividad;
        $actividad->DescripcionActividad=$request->DescripcionActividad;
        $actividad->EstadoActividad=$request->EstadoActividad;

        if ($request->NombreActividad!=$actividad->NombreActividad) {

         $actividad->slug= $actividad->slugify($request->NombreActividad);
     }

     $actividad->update();

        //insert imagenes en 
     if ($request->hasFile('files')) {


        foreach ($request->file('files') as $file) {
            $nameFile = $file;
            $extension= $nameFile->getClientOriginalExtension();

            if ($extension=="png" || $extension=="jpeg" || $extension=="jpg" || $extension=="gif") {



                $imagen=new Imagen_actividad;


                $newName = time().rand().'.'.$nameFile->getClientOriginalExtension();
       #Amazon

                $path = $nameFile->storeAs('actividades', $newName,'s3');
                Storage::disk('s3')->setVisibility($path, 'public');

                $imagen->file_url=Storage::disk('s3')->url($path);
                $imagen->file=$nameFile->getClientOriginalName();
                $imagen->file_name=$newName;
                $imagen->file_type=$nameFile->getClientOriginalExtension();
                $imagen->actividad_id=$actividad->id;

                $imagen->save();
            }


        }



    }

}

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {


        $imagen=Imagen_actividad::where('actividad_id',$id)->get();


        if ($imagen->count()) {
           foreach ($imagen as  $value) {

            Storage::disk('s3')->delete('actividades/'.$value->file_name);
            Imagen_actividad::where('id',$value->id)->delete();
               
           }
        }
        
        $delete=Actividad::where('id',$id)->delete();
        return $delete;
    }
    public function eliminarImagenActividad($id){


        $imagen=Imagen_actividad::find($id);

        /*
        if(\Storage::exists('public/galerias/'.$imagen->file_name)){
            \Storage::delete('public/galerias/'.$imagen->file_name);
        }
        */
        Storage::disk('s3')->delete('actividades/'.$imagen->file_name);
        $delete=Imagen_actividad::where('id',$id)->delete();
        return $delete;

    }
}
