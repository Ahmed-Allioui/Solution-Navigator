import HTTP from './01-http-uri-html/HTTP-Practice.vue'
import CSS from './02-css/CSS-Practice.vue'
import RWD from './03-rwd/RWD-Practice.vue'
import httpRoutes from './01-http-uri-html/http-routes'
import cssRoutes from './02-css/css-routes'
import rwdRoutes from './03-rwd/rwd-routes'

const routes =
    [
        {
            path: 'http',
            component: HTTP,
            textIcon: '01',
            title: 'HTTP, URI und HTML',
            home_name: 'http',
            children: httpRoutes
        },
        {
            path: 'css',
            component: CSS,
            textIcon: '02',
            title: 'Cascading Style Sheets (CSS)',
            home_name: 'css',
            children: cssRoutes
        },
        {
            path: 'rwd',
            component: RWD,
            textIcon: '03',
            title: 'Responsive Web Design (RWD)',
            home_name: 'rwd',
            children: rwdRoutes
        }
]

export default routes