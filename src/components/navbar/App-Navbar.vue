<template>
  <div class="container">
    <div class="menu" v-for="tab in tabs" :key="tab.path">
      <NavbarButton v-if="tab.name" :text="tab.titel" :to="{ name: tab.name }" :icon="tab.icon" />
    </div>
  </div>
</template>

<script>
import NavbarButton from "./App-Navbar-Button.vue";
export default {
    props: {
        tabs: []
  },
  components: {
    NavbarButton,
  }
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: row;
  background-color: var(--dark-alt);
  //padding: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  .menu {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    //padding: 8px; // todo: necessary ?
  }

  @media (max-width: 768px) {
    margin-left: calc(var(--icon-width) + 2rem);
  }
}
</style>