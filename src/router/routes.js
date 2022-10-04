import Home from '../views/App-Home.vue'
import About from '../views/App-About.vue'
import Practices from '../views/practices/App-Practices.vue'
import PageNotFound from '../views/page-not-found/App-PageNotFound.vue'
import practicesRoutes from '../views/practices/router'

const routes = [
    {
        path: '',
        component: Home,
        name: 'home',
        titel: 'Home',
        icon: 'home'
    },
    {
        path: '/about',
        component: About,
        name: 'about',
        titel: 'About',
        icon: 'error'
    },
    {
        path: '/contact',
        component: About,
        name: 'contact',
        titel: 'Contact us',
        icon: 'mail'
    },
    {
        path: '',
        component: Practices,
        children: practicesRoutes
    },
    {
        path: '/:pathMatch(.*)*',
        component: PageNotFound,
    },
]

export default routes