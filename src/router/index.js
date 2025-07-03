import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/incomes',
      name: 'Incomes',
      component: () => import('@/views/Incomes.vue'),
    },
    {
      path: '/orders',
      name: 'Orders',
      component: () => import('@/views/Orders.vue'),
    },
    {
      path: '/sales',
      name: 'Sales',
      component: () => import('@/views/Sales.vue'),
    },
    {
      path: '/stocks',
      name: 'Stocks',
      component: () => import('@/views/Stocks.vue'),
    },
  ],
})

export default router
