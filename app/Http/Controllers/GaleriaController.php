<?php

namespace App\Http\Controllers;
use App\Models\Galeria;
use Illuminate\Http\Request;
use DB;
use File;
use Illuminate\Support\Facades\Storage;


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
        return DB::table('galerias')->orderBy('id','Desc')->get();
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

                $newName = time().rand().'.'.$nameFile->getClientOriginalExtension();

                    //amazon
                $path = $nameFile->storeAs('galerias', $newName,'s3');
                Storage::disk('s3')->setVisibility($path, 'public');
                   
                $galeria->file_url=Storage::disk('s3')->url($path);
                $galeria->file=$nameFile->getClientOriginalName();
                $galeria->file_name=$newName;
                $galeria->file_type=$nameFile->getClientOriginalExtension();
   
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

        /*
        if(\Storage::exists('public/galerias/'.$imagen->file_name)){
            \Storage::delete('public/galerias/'.$imagen->file_name);
        }
        */
        Storage::disk('s3')->delete('galerias/'.$imagen->file_name);
        $delete=Galeria::where('id',$id)->delete();
        return $delete;
    }
}
