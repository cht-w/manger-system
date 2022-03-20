import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@components/Home.vue'),
    meta: { title: '主页' },
    redirect: '/welcome',
    children: [
      {
        name: 'welcome',
        path: '/welcome',
        meta: { title: '欢迎页面' },
        component: () => import('@views/Welcome.vue')
      },
    ]
  },
  {
    name: 'login',
    path: '/login',
    meta: { title: '登陆页面' },
    component: () => import('@views/Login.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router;