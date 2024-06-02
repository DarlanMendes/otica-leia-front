import { createRouter, createWebHistory } from 'vue-router'
import {Views} from "@/views/index"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Views.Home()
    },
    {
      path: '/login',
      name: 'login',
      component: Views.Login()
    },
    {
      path:'/signup',
      name:'signup',
      component: Views.SignUp()
    }
  ]
})

export default router
