<template>
  <h1>SVG Grafik von Hand erstellen</h1>
  <p class="question">
    In dieser Aufgabe codieren wir eine HTML-Datei mit Inline SVG, um das
    folgenden Komponent anzulegen.
  </p>
  <p class="question">
    Es wird zudem eine CSS-Animation als Hover-Effekt hinzugefügt, sodass sich
    die Größe der SVG-Grafik verdoppelt, wenn man mit dem Cursor über die Grafik
    geht.
  </p>
  <h3>Ergebnis:</h3>
  <svg viewBox="0 0 200 50">
    <defs>
      <line
        id="line"
        x1="3"
        y1="7"
        x2="22"
        y2="7"
        stroke="white"
        stroke-width="0.3"
      ></line>
    </defs>
    <g class="container">
      <rect width="25" height="25" fill="rgba(202,123,141,255)" />
      <text class="text" x="3" y="6" >Use</text>
      <use href="#line" />
      <text class="text" x="3" y="13" >The</text>
      <use href="#line" y="7" />
      <text class="text" x="3" y="20" >Platform</text>
      <use href="#line" y="14" />
    </g>
  </svg>
</template>

<script>
</script>
  
<style lang="scss" scoped>
.container:hover {
  transform:scale(2)
}

.text {
  font-size: 0.3em;
  fill:white;
}
</style>