<template>
  <div class="task-container">
    <div class="container task-navbar-container">
      <div class="menu" v-for="tab in tabs" :key="tab.path">
        <NavbarButton :text="tab.title" :to="{ name: tab.name }"/>
      </div>
    </div>
    <div class="container task-answer-container">
      <router-view></router-view>
    </div>
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

  .task-navbar-container, .task-answer-container {
    display: flex;
    flex-direction: row;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .task-navbar-container {
    background-color: var(--dark-alt);
    justify-content: center;
    margin: 2% 3% 1% 3%;

    .menu {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }

  .task-answer-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--light);
    padding: 2rem;
    margin: 1% 3% 2% 3%;
  }
}

</style>

<style>
.question {
  font-weight: 580;
}
</style>