<template>
  <div class="text-container">
    <label>Geben Sie einen Text ein:</label>
    <textarea v-model="text"></textarea>
  </div>
  <div>
    <button class="primary" @click="sorted = analyseText()">
      Text analysieren
    </button>
  </div>
  <div>
    {{ sorted }}
  </div>
</template>

<script>
const stopwords = require("stopwords-de");

const ponctuation = [
  ".",
  "?",
  "!",
  ",",
  ":",
  ";",
  "–",
  "_",
  "—",
  "(",
  ")",
  "[",
  "]",
  "{",
  "}",
  "<",
  ">",
  "“",
  "'",
  "/",
  "…",
  "*",
  "~",
  "\\",
  "^",
  "|",
];

export default {
  data() {
    return {
      text: "",
      sorted: [],
    };
  },
  methods: {
    analyseText() {
      let map = new Map();
      let arrayWithoutPonctuation = [];
      for (let c of this.text) {
        if (!ponctuation.includes(c)) arrayWithoutPonctuation.push(c);
      }
      arrayWithoutPonctuation
        .join("")
        .split(/\r?\n/)
        .join("")
        .split(" ")
        .filter((word) => !stopwords.includes(word.toLowerCase()))
        .reduce(function (acc, word) {
          map.set(word, 1 + (map.get(word) ? map.get(word) : 0));
          return map;
        }, {});
      map = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
      return [...map.entries()]
        .filter((value, index) => index < 3)
        .map((value) => value[0]);  //@todo good present with borders
    },
  },
};
</script>
  
<style lang="scss" scoped>
.text-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  textarea {
    height: 200px;
  }
}
</style>