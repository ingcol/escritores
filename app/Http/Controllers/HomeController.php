<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use Inertia\Inertia;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
     
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
           return view('Home');
    }


    
    public function userProfile()
    {
        return view('usermanagement.user_profile');
    }
}
