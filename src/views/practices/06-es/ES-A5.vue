<template>
  <h1>DeepCopy</h1>
  <h3>Aufgabe</h3>
  <p>Schreiben Sie eine rekursive Funktion deepCopy( struct ) als ES6-Ausdruck, sodass beliebig geschachtelte Arrays und
    Objekte tiefenkopiert werden können.</p>
  <h3>Lösung</h3>
  <p>
    In dieser Aufgabe wurde eine rekursive Funktion deepCopy(struct) als
    ES6-Ausdruck entwickelt, sodass beliebig geschachtelte Arrays und Objekte
    tiefenkopiert werden können.
  </p>
  <div class="container">
    <div class="object-container">
      <h3>Das originale Objekt</h3>
      <pre><code>{{ me }}</code></pre>
    </div>
    <div class="object-container">
      <h3>Die Kopie</h3>
      <pre><code>{{ copy }}</code></pre>
    </div>
  </div>
  <br>
  <div>Sind die beiden Objekte gleich? Dazu wird "=" Operator aufgerufen.</div>
  <div>Ergebnis: <strong>{{ equal }}</strong></div>
</template>

<script setup>
let me = {
  name: "Ahmed",
  address: {
    city: "Sankt Augustin",
    app: {
      number: 53757,
      floor: 2,
      name: undefined,
      foo: null,
    },
  },
  modules: ["Web Engineering", "Software Engineering"],
};

let deepCopy = function (object) {
  return object == null
    ? undefined
    : ["string", "number", "boolean", "undefined", "function"].includes(
      typeof object
    )
      ? object
      : Array.isArray(object)
        ? object.map((o) => deepCopy(o))
        : Object.fromEntries(Object.entries(object).map((o) => deepCopy(o)));
};

let copy = deepCopy(me);

let equal = me == copy;

</script>
  
<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.object-container {
  border: solid;
  padding: 1vw;
  border-radius: 5px;
  margin: 1vw
}
</style>