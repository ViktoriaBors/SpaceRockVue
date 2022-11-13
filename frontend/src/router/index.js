import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SampleView from '../views/SampleView.vue'
import FacilityView from '../views/FacilityView.vue'
import DatabaseView from '../views/DatabaseView.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true
  },
  {
    path: '/sample',
    name: 'sample',
    component: SampleView,
    props: true
  },
  {
    path: '/facility',
    name: 'facility',
    component: FacilityView,
    props: true
  },
  {
    path: '/database',
    name: 'database',
    component: DatabaseView,
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    props: true
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
