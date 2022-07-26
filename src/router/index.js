import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '@/views/index.vue'
import home from '@/views/index/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: home
      },
      {
        path: 'cid',
        component: () => import('@/views/index/cid.vue')
      },
      {
        path: 'cid/:cid',
        component: () => import('@/views/index/cid.vue')
      },
      // {
      //   path: 'chart',
      //   component: () => import('@/views/index/chart.vue')
      // },
      // {
      //   path: 'indexer',
      //   component: () => import('@/views/index/indexer.vue')
      // }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
