<template>
  <h1>Klammerpaare</h1>
  <p>Sie können hier Klammerpaare hinzufügen bzw. bearbeiten:</p>
  <div class="container">
    <div v-for="(pair, index) in pairs" :key="index">
      <label for="{{index}}">
        <input
          class="pair"
          id="1-{{index}}"
          v-model="pairs[index][0]"
        />
        <input
          class="pair"
          id="1-{{index}}"
          v-model="pairs[index][1]"
        />
      </label>
    </div>
  </div>
  <div>
    <button class="primary" @click="addPair()">hinzufügen</button>
  </div>
  <br>
  <div>
    <label for="text"
      >Hier können Sie Ihren Text:
      <input class="text" id="text" v-model="text" />
    </label>
  </div>
  <div>
    <button class="primary" @click="checkPairs()">Klammerpaare überprüfen</button>
  </div>
  <div class="error question">
    {{errorMsg}}
  </div>
</template>

<script>

import Stack from "../../../utils/Stack"

export default {
  data() {
    return {
      pairs: [
        ["[", "]"],
        ["(", ")"],
        ["{", "}"],
      ],
      text: "",
      errorMsg: ""
    };
  },
  methods: {
    addPair() {
      this.pairs.push(["", ""]);
    },
    checkPairs() {
      let correct = this.isInputCorrect();
      let error = "Die Klammerpaare sind nicht korrekt!";
      console.assert(correct, error);
      if(correct) {
        document.getElementById('text').style.color = "green";
        return;
      }
      document.getElementById('text').style.color = "red";
      if(this.errorMsg.length < 1) this.errorMsg = error;
    },
    isInputCorrect() {
      let map = this.generateMap();
      let inversedMap = this.generateInversedMap();
      let stack = new Stack();
      if(map == null) return false;
      for(let character of this.text) {
        let actual = stack.pop();
        let prevOf = inversedMap.get(character);
        if(prevOf && actual && prevOf == actual) {
          stack.pull();
          continue;
        }
        if(prevOf && prevOf != actual) {
          this.errorMsg = "Unerwarteter Token: " + character;
          return false;
        }
        let nextOf = map.get(character);
        if(nextOf) {
          stack.push(character);
        }
      }
      if(!stack.isEmpty()) {
        this.errorMsg = "Klammerpaare fehlen";
        return false;
      }
      return true;
    },
    generateMap() {
      this.errorMsg = "";
      let map = new Map();
      for(let pair of this.pairs) {
        if(pair[0]?.length == 1 && pair[1]?.length == 1) {
          map.set(pair[0], pair[1])
        } else {
          this.errorMsg = "Die Klammerpaare müssen genau aus einem Buchstabe bestehen";
          return null;
        }
      }
      return map;
    },
    generateInversedMap() {
      this.errorMsg = "";
      let map = new Map();
      for(let pair of this.pairs) {
        if(pair[0]?.length == 1 && pair[1]?.length == 1) {
          map.set(pair[1], pair[0])
        } else {
          this.errorMsg = "Die Klammerpaare müssen genau aus einem Buchstabe bestehen";
          return null;
        }
      }
      return map;
    }

  },
};
</script>
  
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px 50px;
}
input.pair {
  max-width: 50px;
  text-align: center;
}

input.text {
  width: 100%;
}
</style>