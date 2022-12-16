import WASHome from './WAS-Home.vue'
import WASA1 from './WAS-A1.vue'
import WASA2 from './WAS-A2.vue'
import WASA3 from './WAS-A3.vue'
import WASA4 from './WAS-A4.vue'

const routes =
    [
        {
            path: '',
            component: WASHome,
            title: 'Übung',
            name: 'was'
        },
        {
            path: '01',
            component: WASA1,
            title: 'Aufgabe 1',
            name: 'was-1'
        },
        {
            path: '02',
            component: WASA2,
            title: 'Aufgabe 2',
            name: 'was-2'
        },
        {
            path: '03',
            component: WASA3,
            title: 'Aufgabe 3',
            name: 'was-3'
        },
        {
            path: '04',
            component: WASA4,
            title: 'Aufgabe 4',
            name: 'was-4'
        }
]

export default routes