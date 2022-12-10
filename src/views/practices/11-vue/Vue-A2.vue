<template>
  <h1>Menü-Komponente</h1>
  <p>In dieser Aufgabe wurde eine flexible Vue.js Single File Component für
    Menüs geschrieben. Dann wurde die Komponente in dieser Webseite zweimal angewandt,
    einmal horizontal, das andere Mal vertikal.</p>
  <p class="question">Lösung:</p>
  <p>Diese Komponente ist standardmäßig horizontal. Also wenn ein vertikaler
    Menu benötigt wird, soll nur den Flag <strong>isVertical</strong> auf <strong>True</strong> gesetzt werden.</p>
  <br>
  <div>
    <MenuVue />
  </div>
  <br>
  <div>
    <MenuVue isVertical="true" />
  </div>

</template>

<script setup>
import MenuVue from './Vue-A2-Menu.vue';
</script>
  
<style lang="scss" scoped>

</style>