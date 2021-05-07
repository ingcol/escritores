import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const rutas = [

    {

        path: '/',
        name: '',
        component: require('./web/Index').default,
        
    },
    {
        
        path: '/actividades',
        name: '',
        component: require('./web/Actividad').default,
        
    },
    {
        
        path: '/actividades/:slug',
        name: '',
        component: require('./web/DetalleActividad').default,
        
    },

    //Error 404 redireccionar
    
    {
        path: '*',
        component: require('./components/web/Footer').default
    }
    
]

export default new Router({
    routes: rutas,
    mode: 'history',
    linkActiveClass: 'active'
})