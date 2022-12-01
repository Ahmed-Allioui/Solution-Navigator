import TSHome from './TS-Home.vue'
import TSA1 from './TS-A1.vue'
import TSA2 from './TS-A2.vue'
import TSA3 from './TS-A3.vue'

const routes =
    [
        {
            path: '',
            component: TSHome,
            title: 'Übung',
            name: 'ts'
        },
        {
            path: '01',
            component: TSA1,
            title: 'Aufgabe 1',
            name: 'ts-1'
        },
        {
            path: '02',
            component: TSA2,
            title: 'Aufgabe 2',
            name: 'ts-2'
        },
        {
            path: '03',
            component: TSA3,
            title: 'Aufgabe 3',
            name: 'ts-3'
        }
]

export default routes