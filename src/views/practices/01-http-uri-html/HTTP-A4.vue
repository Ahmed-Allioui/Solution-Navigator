<template>
  <h1>HTML Wireframe</h1>
  <p class="question">Gegeben ist folgendes HTML-Wireframe:</p>
  <img src="./picture-1.4.png" alt="" class="picture" />
  <p class="question">
    Mit welchem HTML-Code (ohne CSS, nur mit HTML-Tags) kann man diesen
    Wireframe exakt nachbilden? Die beiden Bilder finden Sie z.B. unter
    <a href="https://kaul.inf.h-brs.de/ccm/we/ws22/resources/img/assets/tbl.jpg"
      >TBL</a
    >
    und
    <a
      href="https://kaul.inf.h-brs.de/ccm/we/ws22/resources/img/assets/eich.jpg"
      >Eich</a
    >.
  </p>

  <div class="rawHTML">
    <h3>Code</h3>
    <img src="./code.jpg" alt="Code">
    <br>
    <h3>Result</h3>
    <img src="./result.jpg" alt="Result">
  </div>
</template>

<style lang="scss" scoped>
.picture {
  max-width: 500px;
  width: 100%;
  height: auto;
  align-self: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.rawHTML {
  display: flex;
  flex-direction: column;

  
  img {
    border: 1px solid black;
    align-self: center;
    border-radius: 15px;
    max-width: 500px;
  }
}
</style>