import ESHome from './ES-Home.vue'
import ESA1 from './ES-A1.vue'
import ESA2 from './ES-A2.vue'
import ESA3 from './ES-A3.vue'
import ESA4 from './ES-A4.vue'
import ESA5 from './ES-A5.vue'

const routes =
    [
        {
            path: '',
            component: ESHome,
            title: 'Übung',
            name: 'es'
        },
        {
            path: '01',
            component: ESA1,
            title: 'Aufgabe 1',
            name: 'es-1'
        },
        {
            path: '02',
            component: ESA2,
            title: 'Aufgabe 2',
            name: 'es-2'
        },
        {
            path: '03',
            component: ESA3,
            title: 'Aufgabe 3',
            name: 'es-3'
        },
        {
            path: '04',
            component: ESA4,
            title: 'Aufgabe 4',
            name: 'es-4'
        },
        {
            path: '05',
            component: ESA5,
            title: 'Aufgabe 5',
            name: 'es-5'
        }
]

export default routes