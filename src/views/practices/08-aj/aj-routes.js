import AJHome from './AJ-Home.vue'
import AJA1 from './AJ-A1.vue'
import AJA2 from './AJ-A2.vue'
import AJA3 from './AJ-A3.vue'

const routes =
    [
        {
            path: '',
            component: AJHome,
            title: 'Übung',
            name: 'aj'
        },
        {
            path: '01',
            component: AJA1,
            title: 'Aufgabe 1',
            name: 'aj-1'
        },
        {
            path: '02',
            component: AJA2,
            title: 'Aufgabe 2',
            name: 'aj-2'
        },
        {
            path: '03',
            component: AJA3,
            title: 'Aufgabe 3',
            name: 'aj-3'
        }
]

export default routes