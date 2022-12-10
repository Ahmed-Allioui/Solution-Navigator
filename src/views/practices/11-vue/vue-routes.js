import VueHome from './Vue-Home.vue'
import VueA1 from './Vue-A1.vue'
import VueA2 from './Vue-A2.vue'
import VueA3 from './Vue-A3.vue'

const routes =
    [
        {
            path: '',
            component: VueHome,
            title: 'Übung',
            name: 'vue'
        },
        {
            path: '01',
            component: VueA1,
            title: 'Aufgabe 1',
            name: 'vue-1'
        },
        {
            path: '02',
            component: VueA2,
            title: 'Aufgabe 2',
            name: 'vue-2'
        },
        {
            path: '03',
            component: VueA3,
            title: 'Aufgabe 3',
            name: 'vue-3'
        }
]

export default routes