import {createRouter, createWebHashHistory} from 'vue-router'

const routerHistory = createWebHashHistory()

import homePage from ".//pages/home.vue"
import aboutPage from "./pages/about.vue"
import notFoundPage from './pages/notFound.vue';



const routers = createRouter({
  history: routerHistory,
  routes:[
    {
      path: '/',
      name: 'Home',
      component: homePage,
    },
    {
      path: '/about',
      name: 'About',
      component: aboutPage,
    },
    {
      path: '/:CatchAll(.*)',
      name: '404',
      component: notFoundPage,
    },
  ]
})

export default routers;