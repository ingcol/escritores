const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');

//Admin
mix.styles(['resources/admin/css/portal.css',
            'resources/admin/css/style.css'
        ], 'public/css/admin.css').scripts([
        'resources/admin/js/popper.min.js',
        'resources/admin/js/bootstrap.min.js',
        'resources/admin/js/app-demo.js',
        ], 'public/js/admin.js');
//WEB

mix.styles([
    'resources/web/css/bootstrap.min.css',
    'resources/web/css/animate.min.css',
    'resources/web/css/venobox.css',
    'resources/web/css/owl.carousel.min.css',
    'resources/web/css/aos.css',
    'resources/web/css/style.css',
    ], 'public/css/web.css').scripts([
        'resources/web/js/jquery.min.js',
        'resources/web/js/bootstrap.bundle.min.js',
        'resources/web/js/jquery.easing.min.js',
        'resources/web/js/jquery.sticky.js',
        'resources/web/js/venobox.min.js',
        'resources/web/js/jquery.waypoints.min.js',
        'resources/web/js/counterup.min.js',
        
        'resources/web/js/owl.carousel.min.js',
        'resources/web/js/isotope.pkgd.min.js',
        'resources/web/js/aos.js',
        'resources/web/js/main.js',
        ], 'public/js/web.js');

	mix.js('resources/js/app-vue.js', 'public/js/app-vue.js')
    .vue()




         



  

