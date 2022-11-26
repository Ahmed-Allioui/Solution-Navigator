<template>
  <h1>{{ titel }}</h1>
  <br />
  <h3>Abhängigkeiten</h3>
  <div class="dependencies-container">
    <div
      v-for="(dependency, i) in dependencies"
      :key="i"
      class="dependency-container"
    >
      <input
        v-model="dependencies[i][0]"
        name="dependencies"
        id="dependencies"
      />
      <input
        v-model="dependencies[i][1]"
        name="dependencies"
        id="dependencies"
      />
      <button class="error" @click="deleteDependency(i)">entfernen</button>
    </div>
  </div>
  <div>
    <button class="primary" @click="addDependency()">hinzufügen</button>
  </div>
  <div>
    <button class="primary" @click="sortedTasks = topSort()">
      Tasks sortieren
    </button>
  </div>
  <div class="sorted-tasks-container">
    <div
      v-for="(task, i) in sortedTasks"
      :key="i"
      class="sorted-tasks-intern-container"
    >
      <div class="border">
        {{ task }}
      </div>
    </div>
  </div>
  <div v-if="errorMessage" class="error-message-wrapper error">{{ errorMessage }}</div>
  <div></div>
</template>
  
<script>
import Vorrang from "./Vorrang";

export default {
  data() {
    return {
      dependencies: [
        ["Erste Task", "Zweite Task"],
        ["Zweite Task", "Dritte Task"],
        ["Dritte Task", "Vierte Task"],
      ],
      sortedTasks: [],
      errorMessage: null,
    };
  },
  props: {
    titel: {
      type: String,
      default: "Topologische Iterierbarkeit",
    },
    createVorrang: {
      type: Function,
      default(dependencies) {
        return new Vorrang(dependencies);
      },
    },
    iterate: {
      type: Function,
      default(tasks) {
        let rest = tasks.size(); // number of all tasks
        let sortedTasks = []; // initialise the array of tasks
        for (let task of tasks) {
          sortedTasks.push(task);
          rest--;
        }
        return { sortedTasks: sortedTasks, rest: rest };
      },
    },
  },

  methods: {
    topSort() {
      const tasks = this.createVorrang(this.dependencies);
      this.errorMessage = null;
      let result = this.iterate(tasks);
      if (result.rest > 0) {
        let s = result.sortedTasks.length > 0 ? " noch " : ""
        this.errorMessage =
          "Es gibt " + s +
          result.rest +
          " Aufgaben, die wegen zyklischer Abhängigkeiten nicht sortiert werden können";
      }
      return result.sortedTasks;
    },
    deleteDependency(index) {
      this.dependencies = this.dependencies.filter(
        (deppendency, i) => i != index
      );
    },

    addDependency() {
      let set = new Set();
      for (let dep of this.dependencies) {
        set.add(dep[0]);
        set.add(dep[1]);
      }
      this.dependencies.push(["", ""]);
    },
  },
};
</script>
  
  <style lang="scss" scoped>
.dependency-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px 30px;
}

.dependencies-container {
  display: flex;
  flex-direction: column;
}
.sorted-tasks-container {
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
}

.error-message-wrapper {
  font-weight: bold;
}
</style>