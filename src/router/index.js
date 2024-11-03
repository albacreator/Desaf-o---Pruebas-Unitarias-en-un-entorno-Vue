import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'           // Importa el componente About
import Contact from '../views/Contact.vue'       // Importa el componente Contact

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import(/* webpackChunkName: "posts" */ '../views/PostsView.vue')
  },
  {
    path: '/about',             // Nueva ruta para About
    name: 'about',
    component: About            // Componente About
  },
  {
    path: '/contact',           // Nueva ruta para Contact
    name: 'contact',
    component: Contact          // Componente Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

