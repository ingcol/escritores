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
    color: #5c768d;
    padding: 12px 15px;
    transition: 0.3s;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
}
.nav-menu a:hover {
    color:green;
}
  </style>

  <script src="{{ asset('js/app-vue.js') }}" defer></script>

  <body>
    <div id="app">

      <section id="topbar" class="d-none d-lg-block">
        <div class="container clearfix">
          <div class="contact-info float-left">
            <i class="icofont-envelope"></i><a href="mailto:contact@example.com">contact@example.com</a>
            <i class="icofont-phone"></i> +1 5589 55488 55
          </div>
          <div class="social-links float-right">
            <a href="#" class="twitter"><i class="fa fa-facebook"></i></a>
            <a href="#" class="facebook"><i class="fa fa-instagram"></i></a>
            <a href="#" class="instagram"><i class="fa fa-twitter"></i></a>
            <a href="#" class="skype"><i class="icofont-skype"></i></a>
            <a href="#" class="linkedin"><i class="icofont-linkedin"></i></i></a>
          </div>
        </div>
      </section>

      <nav class="nav-menu  navbar navbar-dark bg-white navbar-expand-sm fixed-top border-bottom ">
        <div class="container">
          <a class="navbar-brand text-dark">
      
        <img src="https://media.licdn.com/dms/image/C4E0BAQF1lkrn5Z9IqQ/company-logo_200_200/0?e=2159024400&v=beta&t=uBF6bRoQ71VDZnACFQaKVCU0p2DKXHJtCT0HBgfepyY" width="40" height="40" alt="logo">
        Llanotics
      </a>
      <div class="bg-warning m-r">
      <button class="navbar-toggler text-dark" type="button" data-toggle="collapse" data-target="#navbar-list-11" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button></div>
      <div class="collapse navbar-collapse" id="navbar-list-11">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">

            <router-link  class="text-dark" to="/"> Inicio</router-link>

          </li>
          <li class="nav-item">
            <router-link class="text-dark" to="/algo"> Nosotros</router-link>
          </li>

          <li class="nav-item">
            <router-link class="text-dark" to="/actividades">Actividades</router-link>
          </li>
          <li class="nav-item ">
            <a class="text-dark" target="_blank" href="/login"> Login</a>
          </li>
          <li class="nav-item ">
            <a class="text-dark"   href="/register">Registro</a>
          </li>
           <li class="nav-item ">
            <a class="text-dark  border-bottom border-warning" style="border-radius:5px; padding-bottom: 1px;color:#5c768d"   href="/register"> Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>



  <router-view></router-view>



</div>



<script src="{{ asset('js/web.js') }}"></script>

</body>
</html>
