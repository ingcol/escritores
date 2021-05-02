require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('body-web', require('./components/web/Body.vue').default);
Vue.component('galeria-web', require('./web/Galeria.vue').default);

//Vue.component('header-web', require('./web/Header.vue').default);

import router from './routes'


const app = new Vue({
    el: '#app',
      router
});
