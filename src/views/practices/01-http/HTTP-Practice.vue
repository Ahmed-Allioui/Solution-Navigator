<template>
    <AppTask :tabs="routes"/>
</template>

<script setup>
import AppTask from '../../../components/task-component/App-Task.vue'
import routes from '../../../views/practices/01-http/http-routes'
</script>