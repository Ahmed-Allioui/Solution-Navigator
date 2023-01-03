<template>
    <div class="container">
        <div>
            <div class="title">Solution Navigator</div>
            <div class="bar"></div>
        </div>
        <div class="shadowed-container">
            <div class="img-container"><img src="../../assets/logo-big.png" alt="Logo"></div>
            <div class="slot-container">
                <div id="title">{{ title }}</div>
                <slot></slot>
            </div>
        </div>
    </div>

</template>
  
<script>

export default {
    props: {
        title: {
            type: String,
            default: ""
        }
    }
};
</script>
  
<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 3%;


    .title {
        font-size: 40px;
        font-weight: normal;
    }

    .bar {
        margin: 15px 10px;
        height: 10px;
        width: 300px;
        background-color: var(--dark-alt);
    }
}

.shadowed-container {
    background-color: var(--light);
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 10px;
    align-self: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
        "imgContainer"
        "slotContainer";

    @media screen and (min-width: 700px) {
        grid-template-columns: 1fr 5fr;
        grid-template-rows: 1fr;
        grid-template-areas:
            "imgContainer slotContainer";
    }

    .slot-container {
        grid-area: slotContainer;
        height: 100%;
        text-align: center;
        padding: calc(1rem + 1vw);
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: calc(20px + 1vw);

        #title {
            font-size: calc(30px + 1vw);
            font-weight: normal;
            color: var(--dark-alt);
        }
    }

    .img-container {
        grid-area: imgContainer;
        display: block;
        margin-left: auto;
        margin-right: auto;

        img {
            width: 250px;
        }
    }

}
</style>