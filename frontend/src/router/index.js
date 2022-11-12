import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SampleView from '../views/SampleView.vue'
import FacilityView from '../views/FacilityView.vue'
import DatabaseView from '../views/DatabaseView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sample',
    name: 'sample',
    component: SampleView
  },
  {
    path: '/facility',
    name: 'facility',
    component: FacilityView
  },
  {
    path: '/database',
    name: 'database',
    component: DatabaseView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
