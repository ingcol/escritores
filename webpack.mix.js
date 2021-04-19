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


mix.styles(['resources/admin/css/portal.css',
        ], 'public/css/admin.css').scripts([
        'resources/admin/js/popper.min.js',
        'resources/admin/js/bootstrap.min.js',
        'resources/admin/js/chart.min.js',
        'resources/admin/js/index-charts.js',
        'resources/admin/js/app-demo.js',
        ], 'public/js/admin.js');
 





    
         



  

