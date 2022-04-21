import { createRouter, createWebHistory } from 'vue-router'
import { Home, Contact} from '../pages'

const routes = [
  {
      path: '/',
      name: 'Home',
      component: Home
  },
  {
      path: '/contact/:id',
      name: 'Contact.details',
      props: true,
      component: Contact
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
