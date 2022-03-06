import { createRouter, createWebHashHistory } from "vue-router";
import Home from './../components/Home.vue'
import Welcome from './../components/Welcome.vue'
import Login from './../components/Login.vue'
const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
        meta: { title: '主页' },
        redirect: '/welcome',
        children: [
            {
                name: 'welcome',
                path: '/welcome',
                meta: { title: '欢迎页面' },
                component: Welcome
            },
            {
                name: 'login',
                path: '/login',
                meta: { title: '登陆页面' },
                component: Login
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;