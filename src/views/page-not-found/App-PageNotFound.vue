<template>
  <div class="main">
    <div class="container">
      <img src="./page-not-found.png" alt="404" />
      <p>Sorry, Seite nicht gefunden!</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.main {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 10%;
  z-index: -1;
  display: flex;
  justify-content: center;
  margin: auto;
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      font-size: xx-small;
      margin-left: 2rem;
      margin-right: 1rem;
    }

    p {
      font-size: 1.3rem;
    }
  }
}
</style>