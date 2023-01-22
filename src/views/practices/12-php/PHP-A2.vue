<template>
  <h1>Login mit PHP</h1>
  <p>In dieser Aufgabe wurde eine sichere PHP-Lösung für Login geschrieben, das die
    persistierten Registrierungsdaten aus der letzten Aufgabe nutzt. Dazu wird es ersmal gecheckt, ob der Verbindung zum Server
    sichergestellt werden kann</p>
  <ConnexionChecker />
  <div class="form-container">
    <h3 class="titel">Login</h3>
    <form id="login-form">
      <div>
        <label>Benutzername: </label>
        <input type="text" name="username">
      </div>
      <div>
        <label>Passwort: </label>
        <input type="text" name="password">
      </div>
      <div>
        <button class="primary">Login</button>
      </div>
      <div v-if="responseArrived">
        <ReponseIcon :successMsg="loginResponseMsg" :errorMsg="loginResponseMsg" :succeed="loginSucceed" />
      </div>
    </form>
  </div>
</template>
  
<script>

import ConnexionChecker from '../../../components/organisms/ConnexionChecker.vue'
import ReponseIcon from '../../../components/molecules/ResponseIcon.vue'

export default {
  data() {
    return {
      responseArrived: false,
      loginSucceed: true,
      loginResponseMsg: ''
    }
  },
  mounted() {
    document.querySelector('button').addEventListener('click', (e) => {
      e.preventDefault();
      fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {},
        body: new FormData(document.getElementById('login-form'))
      }).then(response => {
        this.responseArrived = true;
        this.loginSucceed = response.status < 300;
        return response.text();
      })
        .then(msg => {
          this.loginResponseMsg = msg
        }).catch(() => {
          this.responseArrived = true;
          this.loginSucceed = false;
          this.loginResponseMsg = 'Server Error'
        });
    });
  },
  components: {
    ConnexionChecker,
    ReponseIcon
  }
}
</script>

<style lang="scss" scoped>
.titel {
  text-align: center;
}

.form-container {
  padding: calc(0.5vw + 20px);
  background-color: rgb(155, 169, 189);
  max-width: 400px;
  border-radius: 5px;
}

input,
label {
  display: block;
  width: 100%;
}
</style>