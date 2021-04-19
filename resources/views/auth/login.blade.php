@extends('layouts.app_login')
@section('content')

<div class="row g-0 app-auth-wrapper">
    <div class="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
    <div class="auth-background-holder">
    </div>
    <div class="auth-background-mask"></div>
    <div class="auth-background-overlay p-3 p-lg-5">
        <div class="d-flex flex-column align-content-end h-100">
            <div class="h-100"></div>
            <div class="overlay-content p-3 p-lg-4 rounded">
               
                <div><p>Escribir es la manera más profunda de leer la vida.</p>
                    <p><strong>-Francisco Umbral</strong></p>

                </div>
            </div>
        </div>
    </div><!--//auth-background-overlay-->
</div><!--//auth-background-col-->
    <div class="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
        <div class="d-flex flex-column align-content-end">
            <div class="app-auth-body mx-auto"> 
                <div class="app-auth-branding mb-4"><a class="app-logo" href="index.html"><img class="logo-icon mr-2" src="assets/images/logo.svg" alt="logo"></a></div>
                <h2 class="auth-heading text-center mb-5">Acceder al portal</h2>
                <div class="auth-form-container text-left">
                    @if(session()->has('error'))
                    <div class="text-danger text-center">
                        {{ session()->get('error') }}
                    </div>
                    @endif
                    <form class="auth-form login-form" method="POST" action="{{ route('login') }}">  
                        @csrf       
                        <div class="email mb-3">
                            <label class="sr-only" for="signin-email">Email</label>

                            <input  id="email" type="email" class="form-control signin-email @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" autocomplete="email" autofocus placeholder="Ingrese su email">
                            @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror</div><!--//form-group-->
                        <div class="password mb-3">
                            <label class="sr-only" for="signin-password">Contraseña</label>

                            <input  id="password" type="password" class="form-control signin-passwordl @error('password') is-invalid @enderror" name="password" autocomplete="current-password" placeholder="Ingrese su contraseña">
                            @error('password')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror





                            <div class="extra mt-3 row justify-content-between">
                                <div class="col-6">
                                    <div class="form-check">

                                       <input type="checkbox" class="form-check-input"  value="" id="customCheck1" {{ old('remember') ? 'checked' : '' }}>

                                       <label class="form-check-label" for="RememberPassword">Recordar sesión
                                    </label>
                                </div>
                            </div><!--//col-6-->
                            <div class="col-6">
                                <div class="forgot-password text-right">
                                 <a href="{{ route('forget-password') }}" > ¿Olvidó su contraseña?</a>
                             </div>
                         </div><!--//col-6-->
                     </div><!--//extra-->
                 </div><!--//form-group-->
                 <div class="text-center">
                    <button type="submit" class="btn app-btn-primary btn-block theme-btn mx-auto">Entrar</button>
                </div>
            </form>

            <div class="auth-option text-center pt-5">

                <a href="{{route('register')}}" class="text-link" >Registrarse </a>


            </div>
        </div><!--//auth-form-container-->  

    </div><!--//auth-body-->

    <footer class="app-auth-footer">
        <div class="container text-center py-3">
         <!--/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */-->
         <small class="copyright"> <a class="app-link"  target="_blank"> Diseñado por: Danner Gómez</a> </small>

     </div>
 </footer><!--//app-auth-footer-->   
</div><!--//flex-column-->   
</div><!--//auth-main-col-->


</div><!--//row-->

@endsection
