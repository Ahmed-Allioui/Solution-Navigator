<template>
  <h1>Sicherer ArrayWrapper</h1>
  <ol>
    <li>
      <p class="question">In der Vorlesung wurde ein ArrayWrapper Exploit gezeigt. Analysieren Sie die Ursache dieses
        Exploits.
      </p>
      <p>
        In der Exploit Methode wurde ein Element mit dem Key <em>push</em> und der entsprechenden Funktion als Value
        hinzugefügt.
      </p>
      <p>Nach dem Aufruf der <em>append</em> Methode, wird die Anweisung <em>array.push()</em> ausgeführt.
        Weil push schon einen Schlüssel eines Elements des Arrays ist, wird die entsprechende Value (die Funktion)
        zurückgegeben.</p>
      <p>Abschließend wird mit Hilfe der Klammer die Funktion aufgerufen, die mit dem Schlüssel-Wort
        <em>this</em> Zugriff auf das Array gewährleistet hat.
      </p>

    </li>
    <li>
      <p class="question">Entwickeln Sie ein Sicherheitskonzept und eine ArrayWrapper-Lösung, die gegen diesen Exploit
        gewappnet ist.</p>
      <div class="img-container">
        <img src="./array-wrapper.jpeg" alt="Array Wrapper Lösung">
      </div>
    </li>
  </ol>

</template>
  
<script setup>

function arrayWrapper() {
  var array = [...arguments]; // private
  var forbiddenKey = 'push';
  var errorMsg = 'Key not valid';
  return {
    get: function (pos) {
      return array[pos];
    },
    set: function (pos, value) {
      if (pos == forbiddenKey) throw Error(errorMsg);   // push as key is no allowed
      array[pos] = value;
    },
    append: function (value) {
      if (!value) return;    // to be sure the the value is defined and not null
      if (value[0] == forbiddenKey) throw Error(errorMsg);  // push as key is no allowed
      array.push(value);
    }
  }
}

function exploit(vector) {
  var data;
  // 1. override `push` method and extract `this`
  vector.set('push', (function () {
    data = this;
  }));
  // 2. call `append` so `push` gets called and we get the data
  vector.append();
  // 3. return the hidden array from wrapped array
  return data;
}

const wrappedArray = arrayWrapper("a", "b", "c"); // ["a","b","c"]
wrappedArray.set(1, "B"); // ["a","B","c"]
console.assert(wrappedArray.get(1) === "B");
wrappedArray.append("D"); // ["a","B","c","D"]
console.assert(wrappedArray.get(3) === "D");

try {
  console.log(exploit(wrappedArray));
} catch (e) {
  console.log("Protected against ArrayWrapper Exploit")
}

</script>

<style lang="scss" scoped>

.img-container {
  max-width: 700px;
}

</style>