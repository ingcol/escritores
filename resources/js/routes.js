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
        
        path: '/nosotros',
        name: '',
        component: require('./web/Nosotros').default,
        
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
    {
        
        path: '/contactenos',
        name: '',
        component: require('./web/Contactenos').default,
        
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