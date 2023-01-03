<template>
  <main class="home-page">
    <StandardPageComponent title="Herzlich willkommen auf unserer Website">
      <div class="text-container"><strong>Solution Navigator</strong> ist eine Homepage, die im Rahmen der
        Veranstaltung <strong>Einführung in
          Web Engineering</strong> erstellt wurde.
      </div>
      <div class="text-container">Diese Webseite wurde während des <strong>Wintersemesters 22/23</strong> im Rahmen
        der wöchentlichen Projektaufgaben gepflegt.
      </div>
      <div class="github-logo-container"><a href="https://github.com/Ahmed-Allioui/Solution-Navigator"><img
            src="./github-logo.jpeg" alt="Github"></a> </div>
      <div class="homepage-container">

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

.github-logo-container {
  img {
    width: 100px;
  }
}
</style>