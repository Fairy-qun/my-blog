import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '@/router/routes.js'
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
