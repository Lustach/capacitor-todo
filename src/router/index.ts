import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: ()=> import('@/views/HomePage.vue')
  },
  {
    path: '/today',
    name: 'Today',
    component: ()=> import('@/views/TodayPage.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: ()=> import('@/views/TestPage.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: ()=> import('@/views/CategoriesPage.vue')
  },
  // {
  //   path: '/filters&marks',
  //   name: 'Filters',
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
