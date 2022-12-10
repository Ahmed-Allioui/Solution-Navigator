import VUEJSHome from './VUEJS-Home.vue'
import VUEJSA1 from './VUEJS-A1.vue'
import VUEJSA2 from './VUEJS-A2.vue'
import VUEJSA3 from './VUEJS-A3.vue'

const routes =
    [
        {
            path: '',
            component: VUEJSHome,
            title: 'Übung',
            name: 'vuejs'
        },
        {
            path: '01',
            component: VUEJSA1,
            title: 'Aufgabe 1',
            name: 'vuejs-1'
        },
        {
            path: '02',
            component: VUEJSA2,
            title: 'Aufgabe 2',
            name: 'vuejs-2'
        },
        {
            path: '03',
            component: VUEJSA3,
            title: 'Aufgabe 3',
            name: 'vuejs-3'
        }
]

export default routes