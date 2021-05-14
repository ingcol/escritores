
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
Vue.component("slider-component", () => import("./components/admin/SliderComponent.vue"));
Vue.component("usuario-component", () => import("./components/admin/UsuarioComponent.vue"));
Vue.component("galeria-component", () => import("./components/admin/GaleriaComponent.vue"));
Vue.component("actividad-component", () => import("./components/admin/ActividadComponent.vue"));
Vue.component("empresa-component", () => import("./components/admin/EmpresaComponent.vue"));
Vue.component("aliado-component", () => import("./components/admin/AliadoComponent.vue"));

//Vue.component('sidebar', require('./components/SidebarComponent.vue').default);

const app = new Vue({
    el: '#app',
});



