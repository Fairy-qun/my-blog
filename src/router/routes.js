const routes = [
  {
    path: '/home',
    name: '/home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: '/login',
    component: () => import('@/views/Login.vue')
  }
]
export default routes
