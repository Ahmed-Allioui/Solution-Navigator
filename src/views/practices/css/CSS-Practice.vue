<template>
    <AppTask :tabs="cssRouter"/>
</template>

<script>
import AppTask from '../../../components/task-component/App-Task.vue'
import cssRouter from '../../../views/practices/css/css-router'
export default {
    data() {
        return {
            cssRouter: cssRouter
        }
    },
    components: {
        AppTask
    }
};
</script>