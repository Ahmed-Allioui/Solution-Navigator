import SVGHome from './SVG-Home.vue'
import SVGA1 from './SVG-A1.vue'
import SVGA2 from './SVG-A2.vue'
import SVGA3 from './SVG-A3.vue'

const routes =
    [
        {
            path: '',
            component: SVGHome,
            title: 'Übung',
            name: 'svg'
        },
        {
            path: '01',
            component: SVGA1,
            title: 'Aufgabe 1',
            name: 'svg-1'
        },
        {
            path: '02',
            component: SVGA2,
            title: 'Aufgabe 2',
            name: 'svg-2'
        },
        {
            path: '03',
            component: SVGA3,
            title: 'Aufgabe 3',
            name: 'svg-3'
        }
]

export default routes