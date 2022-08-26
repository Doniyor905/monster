import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/brus',
    name: 'brus',
    component: () => import(/* webpackChunkName: "about" */ '../views/Brus.vue')
  },
  {
    path: '/granit',
    name: 'granit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Granit.vue')
  },
  {
    path: '/tualet',
    name: 'tualet',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tualet.vue')
  },
  {
    path: '/jir',
    name: 'jir',
    component: () => import(/* webpackChunkName: "about" */ '../views/Jir.vue')
  },
  {
    path: '/basyen',
    name: 'basyen',
    component: () => import(/* webpackChunkName: "about" */ '../views/Baseyn.vue')
  },
  {
    path: '/super',
    name: 'Super',
    component: () => import(/* webpackChunkName: "about" */ '../views/Super.vue')
  },
  {
    path: '/dna',
    name: 'dna',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dna.vue')
  },
  {
    path: '/antiment',
    name: 'antiment',
    component: () => import(/* webpackChunkName: "about" */ '../views/Antiment.vue')
  },
  {
    path: '/antijir',
    name: 'antijir',
    component: () => import(/* webpackChunkName: "about" */ '../views/Antijir.vue')
  },
  {
    path: '/kazanchik',
    name: 'kazanchik',
    component: () => import(/* webpackChunkName: "about" */ '../views/Kazanchik.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
