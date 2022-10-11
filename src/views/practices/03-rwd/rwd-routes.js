import RWDHome from './RWD-Home.vue'
import RWDA1 from './RWD-A1.vue'
import RWDA2 from './RWD-A2.vue'
import RWDA3 from './RWD-A3.vue'

const routes =
    [
        {
            path: '',
            component: RWDHome,
            title: 'Übung',
            name: 'rwd'
        },
        {
            path: '01',
            component: RWDA1,
            title: 'Aufgabe 1',
            name: 'rwd-1'
        },
        {
            path: '02',
            component: RWDA2,
            title: 'Aufgabe 2',
            name: 'rwd-2'
        },
        {
            path: '03',
            component: RWDA3,
            title: 'Aufgabe 3',
            name: 'rwd-3'
        }
]

export default routes