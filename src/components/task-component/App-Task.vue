<template>
  <div class="task-container">
    <div class="task-navbar-container">
      <div class="menu" v-for="tab in tabs" :key="tab.path">
        <NavbarButton :text="tab.title" :to="{ name: tab.name }"/>
      </div>
    </div>
    <div class="task-answer-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavbarButton from './App-Task-Navbar-Button.vue'
export default {
  props: {
    tabs: {
        type: Array
    },
  },
  components: {
    NavbarButton
  }
};
</script>

<style lang="scss" scoped>
$phone-width: "700px";
.task-container {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  row-gap: 20px;

  .task-navbar-container, .task-answer-container {
    display: flex;
    flex-direction: row;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 0% 3%;
  }

  .task-navbar-container {
    background-color: var(--dark-alt);
    justify-content: center;
    
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
    width: auto;
  }
}

</style>

<style>
.question {
  font-weight: 580;
}

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

th {
  padding: 0.7rem 1.4rem 0.7rem 1.4rem;
}
td {
  padding: 0.5rem 1rem 0.5rem 1rem;
}
</style>