import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


require('./bootstrap');

export const rutas = [
{
    path: '',
    component: () => import('./web/Index'),
    name: 'Index',
},
{
    path: '/nosotros',
    component: () => import('./web/Nosotros'),
    name: 'Nosotros',
  },

  {
    path: '/actividades',
    component: () => import('./web/Actividad'),
    name: 'Actividad',
  },
  {
    path: '/actividades/:slug',
    component: () => import('./web/DetalleActividad'),
    name: 'DetalleActividad',
  },

  {
    path: '/contactenos',
    component: () => import('./web/Contactenos'),
    name: 'Contactenos',
  },


    //Error 404 redireccionar

    {
    path: '*',
    component: () => import('./web/Error'),
    name: 'Error',
  },
    
    ]

    export default new Router({
        routes: rutas,
        mode: 'history',
        linkActiveClass: 'active'
    })