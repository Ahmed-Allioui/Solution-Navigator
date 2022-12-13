<template>
  <h1>Vue.js WWW-Navigator</h1>
  <img id="small-img" @click="onImageClick" src="./components.jpeg" alt="">
  <div id="myModal" class="modal">
    <div class="modal-content">
      <button class="close">&times;</button>
      <img src="./components.jpeg" id="modal-image" />
    </div>
  </div>

</template>

<script>
export default {
  methods: {
    onImageClick() {
      // Get the gallery box
      var smallImg = document.getElementById("small-img");

      // Get the modal image tag
      var modal = document.getElementById("myModal");

      //var modalImage = document.getElementById("modal-image");

      // When the user clicks the big picture, set the image and open the modal
      smallImg.onclick = function () {
        //var src = e.srcElement.src;
        modal.style.display = "block";
        //modalImage.src = src;
      };
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 40%;
}

/**
 */

.modal {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  padding-top: 50px;
  /* Location of the box */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}

.modal-content {
  margin: auto;
  text-align: center;
}

.modal-image {
  display: inline-block;
}
</style>