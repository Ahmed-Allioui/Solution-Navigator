<template>
    <div id="menu-container">
        <button class="primary" v-for="(item, index) in items" :key="index">
            {{ item }}
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: ['Home', 'Über uns', 'Kontakt']
        }
    }, 
    props: {
        isVertical: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        if(this.isVertical) document.getElementById('menu-container').style.flexDirection = 'column'  	
    }
}
</script>

<style lang="scss" scoped>
#menu-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 0.5vw;
    background-color: var(--primary);
    width: fit-content;

    button {
        padding-left: 2vw;
        padding-right: 2vw;
    }
}
</style>