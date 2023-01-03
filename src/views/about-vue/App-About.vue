<template>
  <main class="about-page">
    <StandardPageComponent title="Wer sind wir ?">
      <div class="text-container">Dieses Projekt wurde im Rahmen der
        Veranstaltung <strong>Einführung in
          Web Engineering</strong> in der <strong>Hochschule Bonn-Rhein-Sieg</strong> entwickelt.
      </div>
      <div class="text-container">
        <strong>André Kless:</strong> M.Sc. Lehrkraft für
        besondere Aufgaben im Fachbereich Informatik in der Hochschule Bonn-Rhein-Sieg,
        Grantham-Allee 20, 53757 Sankt Augustin.
      </div>
      <div class="text-container">
        <strong>Ahmed Allioui:</strong> Bachelorstudienrender im Fachbereich Informatik an der Hochschule Bonn-Rhein-Sieg,
        Grantham-Allee 20, 53757 Sankt Augustin.
      </div>
    </StandardPageComponent>
  </main>
</template>

<script setup>
import StandardPageComponent from '@/components/atoms/StandardPageComponent.vue';
</script>

<style lang="scss" scoped>
.text-container {
  font-size: calc(15px + 0.2vw);
}
</style>