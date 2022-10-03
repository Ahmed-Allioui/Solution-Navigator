<template>
  <div class="task-container">
    <div class="container task-navbar-container">
      <div class="menu">
        <NavbarButton text="Home" to="/"/>
        <NavbarButton text="About" to="/about"/>
        <NavbarButton text="Team" to="/team"/>
        <NavbarButton text="Contact us" to="/contact"/>
      </div>
    </div>
    <div class="container task-answer-container">This field should be filled with answers.</div>
  </div>
</template>

<script>
import NavbarButton from '../components/App-Navbar-Button.vue'
export default {
  components: {
    NavbarButton
  }
};
</script>

<style lang="scss">
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