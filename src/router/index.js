import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/App-Home.vue'
import About from '../views/App-About.vue'
import Task from '../components/App-Task.vue'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/team',
            component: Task
        }
    ]
})

export default router