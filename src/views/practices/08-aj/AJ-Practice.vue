<template>
    <AppTask :tabs="routes"/>
</template>

<script>
import AppTask from '../../../components/task-component/App-Task.vue'
import routes from '../08-aj/aj-routes'

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