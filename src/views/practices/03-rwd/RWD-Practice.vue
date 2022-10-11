<template>
    <AppTask :tabs="routes"/>
</template>

<script>
import AppTask from '../../../components/task-component/App-Task.vue'
import routes from '../../../views/practices/03-rwd/rwd-routes'

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