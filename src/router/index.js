import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Todos from '@/views/Todos/Todos.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todos',
    name: 'todos.index',
    component: Todos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
