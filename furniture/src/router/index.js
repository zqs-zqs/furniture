import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Living from '../views/Living.vue'
import Bed from '../views/Bed.vue'
import Index from '../views/Index.vue'
import Dining from '../views/Dining.vue'
import Cook from '../views/Cook.vue'
import Bath from '../views/Bath.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Details from '../views/Details.vue'
import Carts from '../views/Carts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/cart',
    component:Carts
  },
  {
    path:'/details',
    component:Details
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/bath',
    component:Bath
  },
  {
    path:'/cook',
    component:Cook
  },
  {
    path:'/dining',
    component:Dining
  },
  {
    path:'/bed',
    component:Bed
  },
  {
    path:'/',
    component:Index
  },
  {
    path:'/living',
    component:Living
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
