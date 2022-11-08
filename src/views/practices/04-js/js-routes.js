import JSHome from './JS-Home.vue'
import JSA1 from './JS-A1.vue'
import JSA2 from './JS-A2.vue'
import JSA3 from './JS-A3.vue'
import JSA4 from './JS-A4.vue'

const routes =
    [
        {
            path: '',
            component: JSHome,
            title: 'Übung',
            name: 'js'
        },
        {
            path: '01',
            component: JSA1,
            title: 'Aufgabe 1',
            name: 'js-1'
        },
        {
            path: '02',
            component: JSA2,
            title: 'Aufgabe 2',
            name: 'js-2'
        },
        {
            path: '03',
            component: JSA3,
            title: 'Aufgabe 3',
            name: 'js-3'
        },
        {
            path: '04',
            component: JSA4,
            title: 'Aufgabe 4',
            name: 'js-4'
        }
]

export default routes