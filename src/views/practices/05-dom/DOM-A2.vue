<template>
  <div id="root"></div>
  <h1>Rednerliste mit Zeitmessung</h1>
  <h3>Rednerliste</h3>
  <div class="input-container">
    <label for="input"
      >Neuer Redner
      <input id="input" v-model="input" />
    </label>
    <button @click="addSpeaker(input)" class="primary">Hinzufügen</button>
  </div>
  <div class="speakers-container">
    <ul>
      <li v-for="(speaker, i) in speakers" :key="i">{{ speaker.name }}</li>
    </ul>
  </div>
</template>

<script>
function Speaker(name) {
  this.name = name;
  this.seconds = new Date().getSeconds();
  this.stoped = true;
}
const anton = new Speaker("Anton");
const berta = new Speaker("Berta");
const carl = new Speaker("Carl");
var speakers = [anton, berta, carl];

function initTimers() {
  const d = new Date();
  var timers = document.querySelectorAll(".timer");
  for (let timer of timers) {
    const i = timer.id;
    speakers[i].seconds = d.getSeconds();
    timer.textContent = subtractSeconds(d, speakers[i].seconds).toLocaleTimeString();
  }
}

function appTimer() {
  const d = new Date();
  var timers = document.querySelectorAll(".timer");
  for (let timer of timers) {
    const i = timer.id;
    if (speakers[i].stoped) {
      speakers[i].seconds++;
    } else {
      timer.textContent = subtractSeconds(
        d,
        speakers[i].seconds
      ).toLocaleTimeString();
    }
  }
}

function subtractSeconds(date, seconds) {
  date.setSeconds(date.getSeconds() - seconds);

  return date;
}

export default {
  data() {
    return {
      input: "",
      speakers: [],
    };
  },

  methods: {
    addSpeaker(name) {
      console.log(document.getElementById("test"));
      this.speakers.push(new Speaker(name));
    },
  },
  mounted() {
    const root = document.getElementById("root");

    const titel = document.createElement("h1");
    titel.textContent = "Rednerliste mit Zeitmessung";
    root.append(titel);

    const subtitel = document.createElement("h3");
    subtitel.textContent = "Rednerliste";
    root.append(subtitel);

    const inputContainer = document.createElement("div");
    inputContainer.setAttribute("class", "input-container");
    const label = document.createElement("label");
    label.setAttribute("for", "input");
    label.textContent = "Neuer Redner ";
    const input = document.createElement("input");
    input.setAttribute("id", "input");
    label.append(input);
    const button = document.createElement("button");
    button.setAttribute("class", "primary");
    button.textContent = "hinzufügen";
    button.addEventListener("click", () => {
      speakers.push(new Speaker(input.value));
      var li = document.createElement("li");
      li.textContent = input.value;
      ul.append(li);
    });
    inputContainer.append(label);
    inputContainer.append(button);
    root.append(inputContainer);

    const speakerContainer = document.createElement("div");
    speakerContainer.setAttribute("class", "speaker-container");
    const ul = document.createElement("ul");
    for (let i = 0; i < speakers.length; i++) {
      const li = document.createElement("li");
      li.textContent = speakers[i].name;
      ul.append(li);
      const timer = document.createElement("div");
      timer.setAttribute("id", i);
      timer.setAttribute("class", "timer");
      li.append(timer);
      const button = document.createElement("button");
      button.setAttribute("class", "primary");
      button.textContent = "start";
      button.addEventListener("click", () => {
        speakers[i].stoped = !speakers[i].stoped;
        button.textContent = speakers[i].stoped ? "start" : "stop";
      });
      li.append(button);
    }
    speakerContainer.append(ul);
    root.append(speakerContainer);

    initTimers();
    setInterval(appTimer, 1000);
  },
};
</script>
  
<style lang="scss" scoped>
.input-container {
  display: flex;
  flex-direction: row;
  margin-bottom: 5vw;
}

.speakers-container {
  display: flex;
  flex-direction: column;
}
</style>