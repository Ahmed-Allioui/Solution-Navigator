<template>
    <routerLink class="button" :to="to">
        <span class="text">{{text}}</span>
    </routerLink>
</template>

<script>
    export default {
        props: {
            to: {
                type: String,
                default: '/notfoundpage'
            },
            text: {
                type: String,
                default: 'click me'
            }
        }
    };
</script>

<style lang="scss">
.button {
    padding: 0.7rem 1.5rem;
    text-decoration: none;

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