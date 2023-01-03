<template>
  <h1>Funktionen in JavaScript</h1>
  <p class="question">In dieser Aufgabe, sollen Funktionen implementiert werden. Die Implementierung kann in dem Script
    dieses Vue gefunden werden.</p>
  <p class="question">In dem Script sind auch Tests zu finden, die mit <i>console.assert</i> durchgefüht wurden.</p>
  <p class="question">Die <i>once</i> Funktion sollte einen error zeigen, wenn sie mehrmals aufgerufen werden. Deswegene
    sind die entsprechenden Errors auf der Console zu sehen.</p>
  <p class="question">Genauso für die Funktion <i>revokable</i>. Sie soll nämlich einen Fehler werfen, wenn sie
    aufgerufen wurde, nachdem sie revoked wurde.</p>
</template>

<script setup>

/** ============================================================================ */
/** ============================ IMPLEMENTATION ================================ */
/** ============================================================================ */

const identity_function = function (arg) {
  return () => arg;
};

const addf = function (x) {
  return (y) => x + y;
};

const applyf = function (func) {
  return (x) => (y) => func(x, y);
};

const curry = function (func, x) {
  return (y) => func(x, y);
};

const inc1 = addf(1);

const inc2 = applyf((x, y) => x + y)(1);

const inc3 = curry((x, y) => x + y, 1);

const methodize = (fn) =>
  function (x) {
    return fn(this, x);
  };

const demethodize = (fn) => (x, y) => fn.bind(x, y)();

const twice = (fn) => (x) => fn(x, x);

const composeu = (f1, f2) => (x) => f2(f1(x));

const composeb = (f1, f2) => (x, y, z) => f2(f1(x, y), z);

const once = (fn) => {
  let called = false;
  return (x, y) => {
    if (called) {
      console.error("Once methode should be called only one time");
      return;
    }
    called = true;
    return fn(x, y);
  };
};

const counterf = (counter) => {
  return {
    counter: counter,
    inc: () => ++counter,
    dec: () => --counter
  }
}

const revocable = (fn) => {
  return {
    revoked: false,
    invoke: function (arg) {
      if (this.revoked) console.error("You can not more call a method that is already revoked")
      else return fn(arg)
    },
    revoke: function () {
      this.revoked = true;
    }
  }
}

const vector = () => {
  return {
    array: [],
    append: function (item) {
      this.array.push(item);
    },
    store: function (pos, item) {
      this.array[pos] = item;
    },
    get: function (pos) {
      return this.array[pos]
    }
  }
}

/** ============================================================================ */
/** ========================= HELPER FUNCTIONS ================================= */
/** ============================================================================ */

/** Helper methods for tests */
var add = function (a, b) {
  return Number(a) + Number(b); // explicit casting
};

const mul = function (a, b) {
  return a * b; // implicit casting
};

/** ============================================================================ */
/** =============================== TESTS ====================================== */
/** ============================================================================ */

console.assert(
  identity_function("Arg")() == "Arg",
  "Testing identity_function"
);

console.assert(addf(5)(2) == 7, "Testing addf");

console.assert(applyf(add)(5)(2) == 7, "Testing applyf");

console.assert(curry(mul, 5)(2) == 10, "Testing curry");

console.assert(inc1(2) == 3, "Testing inc");

console.assert(inc2(2) == 3, "Testing inc");

console.assert(inc3(2) == 3, "Testing inc");

Number.prototype.add = methodize(add);

console.assert((3).add(4) == 7, "Testing methodize");

console.assert(
  demethodize(Number.prototype.add)(5, 6) == 11,
  "Testing demethodize"
);

const double = twice(add);
console.assert(double(11) == 22, "Testing twice");

const square = twice(mul);
console.assert(square(11) == 121, "Testing twice");

console.assert(composeu(double, square)(3) == 36, "Testing composeu");

console.assert(composeb(add, mul)(2, 3, 5) == 25, "Testing composeb");

let add_once = once(add);

console.assert(add_once(3, 4) == 7, "Testing add_once");
console.assert(add_once(3, 4) == undefined, "Testing add_once");

let value = 10;
let counter = counterf(value)

console.assert(counter.inc() == value + 1, "Testing counterf");
console.assert(counter.dec() == value, "Testing counterf");

let temp = revocable(x => x + 1);

console.assert(temp.invoke(7) == 8, "Testing revocable");
temp.revoke();

console.assert(temp.invoke(7) == undefined, "Testing revocable");

let my_vector = vector();
my_vector.append(7);
my_vector.store(1, 8);

console.assert(my_vector.get(0) == 7, "Testing vector");
console.assert(my_vector.get(1) == 8, "Testing vector");

</script>
  
<style lang="scss" scoped>

</style>