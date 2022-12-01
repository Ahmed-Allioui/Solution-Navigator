<template>
  <Topsort :titel="titel" :createVorrang="createVorrang" />
</template>

<script setup>
import Queue from "../../../utils/Queue";
import Topsort from "./ES-A2.vue";
import Vorrang from "./Vorrang";

class VorrangProxy extends Vorrang {}

 
VorrangProxy.prototype[Symbol.iterator] = function () {
  var map = this.map;

  const initQueue = function () {
    let q = new Queue();
    for (let [key, value] of map) {
      if (value.level == 0) {
        q.push(key);
      }
    }
    return q;
  };

  var queue = initQueue();

  let nextElement = function () {
    if (queue.isEmpty()) return null;
    var value = queue.pull();
    for (let task of map.get(value).next) {
      var next = map.get(task);
      next.level--;
      if (next.level == 0) {
        queue.push(task);
      }
    }
    return value;
  };

  const handler = {
    counter : map.size,
    // eslint-disable-next-line
    get(target, prop, receiver) {
      if(prop == "value") {
        this.counter--
        console.log("Es gibt noch " + this.counter + " Augaben in der Schlange!")
      }
      return Reflect.get(...arguments)
    },
  };

  return {
    next: function () {
      if (!queue.isEmpty()) return new Proxy({ value: nextElement(), done: false }, handler) ;
      return new Proxy({ value: nextElement(), done: true }, handler) ;
    },
  };
};

let titel = "Proxy";

let createVorrang = function (dependencies) {
  return new VorrangProxy(dependencies);
};
</script>
  
<style lang="scss" scoped>
</style>