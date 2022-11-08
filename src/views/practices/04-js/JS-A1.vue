<template>
  <h1>Funktionen</h1>
  <p class="question">Schreiben Sie folgende Funktionen in JavaScript:</p>
  <ol>
    <li class="question">
      Schreiben Sie eine Funktion <span class="red">identity()</span> , die ein
      Argument als Parameter entgegen nimmt und dieses als Ergebnis zurück gibt.
    </li>
    <div>
      <label
        >Geben Sie ein Argument ein:
        <input @input="id_result = null" v-model="id_arg"
      /></label>
      <button class="primary" @click="id_result = identity(this.id_arg)">
        call identity
      </button>
      <br />
      <p>Result: {{ id_result }}</p>
      <br />
    </div>
    <li class="question">
      Schreiben Sie eine Funktion <span class="red">identity_function()</span> ,
      die ein Argument als Parameter entgegen nimmt und eine Funktion zurück
      gibt, die dieses Argument zurück gibt.
    </li>
    <label
      >Geben Sie ein Argument ein:
      <input
        @input="
          id_func = null;
          id_func_result = null;
        "
        v-model="id_func_arg"
    /></label>
    <button
      class="primary"
      @click="id_func = identity_function(this.id_func_arg)"
    >
      call identity_function
    </button>
    <br />
    <div v-if="id_func">
      <span>Die Function wurde gesetzt.</span>
      <button class="primary" @click="id_func_result = this.id_func()">
        call resulted function
      </button>
      <br />
      <span>Result: {{ id_func_result }}</span>
    </div>
    <br />
    <br />
    <li class="question">
      Schreiben Sie zwei binäre Funktionen <span class="red">add</span> und
      <span class="red">mul</span> , die Summe und Produkt berechnen.
    </li>
    <div>
      <label
        >Argument 1: <input @input="add_result = null" v-model="add_x" /></label
      ><br />
      <label
        >Argument 2: <input @input="add_result = null" v-model="add_y"
      /></label>
      <button class="primary" @click="add_result = add(this.add_x, this.add_y)">
        add
      </button>
      <br />
      <p>Result: {{ add_result }}</p>
      <br />
    </div>
    <div>
      <label
        >Argument 1: <input @input="mul_result = null" v-model="mul_x" /></label
      ><br />
      <label
        >Argument 2: <input @input="mul_result = null" v-model="mul_y"
      /></label>
      <button class="primary" @click="mul_result = mul(this.mul_x, this.mul_y)">
        mul
      </button>
      <br />
      <p>Result: {{ mul_result }}</p>
      <br />
    </div>
    <li class="question">
      Schreiben Sie eine Addier-Funktion <span class="red">addf()</span> , so
      dass <span class="red">addf(x) (y)</span> genau
      <span class="red">x + y</span> zurück gibt. (Es haben also zwei
      Funktionsaufrufe zu erfolgen. <span class="red">addf(x)</span> liefert
      eine Funktion, die auf <span class="red">y</span> angewandt wird.)
    </li>
    <label
      >Geben Sie x ein: <input @input="reset_addf" v-model="addf_x"
    /></label>
    <button class="primary" @click="addf_func = addf(this.addf_x)">
      call addf
    </button>
    <br />
    <div v-if="addf_func">
      <div>Die Function wurde gesetzt.</div>
      <label
        >Geben Sie y ein: <input @input="addf_result = null" v-model="addf_y"
      /></label>
      <button class="primary" @click="addf_result = addf_func(this.addf_y)">
        call resulted function
      </button>
      <p>Result: {{ addf_result }}</p>
    </div>
    <br />
    <li class="question">
      Schreiben Sie eine Funktion <span class="red">applyf()</span> , die aus
      einer binären Funktion wie <span class="red">add(x,y)</span> eine Funktion
      <span class="red">addf</span> berechnet, die mit zwei Aufrufen das gleiche
      Ergebnis liefert, z.B.
      <span class="red">addf = applyf(add); addf(x)(y)</span> soll
      <span class="red">add(x,y)</span> liefern. Entsprechend
      <span class="red">applyf(mul)(5)(6)</span> soll
      <span class="red">30</span> liefern, wenn <span class="red">mul</span> die
      binäre Multiplikation ist.
    </li>
    <label for="cars">Wählen Sie eine Function aus: </label>
    <select
      v-model="applyf_func"
      name="functions"
      id="functions"
      @change="applyf_result = null"
    >
      <option value="add">Add</option>
      <option value="mul">Mul</option>
    </select>
    <br />
    <label
      >Geben Sie x ein: <input @input="applyf_result = null" v-model="applyf_x"
    /></label>
    <br />
    <label
      >Geben Sie y ein: <input @input="applyf_result = null" v-model="applyf_y"
    /></label>
    <button
      class="primary"
      @click="
        applyf_result = applyf(this.applyf_func === 'add' ? add : mul)(
          this.applyf_x
        )(this.applyf_y)
      "
    >
      calculate
    </button>
    <p>Result: {{ applyf_result }}</p>
    <br />
  </ol>
</template>

<script>
export default {
  data() {
    return {
      id_arg: "",
      id_result: "",
      id_func_arg: "",
      id_func: null,
      id_func_result: "",
      add_x: "",
      add_y: "",
      add_result: "",
      mul_x: "",
      mul_y: "",
      mul_result: "",
      addf_func: null,
      addf_x: "",
      addf_y: "",
      addf_result: "",
      applyf_func: "add",
      applyf_x: "",
      applyf_y: "",
      applyf_result: "",
    };
  },

  methods: {
    identity(arg) {
      return arg;
    },
    identity_function(arg) {
      return () => arg;
    },
    add(a, b) {
      return Number(a) + Number(b); // explicit casting
    },
    mul(a, b) {
      return a * b; // implicit casting
    },
    addf(x) {
      return (y) => this.add(x, y);
    },
    applyf(func) {
      return (x) => (y) => func(x, y);
    },
    reset_addf() {
      this.addf_y = null;
      this.addf_func = null;
      this.addf_result = null;
    },
  },
};
</script>
  
<style lang="scss" scoped>
li .red {
  color: red;
}

select {
  padding: 0 0.3vw 0 0.3vw;
}
</style>