import Home from '../views/home-vue/App-Home.vue'
import About from '../views/about-vue/App-About.vue'
import Contact from '../views/contact-vue/App-Contact.vue'
import Practices from '../views/practices/App-Practices.vue'
import PageNotFound from '../views/page-not-found/App-PageNotFound.vue'
import practicesRoutes from '../views/practices/practices-routes.js'

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
        component: Contact,
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