<template>
    <routerLink class="button" :to="to">
        <span class="material-icons">{{ icon }}</span>
        <span class="text">{{ text }}</span>
    </routerLink>
</template>

<script>
    export default {
        props: {
            to: { type: String, default: '/pagenotfound' },
            text: { type: String, default: 'click me' },
            icon: { type: String, default: 'menu' }
        }
    };
</script>

<style lang="scss" scoped>

.button {
    display: flex;
    align-items: center;
    padding: 0.7rem 1.5rem;
    text-decoration: none;
    
    .text {
        padding-left: 5px;
    }

    .text, .material-icons {
        color: var(--light);
    }

    .material-icons {
        font-size: 2rem;
    }

    &:hover, &.router-link-exact-active {
        background-color: var(--dark);

        .text, .material-icons {
            color: var(--primary);
        }
    }
}
</style>