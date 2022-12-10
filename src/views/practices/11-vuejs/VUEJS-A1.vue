<template>
  <h1>Komponente in Vue.js</h1>
  <p>In dieser Aufgaben, wurde eine Vue.js Single File Component mit einem TextEingabefeld und 3 Ausgabefeldern
    geschrieben, in denen man während des
    Tippens sehen kann, wie viele Buchstaben, wie viele
    Leerzeichen und wie viele Worte man in das Text-Eingabefeld
    bereits eingegeben hat. Diese Komponente wurde in dieser Webseite zweimal eingebettet und hier kann man checken,
    dass die beiden Komponenten unabhängig voneinander sind.</p>
  <p class="question">Lösung</p>
  <br>
  <div class="main-container">
    <div v-for="i in [0, 1]" :key="i" class="text-container">
      <TextCounterVue />
    </div>
  </div>

</template>

<script setup>
import TextCounterVue from './Text-Counter.vue';

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