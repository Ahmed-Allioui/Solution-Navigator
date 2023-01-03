<template>
  <h1>Menü-Komponente</h1>
  <h3>Aufgabe</h3>
  <p>Schreiben Sie eine möglichst flexible Vue.js Single File Component für Menüs und wenden Sie diese in derselben
    Webseite zweimal an, einmal horizontal, das andere Mal vertikal.</p>
  <h3>Lösung</h3>
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