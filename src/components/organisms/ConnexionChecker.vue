<template>
  <div class="container">
    <div v-if="!responseArrived">Verbindung zum Server wird geprüft...</div>
    <div v-else>
      <ResponseIcon :succeed="succeed" :errorMsg="errorMsg" :successMsg="successMsg" />
    </div>
  </div>

</template>
  
<script>

import ResponseIcon from '../molecules/ResponseIcon.vue'

export default {
  data() {
    return {
      responseArrived: false,
      succeed: 0,
      errorMsg: "Verbindung zum Server fehlgeschlagen! Prüfen Sie bitte ob der Server gestarted wurde (Mehr dazu s. Readme)",
      successMsg: 'Verbindung zum Server sichergestellt'
    }
  },
  mounted() {
    fetch('http://localhost:8000', { method: 'GET' })
      .then(() => {
        this.responseArrived = true;
        this.succeed = true
      })
      .catch(() => {
        this.responseArrived = true;
        this.succeed = false;
      });

  },
  components: {
    ResponseIcon
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.icon {
  width: 2em;
  height: 2em;
  margin-right: 8px;
}

.icon-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.success {
  color: green;
}

.error {
  color: red;
}
</style>