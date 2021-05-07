<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Slider;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\SliderRequestStore;
use App\Http\Requests\SliderRequestUpdate;


class SliderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('slider.index');
    }

    public function listado(){
        return Slider::orderBy('id','desc')->get();
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
    public function store(SliderRequestStore $request)
    {

       $slider=new Slider;
       $slider->TituloSlider=$request->TituloSlider;
       $slider->DescripcionSlider=$request->DescripcionSlider;
       $slider->EstadoSlider="Activo";

       $nameFile = $request->file('file');
          
       $newName = time().rand().'.'.$nameFile->getClientOriginalExtension();
       #Amazon

       $path = $nameFile->storeAs('sliders', $newName,'s3');
       Storage::disk('s3')->setVisibility($path, 'public');
                   
       $slider->file_url=Storage::disk('s3')->url($path);
       $slider->file=$nameFile->getClientOriginalName();
       $slider->file_name=$newName;
       $slider->file_type=$nameFile->getClientOriginalExtension();
       $slider->save();
       return $slider;
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
    public function update(SliderRequestUpdate $request, $id)
    {
       $slider=Slider::find($id);;
       $slider->TituloSlider=$request->TituloSlider;
       $slider->DescripcionSlider=$request->DescripcionSlider;
       $slider->EstadoSlider=$request->EstadoSlider;

       if ($request->file('file')) {
          
       Storage::disk('s3')->delete('sliders/'.$slider->file_name);

       $nameFile = $request->file('file');
          
       $newName = time().rand().'.'.$nameFile->getClientOriginalExtension();
       #Amazon

       $path = $nameFile->storeAs('sliders', $newName,'s3');
       Storage::disk('s3')->setVisibility($path, 'public');
                   
       $slider->file_url=Storage::disk('s3')->url($path);
       $slider->file=$nameFile->getClientOriginalName();
       $slider->file_name=$newName;
       $slider->file_type=$nameFile->getClientOriginalExtension();

    }

       
       # $slider->file_url
        $slider->update();

        return $slider;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $slider=Slider::find($id);
        Storage::disk('s3')->delete('sliders/'.$slider->file_name);
        $delete=Slider::where('id',$id)->delete();
        return $delete;
    }
}
