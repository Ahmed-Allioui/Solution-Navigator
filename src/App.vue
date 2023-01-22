<template>
  <div class="app">
    <div class="sidebar-container">
      <Sidebar :tabs="practicesRoutes" />
    </div>
    <div class="body-container">
      <div>
        <Navbar :tabs="routes" />
      </div>
      <div class="router-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./components/atoms/App-Sidebar.vue";
import Navbar from "./components/molecules/App-Navbar.vue";
import practicesRoutes from "./views/practices/practices-routes";
import routes from "./router/routes";
</script>

<style lang="scss">

// defining global style
:root {
  --primary: #4a8fde;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --error: #ff0000;

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

img {
  width: 100%;
  height: auto;
}

li, p, h3, h4, h5 {
  padding-bottom: 1rem;
}

h3, h4, h5 {
  padding-bottom: 2rem;
}

h2, h1 {
  padding-bottom: 3rem;
}

ol, ul {
  padding-left: 2rem;
}

button, input, select, .border, textarea {
  padding: 8px 12px;
  margin: 8px 3px;
  border-radius: 5px;
  font-size: medium;
}

.border {
  border: 1px solid black;
}

button.primary {
  background: var(--dark-alt);
  color: white;
  border: 1px solid var(--dark-alt);
}

button.light {
  background: var(--primary);
  color: black;
  border: 1px solid var(--primary);
}

.error {
  color: var(--error);
}

button.error {
  background: var(--error);
  color: white;
  border: 1px solid var(--error);
}

.app {
  display: flex;
  flex-direction: row;

  .sidebar-container {
    display: flex;
    flex-direction: row;
  }

  .body-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    @media (max-width: 768px) {
      margin-left: calc(var(--icon-width) + 2rem);
    }
  }
}

.router-container{
  height: 100%;
}
</style>
