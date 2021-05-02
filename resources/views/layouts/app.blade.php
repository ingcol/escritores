<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <title>Llanotics</title>
    <link rel="stylesheet" href=" {{ asset('css/admin.css') }} ">
    <script src="{{ mix('/js/app.js') }}" defer></script>
    <!-- Font Awesome -->
    <link rel="stylesheet" type="text/css" href="assets/icon/font-awesome/css/font-awesome.min.css">
    
</head>
<body class="app">
    <!-- Header-->
    <header class="app-header fixed-top">                   
       @include('layouts.navbar')
       @include('layouts.slidebar')
   </header><!--//app-header-->
   <div id="app">
    <div class="app-wrapper">
        @yield('content')
    </div>

</div>


<script src="{{ asset('js/admin.js') }}"></script>
</body>
</html>