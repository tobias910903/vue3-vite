import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/a',
        name: 'a',
        component: () => import('../views/home/index.vue')
    },
    {
        path: '/b',
        name: 'b',
        component: () => import('../views/test/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router