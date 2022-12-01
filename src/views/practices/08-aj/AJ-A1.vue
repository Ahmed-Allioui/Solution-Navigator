<template>
  <h1>{{ titel }}</h1>
  <p>
    In dieser Aufgabe, wurden zwei Dateien A.txt und B.txt mit ungefähr gleich
    vielen Zeilen erstellt.
  </p>
  <p>
    Mit dem Button <em>Texts importieren und konkatenieren</em> werden die
    beiden Dateien mit fetch-API parallel vom Server geladen dann zeilenweise
    konkateniert.
  </p>
  <p>Das Ziel ist eine max. Geschwindigkeit durch maximale Parallelität.</p>
  <p>
    In dieser Aufgabe werden lediglich <strong>{{ usedTechnic }}</strong> verwendet.
  </p>
  <button class="primary" @click="importAndMerge()">
    Texts importieren und konkatenieren
  </button>
  <div class="texts-container">
    <div class="text-wrapper">
      <h3>Text A</h3>
      <div>{{ textA }}</div>
    </div>
    <div class="text-wrapper">
      <h3>Text B</h3>
      <div>{{ textB }}</div>
    </div>
    <div class="text-wrapper">
      <h3>Konkatenierter Text</h3>
      <div>{{ mergedText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textA: "",
      textB: "",
      mergedText: "",
    };
  },
  props: {
    titel: {
      type: String,
      default: "Promisses",
    },
    usedTechnic: {
      type: String,
      default: "Promisses",
    },
    importTexts: {
      type: Function,
      default: (merge) => {
        let arrays = [];
        let promiseA = fetch("/ressource/aj/A.txt");
        let promiseB = fetch("/ressource/aj/B.txt");

        Promise.all([promiseA, promiseB])
          .then((a) => a.map((text) => text.text()))
          .then((a) =>
            a.map((text) =>
              text
                .then((x) => {
                  return x.split(/\r?\n/);
                })
                .then((x) => (arrays[arrays.length] = x))
                .then(() => merge(arrays))
            )
          );
      },
    },
  },
  methods: {
    importAndMerge() {
      this.importTexts(this.merge);
    },
    merge(arrays) {
      if (!arrays || arrays.length < 2) return null;
      let merged = new Array();
      let first = arrays[0];
      let second = arrays[1];

      let index = Math.max(...[first.length, second.length]);
      for (let i = 0; i < index; i++) {
        if (first[i]) merged.push(first[i]);
        if (second[i]) merged.push(second[i]);
      }
      this.textA = first.join("\n");
      this.textB = second.join("\n");
      this.mergedText = merged.join("\n");
    },
  },
};
</script>
  
<style lang="scss" scoped>
.texts-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  //flex-wrap: wrap;
  justify-content: stretch;
}

.text-wrapper {
  border: solid;
  padding: 1vw;
  border-radius: 5px;
  margin: calc(0.5vw + 5px);
  //width: 100%;
  flex-grow: 1;
  white-space: pre-wrap;
}

button {
  width: fit-content;
}
</style>