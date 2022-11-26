<template>
  <Topsort :titel="titel" :iterate="iterate" :createVorrang="createVorrang" />
</template>

<script setup>
import Topsort from "./ES-A2.vue";
import Vorrang from "./Vorrang";

class GenVorrang extends Vorrang {
  *gen() {
    for (const key of this) {
      yield key;
    }
  }
}

let titel = "Topologischer Generator";

let createVorrang = function (dependencies) {
  return new GenVorrang(dependencies);
};

let iterate = function (tasks) {
  let rest = tasks.size(); // number of all tasks
  let sortedTasks = []; // initialise the array of tasks
  for (let task of tasks.gen()) {
    sortedTasks.push(task);
    rest--;
  }
  return { sortedTasks: sortedTasks, rest: rest };
};
</script>
  
<style lang="scss" scoped>
</style>