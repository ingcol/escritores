require('./bootstrap');

window.Vue = require('vue').default;

import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

Vue.component('body-web', require('./components/web/Body.vue').default);
Vue.component('galeria-web', require('./web/Galeria.vue').default);
Vue.component('nosotros-inicio-web', require('./web/NosotrosInicio.vue').default);
Vue.component('footer-web', require('./web/Footer.vue').default);
Vue.component('aliados-web', require('./web/Aliados.vue').default);

//Vue.component('header-web', require('./web/Header.vue').default);


import VueToastr from "vue-toastr";

// use plugin
Vue.use(VueToastr, {
  /* OverWrite Plugin Options if you need */
});

import router from './routes'


const app = new Vue({
    el: '#app',
      router
});
