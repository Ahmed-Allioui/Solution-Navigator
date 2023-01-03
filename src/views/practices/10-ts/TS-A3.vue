<template>
  <h1>TypeScript auf Deno</h1>
  <h3>Aufgabe</h3>
  <p>Schreiben Sie in TypeScript möglichst umfangreich statisch typisiert ein auf Deno ablauffähiges Programm server.ts,
    das Sie mit deno run --allow-net server.ts starten können, das die COVID-19-Fallzahlen in Deutschland einliest,
    Minimum, Maximum, Durchschnitt und Summe berechnet und diese auf einer Webseite ausgibt.</p>
  <h3>Lösung</h3>
  <div class="container">
    <div class="text-container"><strong>Server.ts</strong> ist ein auf Deno ablauffähiges Programm, dass mit deno
      run --allow-net server.ts gestartet werden kann, das die COVID-19-
      Fallzahlen in Deutschland einliest, Minimum, Maximum, Durchschnitt
      und Summe berechnet und diese auf dem Browser zeigt. Dazu muss der Port <strong>8000</strong> im Browser
      aufgerufen werden.</div>
    <div class="img-container">
      <div><strong>Server.ts</strong></div>
      <img src="./code.jpeg" alt="Code">
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;

  .img-container {
    max-width: 600px;

    img {
      border-radius: 5px;
    }
  }
}
</style>