import CSSHome from './CSS-Home.vue'
import CSSA1 from './CSS-A1.vue'
import CSSA2 from './CSS-A2.vue'
import CSSA3 from './CSS-A3.vue'

const routes =
    [
        {
            path: '',
            component: CSSHome,
            title: 'Übung',
            name: 'css'
        },
        {
            path: '01',
            component: CSSA1,
            title: 'Aufgabe 1',
            name: 'css-1'
        },
        {
            path: '02',
            component: CSSA2,
            title: 'Aufgabe 2',
            name: 'css-2'
        },
        {
            path: '03',
            component: CSSA3,
            title: 'Aufgabe 3',
            name: 'css-3'
        }
]

export default routes