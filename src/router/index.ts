import { createRouter, createWebHistory } from 'vue-router'
import RoiCalculator from '../views/RoiCalculator.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'calculator',
      component: RoiCalculator
    }
  ]
})

export default router