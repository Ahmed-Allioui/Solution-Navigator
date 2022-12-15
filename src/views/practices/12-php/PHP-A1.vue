<template>
  <h1>Registrierung mit PHP</h1>
  <p>In dieser Aufgabe wurde ein Registrierungsformular mit PHP erstellt. Die eingegebenen Daten werden persistent in
    einer Datei gespeichert.
    Zudem sind die PHP-Scripte so geschrieben, dass es zu keinen Nebenläufigkeitsartefakten (z.B. Lost Update) kommen
    kann, egal
    wie viele Nutzer sich gleichzeitig registrieren. Dazu wird es ersmal gecheckt, ob der Verbindung zum Server
    sichergestellt werden kann</p>
  <ConnexionChecker />
  <div class="form-container">
    <h3 class="titel">Registrierung</h3>
    <form id="register-form">
      <div>
        <label>Benutzername: </label>
        <input type="text" name="username">
      </div>
      <div>
        <label>Passwort: </label>
        <input type="text" name="password">
      </div>
      <div>
        <button class="primary">Regestrieren</button>
      </div>
      <div v-if="responseArrived">
        <ReponseIcon :successMsg="registrationResponseMsg" :errorMsg="registrationResponseMsg"
          :succeed="registrationSucceed" />
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
      registrationSucceed: true,
      registrationResponseMsg: ''
    }
  },
  mounted() {
    document.querySelector('button').addEventListener('click', (e) => {
      e.preventDefault();
      this.responseArrived = false;
      fetch('http://localhost:8000/register', {
        method: 'POST',
        body: new FormData(document.getElementById('register-form'))
      }).then(response => {
        this.responseArrived = true;
        this.registrationSucceed = response.status < 300;
        return response.text();
      })
        .then(msg => {
          this.registrationResponseMsg = msg
        }).catch(() => {
          this.responseArrived = true;
          this.registrationSucceed = false;
          this.registrationResponseMsg = 'Server Error'
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