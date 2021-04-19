<!DOCTYPE html>
<html lang="en">

<head>
  <title>Escribir mas</title>
  <!-- Meta -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="description" content="Mega Able Bootstrap admin template made using Bootstrap 4 and it has huge amount of ready made feature, UI components, pages which completely fulfills any dashboard needs." />
  <meta name="keywords" content="bootstrap, bootstrap admin template, admin theme, admin dashboard, dashboard template, admin template, responsive" />
  <meta name="author" content="codedthemes" />
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <!-- Favicon icon -->

  <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon">
  <!-- Google font-->     
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,500" rel="stylesheet">

  <link rel="stylesheet" href=" {{ asset('css/admin.css') }} ">
  <link rel="stylesheet" type="text/css" href="assets/icon/themify-icons/themify-icons.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" type="text/css" href="assets/icon/font-awesome/css/font-awesome.min.css">
</head>

<body class="app app-login p-0">
  <div id="app">
  @yield('content')
  </div>
</body>

 
  