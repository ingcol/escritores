/*
require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('ejemplo', require('./components/ExampleComponent.vue').default);
Vue.component('sidebar', require('./components/SidebarComponent.vue').default);

const app = new Vue({
    el: '#app',
});

*/

import { App, plugin } from '@inertiajs/inertia-vue'
import Vue from 'vue'



Vue.use





(plugin)

const el = document.getElementById



('app')



new Vue({
  render: h => h(App, {
    props: {
      initialPage: JSON.parse(el.dataset.page),
      //resolveComponent: name => require(`./Pages/${name}`).default,
      resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
    },
  })



,
}).$mount(el)
