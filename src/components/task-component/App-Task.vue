<template>
  <div class="task-container">
    <div class="container task-navbar-container">
      <div class="menu" v-for="tab in tabs" :key="tab.path">
        <NavbarButton :text="tab.title" :to="{ name: tab.name }"/>
      </div>
    </div>
    <div class="container task-answer-container">This field should be filled with answers.</div>
  </div>
</template>

<script>
import NavbarButton from './App-Task-Navbar-Button.vue'
export default {
  props: {
    tabs: []
  },
  components: {
    NavbarButton
  }
};
</script>

<style lang="scss" scoped>
.task-container {
  display: flex;
  flex-direction: column;

  .container {
    margin: 2% 3% 0% 3%;
    background-color: red;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .menu {
      display: flex;
      flex-direction: row;
      justify-content: center;
      //padding: 8px; // todo: necessary ?
    }

    @media (max-width: 768px) { // why 1024 ?
      margin-left: calc(3% + var(--icon-width) + 2rem);
    }
  }

  .task-navbar-container {
    background-color: var(--dark-alt);
  }

  .task-answer-container {
    background-color: var(--light);
    padding: 2rem;
  }
}

</style>