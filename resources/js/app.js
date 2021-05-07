
require('./bootstrap');

window.Vue = require('vue').default;
/* loading para cargar en filtros
npm i --save vuejs-loading-plugin
import VueLoading from 'vuejs-loading-plugin'
Vue.use(VueLoading)
*/
import Lightbox from 'vue-easy-lightbox'

Vue.use(Lightbox)

import VueToastr from "vue-toastr";

import CKEditor from 'ckeditor4-vue';

Vue.use( CKEditor );
// use plugin
Vue.use(VueToastr, {
  /* OverWrite Plugin Options if you need */
});
Vue.component('slider-component', require('./components/admin/SliderComponent.vue').default);
Vue.component('usuario-component', require('./components/admin/UsuarioComponent.vue').default);
Vue.component('galeria-component', require('./components/admin/GaleriaComponent.vue').default);
Vue.component('actividad-component', require('./components/admin/ActividadComponent.vue').default);
//Vue.component('sidebar', require('./components/SidebarComponent.vue').default);

const app = new Vue({
    el: '#app',
});



