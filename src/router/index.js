import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Todos from '@/views/Todos/Todos.vue'
import AddTodo from '@/views/Todos/AddTodo.vue'

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
  },
  {
    path: '/todos/create',
    name: 'todos.create',
    component: AddTodo,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
