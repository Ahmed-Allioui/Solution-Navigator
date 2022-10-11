import HTTPHome from './HTTP-Home.vue'
import HTTPA1 from './HTTP-A1.vue'
import HTTPA2 from './HTTP-A2.vue'
import HTTPA3 from './HTTP-A3.vue'
import HTTPA4 from './HTTP-A4.vue'

const routes =
    [
        {
            path: '',
            component: HTTPHome,
            title: 'Übung',
            name: 'http'
        },
        {
            path: '01',
            component: HTTPA1,
            title: 'Aufgabe 1',
            name: 'http-1'
        },
        {
            path: '02',
            component: HTTPA2,
            title: 'Aufgabe 2',
            name: 'http-2'
        },
        {
            path: '03',
            component: HTTPA3,
            title: 'Aufgabe 3',
            name: 'http-3'
        },
        {
            path: '04',
            component: HTTPA4,
            title: 'Aufgabe 4',
            name: 'http-4'
        }
]

export default routes