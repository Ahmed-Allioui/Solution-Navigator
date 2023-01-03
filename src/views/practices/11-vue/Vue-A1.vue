<template>
  <h1>Komponente in Vue.js</h1>
  <h3>Aufgabe</h3>
  <p>Schreiben Sie eine Vue.js Single File Component mit einem TextEingabefeld und 3 Ausgabefeldern, in denen man
    während des Tippens sehen kann, (a) wie viele Buchstaben (b) wie viele Leerzeichen und (c) wie viele Worte man in
    das Text-Eingabefeld bereits eingegeben hat. Betten Sie Ihre Komponente in eine Webseite zweimal ein und testen Sie,
    ob beide Komponenten unabhängig voneinander sind.</p>
  <h3>Lösung</h3>
  <br>
  <div class="main-container">
    <div v-for="i in [0, 1]" :key="i" class="text-container">
      <TextCounterVue />
    </div>
  </div>

</template>

<script setup>
import TextCounterVue from './Vue-A1-Text-Counter.vue';
</script>
  
<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  gap: 50px;

  .text-container {
    width: 100%;
    max-width: 500px;
  }
}
</style>