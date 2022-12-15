import PHPHome from './PHP-Home.vue'
import PHPA1 from './PHP-A1.vue'
import PHPA2 from './PHP-A2.vue'

const routes =
    [
        {
            path: '',
            component: PHPHome,
            title: 'Übung',
            name: 'php'
        },
        {
            path: '01',
            component: PHPA1,
            title: 'Aufgabe 1',
            name: 'php-1'
        },
        {
            path: '02',
            component: PHPA2,
            title: 'Aufgabe 2',
            name: 'php-2'
        }
]

export default routes