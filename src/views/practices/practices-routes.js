import CSS from './css/CSS-Practice.vue'
import cssRouter from './css/css-routes'

const routes =
    [
        {
            path: 'http',
            component: CSS,
            textIcon: '01',
            title: 'HTTP',
            name: 'http',
            children: cssRouter
        },
        {
            path: 'css',
            component: CSS,
            textIcon: '01',
            title: 'CSS',
            name: 'css',
            children: cssRouter
        }
]

export default routes