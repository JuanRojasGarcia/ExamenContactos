import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tareas from '../views/Tareas.vue'
import Contactos from '../views/Contactos.vue'
import CrearTarea from '../components/CrearTarea'
import EditarTarea from '../components/EditarTarea'
import CrearContacto from '../components/CrearContacto'
import EditarContacto from '../components/EditarContacto'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/tareas',
    name: 'tareas',
    component: Tareas
  },
  {
    path: '/contactos',
    name: 'contactos',
    component: Contactos
  },
 
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
