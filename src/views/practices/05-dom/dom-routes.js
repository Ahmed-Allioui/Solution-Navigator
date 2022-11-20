import DOMHome from './DOM-Home.vue'
import DOMA1 from './DOM-A1.vue'
import DOMA2 from './DOM-A2.vue'
import DOMA3 from './DOM-A3.vue'

const routes =
    [
        {
            path: '',
            component: DOMHome,
            title: 'Übung',
            name: 'dom'
        },
        {
            path: '01',
            component: DOMA1,
            title: 'Aufgabe 1',
            name: 'dom-1'
        },
        {
            path: '02',
            component: DOMA2,
            title: 'Aufgabe 2',
            name: 'dom-2'
        },
        {
            path: '03',
            component: DOMA3,
            title: 'Aufgabe 3',
            name: 'dom-3'
        }
]

export default routes