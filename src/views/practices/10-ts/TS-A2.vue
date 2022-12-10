<template>
  <h1>Fehler finden mit TypeScript</h1>
  <p class="question">
    Welche Fehler meldet TypeScript?
  </p>
  <div class="container">
    <div class="img-container">
      <div>
        Die vom TypeScript-Kompiler gefundenen Fehler:
      </div>
      <img src="./ts-fehler.jpeg" alt="Error-Image" />
    </div>
    <div class="img-container">
      <div>
        Nach Korrektur der Fehler:
      </div>
      <img src="./ts-fehler-corrected.jpeg" alt="Corrected-Error-Image" />
    </div>
    <div>
      <ol>
        <li>
          <strong>Zeile 20: Cannot redeclare block-scoped variable 'add':</strong>
          das liegt daran, dass TypeScript globale Typisierungen hat, die sich
          mit dem Variablennamen "add" überschneidet
        </li>
        <li>
          <strong>Zeile 20: Parameter 'x' implicitly has an 'any' type:</strong>
          das liegt daran, dass der erste Argument x der Function add keinem
          Type zugeordnet wurde. Das selbe gilt für y.
        </li>
        <li>
          <strong>Zeile 21: </strong>der selbe Fehler wie bei x und y in der
          "add" Function
        </li>
        <li>
          <strong>Zeile 26: Cannot find name 'y'.</strong> Das liegt daran, dass
          die y Variable im Scope nicht definiert wurde.
        </li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts" setup>
const myAdd = (x: any, y: any) => x + y;
const equals = (x: any, y: any) => x === y;

console.log(myAdd(1, 2));
console.log(myAdd(true, true));
console.log(myAdd(true, false));
let y: number;
var x = (y = 1);
console.log(myAdd(equals(x, y), equals(y, x)));
</script>
  
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;

  .img-container {
    max-width: 400px;

    img {
      border-radius: 5px;
    }
  }
}
</style>