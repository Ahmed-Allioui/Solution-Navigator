<template>
    <AppTask :tabs="routes"/>
</template>

<script>
import AppTask from '../../../components/task-component/App-Task.vue'
import routes from '../../../views/practices/css-styling/css-routes'

export default {
    data() {
        return {
            routes: routes
        }
    },
    components: {
        AppTask
    }
};
</script>