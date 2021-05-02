<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Hash;
use DB;
use Illuminate\Validation\Rule;
class RegisterController extends Controller
{
    public function __construct()
    {

    }
    public function index()
    {
        return view('usuario.index');
    }

    public function listado()
    {
        return DB::table('users')->get();
    }
    public function store(Request $request)
    {

        $rules = [
            'name' => 'required|min:3|regex:/^[\pL\s\-]+$/u',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'password_confirmation' => 'required',
        ];
        $messages = [
            'name.min' => 'El campo nombre  debe tener mínimo tres caracteres',
            'name.required' => 'El campo nombre es requerido ',
            'name.regex' => 'El valor ingresado para el nombre no es válido',
            'email.required' => 'El campo email es requerido',
            'email.unique' => 'Este email ya se encuentra registrado. Use otro',

            'password.min' => 'El campo contraseña debe tener mínimo 8 caracteres',
            'password.required' => 'El campo contraseña es requerido',
            'password_confirmation.required' => 'Debe confirmar la contraseña',

        ];
        $this->validate($request, $rules, $messages);
        $user=User::create([
            'name' => $request->name,
            'email' => $request->email,
            'status'=>"Activo",
            'password' => Hash::make($request->password),
        ]);

        return $user;

    }

    public function update(Request $request,$id){
        $user=User::find($id);
        $rules = [
            'name' => 'required|min:3|regex:/^[\pL\s\-]+$/u',
            'email' => ['required',Rule::unique('users')->ignore($user->id)],
            'password' => 'nullable|string|min:8|confirmed',
            'password_confirmation' => 'nullable',
        ];
        $messages = [
            'name.min' => 'El campo nombre  debe tener mínimo tres caracteres',
            'name.required' => 'El campo nombre es requerido ',
            'name.regex' => 'El valor ingresado para el nombre no es válido',
            'email.required' => 'El campo email es requerido',
            'email.unique' => 'Este email ya se encuentra registrado. Use otro',

            'password.min' => 'El campo contraseña debe tener mínimo 8 caracteres',
            'password.required' => 'El campo contraseña es requerido',
            'password_confirmation.required' => 'Debe confirmar la contraseña',
            'password.confirmed'=> 'Debe confirmar la contraseña',

        ];
        $this->validate($request, $rules, $messages);





        $user->name = $request->name;
        $user->email = $request->email;
        $user->status=$request->status;
        if ($request->password) {
            $user->password = Hash::make($request->password);
        }
        $user->update();

        return $user;

    }
    public function destroy($id)
    {
        $delete=User::where('id',$id)->delete();
        return $delete;
    }
}
