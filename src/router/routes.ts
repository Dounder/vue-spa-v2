import type { RouteRecordRaw } from 'vue-router'

import IsAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard'
import NotFound404 from '@/modules/common/pages/NotFound404.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'landing',
    component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/modules/landing/pages/HomePage.vue')
      },
      {
        path: 'features',
        name: 'features',
        component: () => import('@/modules/landing/pages/FeaturesPage.vue')
      },
      {
        path: 'pricing',
        name: 'pricing',
        component: () => import('@/modules/landing/pages/PricingPage.vue')
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/modules/landing/pages/ContactPage.vue')
      },
      {
        path: 'pokemon/:id',
        name: 'pokemon',
        beforeEnter: [IsAuthenticatedGuard],
        props: (route) => {
          const id = Number(route.params.id)

          return {
            id: isNaN(id) ? 1 : id
          }
        },
        component: () => import('@/modules/pokemon/pages/PokemonPage.vue')
      }
    ]
  },

  {
    path: '/auth',
    name: 'auth',
    redirect: { name: 'login' },
    component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/modules/auth/pages/LoginPage.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/modules/auth/pages/RegisterPage.vue')
      }
    ]
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'not.found',
    component: NotFound404
  }
]

export default routes
