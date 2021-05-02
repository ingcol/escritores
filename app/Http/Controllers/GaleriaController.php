<?php

namespace App\Http\Controllers;
use App\Models\Galeria;
use Illuminate\Http\Request;
use DB;
use File;

class GaleriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('galeria.index');
    }
    public function listado(){
        return DB::table('galerias')->get();
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
        if ($request->hasFile('files')) {


            foreach ($request->file('files') as $file) {
                $nameFile = $file;
                $extension= $nameFile->getClientOriginalExtension();

                if ($extension!="png" && $extension!="jpeg"&& $extension!="jpg") {
                    return response()->json(['errors' => ['message' => ['El formato de la imagen no es válido']]], 422);
                }

               $galeria=new Galeria;
               

               $filenameWithExt = $nameFile->getClientOriginalName();
            //Get just filename
               $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            // Get just ext
              
            // Filename to store
               $fileNameToStore = $filename.'_'.time().rand().'.'.$extension;
            // Upload Image
               $path = $nameFile->storeAs('public/galerias',$fileNameToStore);

               $galeria->file=$nameFile->getClientOriginalName();
               $galeria->file_name=$fileNameToStore;
               $galeria->file_type=$nameFile->getClientOriginalExtension();
               $galeria->file_url='../storage/galerias/'.$fileNameToStore;
               $galeria->save();


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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $imagen=Galeria::find($id);
        if(\Storage::exists('public/galerias/'.$imagen->file_name)){
            \Storage::delete('public/galerias/'.$imagen->file_name);
        }
        $delete=Galeria::where('id',$id)->delete();
        return $delete;
    }
}
