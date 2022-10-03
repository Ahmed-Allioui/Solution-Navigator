<template>
  <div class="app">
    <div>
      <Sidebar />
    </div>
    <div class="body-container">
      <div>
        <header></header>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./components/App-Sidebar.vue";
</script>

<style lang="scss">
:root {
  --primary: #4ade80;
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
header {
  background-color: var(--dark-alt);
  padding: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.app {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  main {
    flex: 1 1 0;
    padding: 2rem;
    
  }

  main, header {
    @media (max-width: 768px) { // why 1024 ?
      padding-left: 6rem;
    }
  }
}

.app .body-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
