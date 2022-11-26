import HTTP from './01-http/HTTP-Practice.vue'
import CSS from './02-css/CSS-Practice.vue'
import RWD from './03-rwd/RWD-Practice.vue'
import JS from './04-js/JS-Practice.vue'
import DOM from './05-dom/DOM-Practice.vue'
import ES from './06-es/ES-Practice.vue'

import httpRoutes from './01-http/http-routes'
import cssRoutes from './02-css/css-routes'
import rwdRoutes from './03-rwd/rwd-routes'
import jsRoutes from './04-js/js-routes'
import domRoutes from './05-dom/dom-routes'
import esRoutes from './06-es/es-routes'

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
        },
        {
            path: 'js',
            component: JS,
            textIcon: '04',
            title: 'JavaScript (JS)',
            home_name: 'js',
            children: jsRoutes
        },
        {
            path: 'dom',
            component: DOM,
            textIcon: '05',
            title: 'Document Object Model (DOM)',
            home_name: 'dom',
            children: domRoutes
        },
        {
            path: 'es',
            component: ES,
            textIcon: '06',
            title: 'ECMAScript (ES)',
            home_name: 'es',
            children: esRoutes
        }
]

export default routes