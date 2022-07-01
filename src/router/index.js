import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ciudades',
    name: 'Ciudades',
    component: () => import('../views/CiudadesView.vue')
  },
  {
    path: '/aerolineas',
    name: 'Aerolineas',
    component: () => import('../views/AerolineasView.vue')
  },
  {
    path: '/vuelos',
    name: 'Vuelos',
    component: () => import('../views/VuelosView.vue')
  },
  {
    path: '/vuelotickets/:cp/:cd',
    name: 'vuelotickets',
    component: () => import('../views/VueloTicketsView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
