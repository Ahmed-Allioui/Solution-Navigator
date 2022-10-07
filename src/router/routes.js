import Home from '../views/App-Home.vue'
import About from '../views/App-About.vue'
import Practices from '../views/practices/App-Practices.vue'
import PageNotFound from '../views/page-not-found/App-PageNotFound.vue'
import practicesRoutes from '../views/practices/practices-routes'

const routes = [
    {
        path: '',
        component: Home,
        name: 'home',
        titel: 'Statseite',
        icon: 'home'
    },
    {
        path: '/about',
        component: About,
        name: 'about',
        titel: 'Über uns',
        icon: 'error'
    },
    {
        path: '/contact',
        component: About,
        name: 'contact',
        titel: 'Kontakt',
        icon: 'mail'
    },
    {
        path: '/practices',
        component: Practices,
        children: practicesRoutes
    },
    {
        path: '/:pathMatch(.*)*',
        component: PageNotFound,
    },
]

export default routes