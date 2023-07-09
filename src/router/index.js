import { createRouter, createWebHistory } from "vue-router"

import HomeView from '../views/HomeView.vue'
import PlanView from '../views/PlanView.vue'
import AddOnView from '../views/AddOnView.vue'
import FinalView from '../views/FinalView.vue'
import ThankYouView from '../views/ThankYouView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/plan',
        name: 'plan',
        component: PlanView
      },
      {
        path: '/add-ons',
        name: 'addOn',
        component: AddOnView
      },
      {
        path: '/finishing-up',
        name: 'final',
        component: FinalView
      },
      {
        path: '/thank-you',
        name: 'thankYou',
        component: ThankYouView
      },
      {
          path: '/:patchMatch(.*)*',
          name: 'notFound',
          component: NotFoundView
      }
  ]
})

export default router