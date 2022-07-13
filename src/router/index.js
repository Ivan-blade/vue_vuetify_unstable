import { createRouter, createWebHistory } from 'vue-router'
import SocketUI from '../components/SocketUI.vue'
import TimeLine from '../components/TimeLine.vue'
import Empty from '../components/Empty.vue'


const routes = [
    {
        path: '/socketUI',
        name: 'SocketUI',
        component: SocketUI
    },
    {
        path: '/timeline',
        name: 'TimeLine',
        component: TimeLine
    },
    {
        path: "/",
        name: 'Empty',
        component: Empty
    }
]

const router = createRouter({
    //history模式：createWebHistory , hash模式：createWebHashHistory
    history: createWebHistory(),
    routes
})


export default router
