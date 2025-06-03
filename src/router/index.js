import { createRouter, createWebHistory } from 'vue-router'
import background from '@/components/background.vue'

const routes = [{ path: '/', component: background }]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
