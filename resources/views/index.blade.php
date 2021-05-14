<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Llanotic</title>

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href=" {{ asset('css/web.css') }} ">
  <link rel="stylesheet" type="text/css" href="assets/icon/font-awesome/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.0/css/font-awesome.css" integrity="sha512-72McA95q/YhjwmWFMGe8RI3aZIMCTJWPBbV8iQY3jy1z9+bi6+jHnERuNrDPo/WGYEzzNs4WdHNyyEr/yXJ9pA==" crossorigin="anonymous" />

  <style >

    .bg-custom-1 {
      background-color: #85144b;
    }

    .bg-custom-2 {
      background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
    }
    .nav-menu a {
      display: block;
      position: relative;
      color: red;
      padding: 12px 15px;
      transition: 0.3s;
      font-size: 16px;
      font-family: "Open Sans", sans-serif;
    }
    .nav-menu a:hover {
      color:green;
    }
    .nav-item a.router-link-exact-active {
    color: #2dce89 !important;
    
  }
  
    .img-fluid{
      border-radius:100%; 
      height: 50px; 
      width: 50px;
      border: solid 2px orange;
    }
    .navbar .navbar-collapse .nav-item .nav-link {
      overflow-y: auto;
      color: white;
    }
    .link-text{
      color: #5c768d !important;
    }
    .fade-enter,.fade-leave-to{
      opacity: 0;
      transform: translateX(-2em);
    }
    .fade-enter-active,.fade-leave-active{
      transition: all .4s ease;

    }
  </style>

  <script src="{{ asset('js/app-vue.js') }}" defer></script>

  <body>
    <div id="app">
      <div class="container ">
        <div class="row  ">
          <div class="col  ">
            <nav class="navbar navbar-expand-lg navbar-light bg-white  text-danger fixed-top font-weight-bold  shadow-sm">
              <img src="https://image.freepik.com/vector-gratis/ilustracion-icono-logo-vector-marketing-digital_1893-1451.jpg" class="img-fluid" class="navbar-toggler nav-link"  data-toggle="dropdown" id="navbardrop">
              <a  class=" d-lg-none  navbar-brand text-dark">Llanotics</a>
              <a  class="d-none d-lg-block navbar-brand text-dark ml-2">Llanotics</a>        
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="dropdown-divider"></div>
                <ul class="navbar-nav ml-auto ">
                  <li class="nav-item"  data-toggle="collapse" data-target=".navbar-collapse.show">

                    <router-link  class="text-dark nav-link link-text" to="/"> Inicio</router-link>

                  </li>
                  <li class="nav-item"  data-toggle="collapse" data-target=".navbar-collapse.show">
                    <router-link class="text-dark nav-link link-text" to="/nosotros"> Nosotros</router-link>
                  </li>

                  <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <router-link class="text-dark nav-link link-text" to="/actividades">Actividades</router-link>
                  </li>
                 
                  <li class="nav-item mr-5 " data-toggle="collapse" data-target=".navbar-collapse.show">
                   <router-link class="text-dark nav-link link-text" to="/contactenos">Contáctenos</router-link>

                    <li class="nav-item " data-toggle="collapse" data-target=".navbar-collapse.show">
                    <a class="text-dark nav-link link-text" target="_blank" href="/login"> Login</a>
                  </li>
                 </li>
                 
               </ul>

             </div>
           </nav>
         </div>
       </div>
     </div>
       <transition  name="fade" mode="out-in"  appear>
       <router-view></router-view>
     </transition>

     <footer-web/>



   </div>



   <script src="{{ asset('js/web.js') }}"></script>

 </body>
 </html>
