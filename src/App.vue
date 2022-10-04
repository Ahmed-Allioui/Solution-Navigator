<template>
  <div class="app">
    <div>
      <Sidebar :tabs="practicesRoutes" />
    </div>
    <div class="body-container">
      <div>
        <Navbar :tabs="routes" />
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./components/sidebar/App-Sidebar.vue";
import Navbar from "./components/navbar/App-Navbar.vue";
import practicesRoutes from "./views/practices/router";
import routes from "./router/routes";
</script>

<style lang="scss">
:root {
  --primary: #4a8fde;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;

  --sidebar-width: 300px; // max width
  --icon-width: 2rem;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}

body {
  background: var(--light);
}
button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
.app {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .body-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    @media (max-width: 768px) {
      margin-left: calc(var(--icon-width) + 2rem);
    }
  }
}
</style>
