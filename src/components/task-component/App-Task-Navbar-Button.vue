<template>
    <routerLink class="button" :to="to">
        <span class="text">{{ text }}</span>
    </routerLink>
</template>

<script>
    export default {
        props: {
            to: { type: String, default: '/page-not-found' },
            text: { type: String, default: 'click me' },
        }
    };
</script>

<style lang="scss" scoped>

.button {
    padding: 0.7rem 1.5vw;
    text-decoration: none;
    text-align: center;

    .text {
    color: var(--light);
    }

    &:hover, &.router-link-exact-active {
        background-color: var(--dark);
        border-bottom: 5px solid var(--primary);

        .text {
            color: var(--primary);
        }
    }
}
</style>