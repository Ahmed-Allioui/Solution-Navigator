<template>
  <aside :class="`${this.is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <img src="../../assets/logo.png" alt="Vue" />
      <div class="titel-container">
        <div class="titel">SOLUTION</div>
        <div class="titel">NAVIGATOR</div>
      </div>
    </div>
    <div class="menu-toggle-wrap">
      <div class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </div>
    </div>
    <h3>Übungen</h3>
    <div class="menu" v-for="tab in tabs" :key="tab.path">
      <routerLink class="button" :to="{ name: tab.home_name }">
        <span class="text-icons">{{ tab.textIcon }}</span>
        <span class="text" v-show="is_expanded === true">{{ tab.title }}</span>
      </routerLink>
    </div>
  </aside>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      is_expanded: ref(localStorage.getItem("is-expanded") === "true").value,
    };
  },
  props: {
    tabs: {
        type: Array
    },
  },
  methods: {
    ToggleMenu() {
      this.is_expanded = !this.is_expanded;
      localStorage.setItem("is-expanded", this.is_expanded);
    },
  },
};
</script>

<style lang="scss" scoped>
$transition-speed: 0.2s;
$ipad-width: 768px;

aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + var(--icon-width));
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  background-color: var(--dark);
  color: var(--light);
  transition: var($transition-speed) ease-out;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    img {
      width: var(--icon-width);
    }

    .titel-container {
      display: flex;
      flex-direction: column;
      padding-left: 0.8rem;

      .titel {
        padding-left: 1rem;
        font-size: 1rem;
        text-shadow: 2px 2px 8px var(--light);
        transition: var($transition-speed) ease-out;
      }
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: var($transition-speed) ease-out;

    .menu-toggle {
      transition: var($transition-speed) ease-out;

      .text-icons {
        font-size: 2rem;
        color: var(--light);
        transition: var($transition-speed) ease-out;
      }

      &:hover {
        .text-icons {
          color: var(--primary);
          transform: translateX(0.1rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: 0.3s ease-out;
  }

  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      padding: 0.5rem 1rem;
      transition: var($transition-speed) ease-out;

      .text-icons {
        font-size: 1.1rem;
        font-weight: bold;
        color: var(--light);
        transition: var($transition-speed) ease-out;
      }

      .text {
        color: var(--light);
        transition: var($transition-speed) ease-out;
      }

      &:hover,
      &.router-link-active {
        background-color: var(--dark-alt);

        .text-icons,
        .text {
          color: var(--primary);
        }
      }

      &.router-link-active {
        border: 0;
        border-right: 5px solid var(--primary);
      }
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);
    .menu-toggle-wrap {
      top: -3rem;
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }
    h3,
    .button .text {
      opacity: 1;
    }

    .button {
      .text-icons {
        margin-right: 1rem;
      }
    }
  }

  @media (max-width: $ipad-width) {
    position: fixed;
    z-index: 99;
  }
}
</style>