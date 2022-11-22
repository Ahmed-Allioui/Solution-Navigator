<template>
  <div id="root"></div>
</template>

<script>

var speakers = [];

class Speaker {
  constructor(name) {
    this.name=name;
    this.timer=new Date();
    this.timer.setHours(0, 0, 0, 0);
    this.stoped=true;
  }
}

function appTimer() {
  var timers = document.querySelectorAll(".timer");
  for (let timer of timers) {
    const i = timer.id;
    if (!speakers[i].stoped) {
      speakers[i].timer = addSecond(speakers[i].timer);
      timer.textContent = speakers[i].timer.toLocaleTimeString()
    }
  }
}

function initSpeakers(ul) {
  addSpeaker(ul, "Anton")
  addSpeaker(ul, "Berta")
  addSpeaker(ul, "Carl")
}

function spreakerDefaultContainer() {
  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.flexDirection = "row";
  div.style.alignItems = "center"
  div.style.gap = "10px"
  div.style.fontWeight = "bold";
  return div;
}

function speakerDefaultButton(speaker) {
  const button = document.createElement("button");
  button.setAttribute("class", "primary");
  button.textContent = "start";
  button.style.minWidth = "70px";
  button.addEventListener("click", () => {
    speaker.stoped = !speaker.stoped;
    button.textContent = speaker.stoped ? "start" : "stop";
  });
  return button;
}

function speakerNameContainer(speaker) {
  const name = document.createElement("div");
  name.textContent = speaker.name;
  return name;
}

function speakerTimerContainer(speaker, id) {
  const timer = document.createElement("div");
  timer.setAttribute("id", id);
  timer.setAttribute("class", "timer");
  timer.textContent = speaker.timer.toLocaleTimeString();
  return timer;
}

function inputContainer(ul) {
  const container = document.createElement("div");
  container.setAttribute("class", "input-container");
  const label = inputLabel();
  const input = getInput(ul);
  label.append(input);
  const button = inputButton(ul, input)
  container.append(label);
  container.append(button);
  return container;
}

function inputLabel() {
  const label = document.createElement("label");
  label.setAttribute("for", "input");
  label.textContent = "Neuer Redner ";
  return label;
}

function getInput(ul) {
  const input = document.createElement("input");
  input.setAttribute("id", "input");
  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addSpeaker(ul, input.value)
      input.value = "";
    }
  });
  return input;
}

function inputButton(ul, input) {
  const button = document.createElement("button");
  button.setAttribute("class", "primary");
  button.textContent = "hinzufügen";
  button.addEventListener("click", () => {
    addSpeaker(ul, input.value)
    input.value = "";
  });
  return button;
}

function titel() {
  const titel = document.createElement("h1");
  titel.textContent = "Rednerliste mit Zeitmessung";
  return titel;
}

function subtitel() {
  const subtitel = document.createElement("h3");
  subtitel.textContent = "Rednerliste";
  return subtitel;
}

function speakersContainer(ul) {
  const speakersContainer = document.createElement("div");
  speakersContainer.setAttribute("class", "speaker-container");
  initSpeakers(ul);
  speakersContainer.append(ul);
  return speakersContainer;
}

function addSpeaker(ul, speakerName) {
  let index = speakers.length;
  let speaker = new Speaker(speakerName)
  speakers.push(speaker);
  const li = document.createElement("li");
  const div = spreakerDefaultContainer();
  div.append(speakerDefaultButton(speaker));
  div.append(speakerNameContainer(speaker));
  div.append(speakerTimerContainer(speaker, index));
  li.append(div)
  ul.append(li);
}

function addSecond(date) {
  date.setSeconds(date.getSeconds() + 1);
  return date;
}

export default {
  mounted() {
    const root = document.getElementById("root");
    root.append(titel());
    root.append(subtitel());
    const ul = document.createElement("ul");
    root.append(inputContainer(ul));
    root.append(speakersContainer(ul));
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