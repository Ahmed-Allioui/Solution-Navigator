<template>
  <h1>Vue.js WWW-Navigator</h1>
  <h3>Aufgabe</h3>
  <p>Schreiben Sie Ihren WWW-Navigator aus Aufgabe 8.3 als SPA in Vue.js. Dokumentieren Sie Ihren Entscheidungsprozess:
    In welche Komponenten wollen Sie Ihre App zerlegen? Wie soll das State Management implementiert werden?</p>
  <h3>Lösung</h3>
  <p>Diese Webseite wurde bereits mit Vue.js entwickelt. sie entsteht hauptsächlich aus:
  </p>
  <ul>
    <li><strong>Sidebar:</strong> enthält alle 13 Übungen, die in diesem Semeter zu erledigen sind.</li>
    <li><strong>Navbar:</strong> enthält "Home", "Über uns" und "Kontakt".</li>
    <li><strong>Task component:</strong> ist eine Standard-Komponente, um Aufgaben und Lösungen zu zeigen. Diese
      Komponent entsteht wiederum aus:</li>
      <ul>
        <li><strong>Task Navbar:</strong> enthält die Liste aller Aufgaben der entsprechenden Übung</li>
        <li><strong>Task answers component:</strong> enthält die Aufgabe und ihre entsprechende Lösung</li>
      </ul>
  </ul>
</template>

<script>

</script>

<style lang="scss" scoped>

</style>