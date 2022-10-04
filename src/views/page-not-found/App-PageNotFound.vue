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
    padding: 0%;
    display: flex;
    justify-content: center;
    margin-top: 15%;
  .container {
    
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        font-size:xx-small;
        padding-right: 2rem;
    }

    p {
        font-size: 1.5rem;
    }
  }
}
</style>