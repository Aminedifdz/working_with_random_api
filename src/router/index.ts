import { createRouter, createWebHistory } from 'vue-router'
import { Home, Contact} from '../pages'

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    /*component: function () {
      return import('../pages')
    }*/
    component: Home,
  },
  {
    path: '/contact/:id',
    name: 'Contact',
    /*component: function () {
      return import('../pages')
    }*/
    component: Contact,
    params: true,
    props : route => ({ query: route.query })
  }
]

const router = createRouter({
  mode: history,
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
