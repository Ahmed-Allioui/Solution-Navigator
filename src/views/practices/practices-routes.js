import CSS from './css/CSS-Practice.vue'
import HTTP from './01-http-uri-html/HTTP-Practice.vue'
import cssRoutes from './css/css-routes'
import httpRoutes from './01-http-uri-html/http-routes'

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
            title: 'CSS',
            home_name: 'css',
            children: cssRoutes
        }
]

export default routes