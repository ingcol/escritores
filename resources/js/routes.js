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
        
        path: '/algo',
        name: '',
        component: require('./web/Index').default,
        
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