import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'business-balance',
    component: () => import('../views/BusinessBalance.vue')
  },
  {
    path: '/top-ten-clients',
    name: 'top-ten-clients',
    component: () => import('../views/TopTenClients.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
