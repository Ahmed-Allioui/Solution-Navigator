<template>
  <h1>{{titel}}</h1>
  <h3>Tasks</h3>
  <div class="task-container">
    <div v-for="(task, index) in tasks" :key="index">
      <label for="{{index}}"
        >Task {{ index }}
        <input
          id="{{index}}"
          @change="changeHandler()"
          v-model="tasks[index]"
        />
      </label>
    </div>
    <div>
      <label
        >New Task
        <input
          @change="newElementHandler()"
          v-model="tmp"
          placeholder="New task..."
        />
      </label>
    </div>
  </div>
  <br />
  <h3>Abhängigkeiten</h3>
  <div class="dependencies-container">
    <div v-for="(dependency, i) in dependencies" :key="i">
      <select
        v-model="dependencies[i][0]"
        name="dependencies"
        id="dependencies"
      >
        <option v-for="(task, j) in tasks" :key="j" v-bind:value="task">
          {{ tasks[j] }}
        </option>
      </select>
      <select
        v-model="dependencies[i][1]"
        name="dependencies"
        id="dependencies"
      >
        <option v-for="(task, j) in tasks" :key="j" v-bind:value="task">
          {{ tasks[j] }}
        </option>
      </select>
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
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    <div
      v-else
      v-for="(task, i) in sortedTasks"
      :key="i"
      class="sorted-tasks-intern-container"
    >
      <div class="border">
        {{ task }}
      </div>
    </div>
  </div>
  <div></div>
</template>

<script>

import Queue from "../../../utils/Queue"

function Task() {
  this.next = [];
  this.level = 0;
}

export default {
  data() {
    return {
      tasks: ["Erste Task", "Zweite Task", "Dritte Task", "Vierte Task"],
      dependencies: [
        ["Erste Task", "Zweite Task"],
        ["Zweite Task", "Dritte Task"],
        ["Dritte Task", "Vierte Task"],
      ],
      tmp: "",
      sortedTasks: [],
      errorMessage: null,
    };
  },
  props: {
    titel: { type: String, default: "Topsort" }
  },

  methods: {
    generateTasks(str_tasks) {
      var tasks = new Map();
      for (let task of str_tasks) {
        tasks.set(task, new Task());
      }
      return tasks;
    },

    setDependencies(map_tasks, dependencies) {
      for (let dependency of dependencies) {
        this.setDependency(map_tasks, dependency);
      }
    },

    setDependency(map_tasks, dependency) {
      var prev = map_tasks.get(dependency[0]);
      var next = map_tasks.get(dependency[1]);
      if (prev && next) {
        prev.next.push(dependency[1]);
        next.level++;
      }
    },

    topSort() {
      var map_tasks = this.generateTasks(this.tasks);
      this.setDependencies(map_tasks, this.dependencies);
      var queue = this.initQueue(map_tasks);
      var sortedTasks = this.processSorting(queue, map_tasks);

      if (sortedTasks.length < this.tasks.length) {
        this.errorMessage =
          "Es ist nicht möglich diese Tasks zu sortieren, bitte mal checken ob die Abhängigkeiten stimmen.";
        return null;
      }
      this.errorMessage = null;
      return sortedTasks;
    },

    /**
     * initialising the queue by looking for the task that have no previous tasks
     * O(n)
     * */
    initQueue(map_tasks) {
      var queue = new Queue();
      for (let [key, value] of map_tasks) {
        if (value.level == 0) {
          queue.push(key);
        }
      }
      return queue;
    },

    /**
     * In average case the number of iterations is linear to the number of dependencies
     * => O(N)
     */
    processSorting(queue, map_tasks) {
      var sorted_tasks = [];
      while (!queue.isEmpty()) {
        // getting actual element
        var actual_value = queue.pull();

        // push the actual element in the sorted array
        sorted_tasks.push(actual_value);

        // decrementing the level for all next tasks and add the task getting a level 0 to the queue
        for (let str_task of map_tasks.get(actual_value).next) {
          var next_task = map_tasks.get(str_task);
          next_task.level--;
          if (next_task.level == 0) queue.push(str_task);
        }
      }
      console.log(sorted_tasks);
      return sorted_tasks;
    },

    changeHandler() {
      var last = this.tasks.length - 1;
      while (this.tasks[last].length == 0) {
        this.tasks.pop();
        last--;
      }
    },

    newElementHandler() {
      this.tasks.push(this.tmp);
      this.tmp = "";
    },

    deleteDependency(index) {
      this.dependencies = this.dependencies.filter(
        (deppendency, i) => i != index
      );
    },

    addDependency() {
      this.dependencies.push(["", ""]);
    },
  },
};
</script>

<style lang="scss" scoped>
.task-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px 30px;
}

input,
label {
  display: block;
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
</style>