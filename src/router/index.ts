import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/sign-in'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/sign-in'
      },
      {
        path: 'sign-in',
        component: () => import('@/views/SignInTab.vue')
      },
      {
        path: 'parent',
        component: () => import('@/views/ParentInfoTab.vue')
      },
      {
        path: 'child',
        component: () => import('@/views/ChildInfoTab.vue')
      },
      {
        path: 'video-upload',
        component: () => import('@/views/VideoUploadTab.vue')
      },
      {
        path: 'view-uploads',
        component: () => import('@/views/ViewUploadsTab.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
