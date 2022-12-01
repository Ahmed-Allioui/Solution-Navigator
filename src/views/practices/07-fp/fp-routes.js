import FPHome from './FP-Home.vue'
import FPA1 from './FP-A1.vue'
import FPA2 from './FP-A2.vue'

const routes =
    [
        {
            path: '',
            component: FPHome,
            title: 'Übung',
            name: 'fp'
        },
        {
            path: '01',
            component: FPA1,
            title: 'Aufgabe 1',
            name: 'fp-1'
        },
        {
            path: '02',
            component: FPA2,
            title: 'Aufgabe 2',
            name: 'fp-2'
        }
]

export default routes