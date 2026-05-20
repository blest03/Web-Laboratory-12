import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonView from '../views/PersonView.vue'
import FeedbackView from '../views/FeedbackView.vue'

const routes = [
  { 
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/person',
    name: 'person',
    component: PersonView
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: FeedbackView
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
