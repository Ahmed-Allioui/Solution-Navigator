<template>
  <h1>Fibonacci</h1>
  <ol>
    <li class="question">
      Was ist die größte Fibonacci-Zahl, die sich noch als Integer sicher
      speichern lässt (Number.MAX_SAFE_INTEGER)? Die wievielte Fibonacci-Zahl in
      der Fibonacci-Folge ist das?
    </li>
    <div>
      <p>
        die größte Fibonacci-Zahl, die sich noch als Integer sicher speichern
        lässt, ist <strong>{{ maxSafeInt }}</strong> und liegt in der Position
        <strong>{{ maxSafeIntIdx }}</strong
        >.
      </p>
    </div>
    <li class="question">
      Was ist die größte Fibonacci-Zahl, die sich noch als Number speichern
      lässt (Number.MAX_VALUE)? Die wievielte Fibonacci-Zahl in der
      Fibonacci-Folge ist das (d.h. welche Stelle in der Fibonacci-Folge)?
    </li>
    <div>
      <p>
        die größte Fibonacci-Zahl, die sich noch als Number speichern lässt, ist
        <strong>{{ maxValue }}</strong> und liegt in der Position
        <strong>{{ maxValueIdx }}</strong
        >.
      </p>
    </div>
    <li class="question">
      Wechseln Sie zu BigInt , um alle 2000 Fibonacci-Zahlen korrekt anzuzeigen.
    </li>
    <div>
      <p>Siehe logs</p>
    </div>
    <li class="question">
      Optional: Was ist die größte Fibonacci-Zahl, die Sie mit BigInt korrekt
      berechnet haben? An welcher Stelle in der FibonacciFolge steht diese?
    </li>
    <div>
      <p>Die größte Fibonacci-Zahl, die ich mit BigInt korrekt
      berechnet habe, war ungefähr 99000. Es ist gerade im Code kommentiert, weil es viel Zeit in Anspruch nimmt.</p>
    </div>
  </ol>
</template>

<script>
export default {
  data() {
    return {
      maxSafeInt: -1,
      maxSafeIntIdx: -1,
      maxValue: -1,
      maxValueIdx: -1,
      max2000: BigInt(0),
      max2000Idx: BigInt(0),
      maxPossible: BigInt(0),
      maxPossibleIdx: BigInt(0),
    };
  },
  created() {
    this.printFiboOnConsole(200);
    this.getMaxSafeInt();
    this.getMaxValue();
    this.printFibonacci2000();
    //this.getMaxPossible();
  },
  methods: {
    fibonacci(cond, printEnabled, bigint) {
      var counter = 0;
      /* global BigInt */
      var actual = bigint ? BigInt(0) : 0;
      var next = bigint ? BigInt(1) : 1;
      var tmp = bigint ? BigInt(0) : 0;
      try {
        while (cond(counter, actual, next)) {
          if (printEnabled) console.log(counter, actual);
          tmp = next;
          next += actual;
          actual = tmp;
          counter++;
        }
      } catch (e) {
        console.log("");
      }
      return [counter, actual];
    },
    printFiboOnConsole(number) {
      this.fibonacci(
        (counter, actual, next) =>
          (counter < number) & (actual == actual) & (next == next),
        true
      );
    },
    getMaxSafeInt() {
      [this.maxSafeIntIdx, this.maxSafeInt] = this.fibonacci(
        (counter, actual, next) =>
          (counter == counter) &
          (actual == actual) &
          (next < Number.MAX_SAFE_INTEGER),
        false
      );
    },
    getMaxValue() {
      [this.maxValueIdx, this.maxValue] = this.fibonacci(
        (counter, actual, next) =>
          (counter == counter) & (actual == actual) & (next < Number.MAX_VALUE),
        false
      );
    },
    printFibonacci2000() {
      [this.max2000Idx, this.max2000] = this.fibonacci(
        (counter, actual, next) =>
          (counter < 2000) & (actual == actual) & (next == next),
        true,
        true
      );
    },
    getMaxPossible() {
      [this.maxPossibleIdx, this.maxPossible] = this.fibonacci(
        (counter, actual, next) =>
          (counter == counter) & (actual == actual) & (next == next),
        true,
        true
      );
    },
  },
};
</script>