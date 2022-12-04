<template>
  <h1>Interaktive SVG Grafik</h1>
  <p class="question">
    In dieser Aufgabe implementieren wir das Spiel Tic-Tac-Toe als HTML-Datei
    mit Inline SVG, CSS und JS.
  </p>
  <h3>Ergebnis:</h3>
  <div class="game-container">
    <svg viewBox="0 0 90 90">
      <defs>
        <rect id="rect" width="30" height="30" fill="white" stroke="black" />
        <path
          d="m 8,15 a 7,7 0 1,0 14,0 a 7,7 0 1,0 -14,0"
          id="circle"
          fill="white"
          stroke="black"
          stroke-width="1"
        />
        <path
          d="m 8,8 l 14,14 m -14,0 l 14,-14"
          id="cross"
          fill="white"
          stroke="black"
          stroke-width="1"
        />
      </defs>
      <g class="container">
        <rect width="90" height="90" fill="white" stroke="black" />
        <g id="0"><use href="#rect" /></g>
        <g transform="translate(0,0)" id="1"><use href="#rect" x="30" /></g>
        <g id="2"><use href="#rect" x="60" /></g>
        <g id="3"><use href="#rect" y="30" /></g>
        <g id="4"><use href="#rect" y="30" x="30" /></g>
        <g id="5"><use href="#rect" y="30" x="60" /></g>
        <g id="6"><use href="#rect" y="60" /></g>
        <g id="7"><use href="#rect" y="60" x="30" /></g>
        <g id="8"><use href="#rect" y="60" x="60" /></g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstPlayer: true,
      rectangle: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      for (let i = 0; i < 9; i++) {
        const item = document.getElementById(i);
        const x = i % 3;
        const y = (i - x) / 3;
        item.addEventListener("click", () => {
          if (this.rectangle[x][y]) return;
          item.appendChild(
            this.firstPlayer ? this.createCircle(x, y) : this.createCross(x, y)
          );
          this.rectangle[x][y] = this.currentPlayer();
          item.setAttribute("pointer-events", "none");
          let terminated = this.gameTerminated();
          if(terminated) {
            this.disableAll();
          }
          else this.firstPlayer = !this.firstPlayer;
        });
      }
    },
    createPath() {
      return document.createElementNS("http://www.w3.org/2000/svg", "path");
    },
    createCross(x, y) {
      const cross = this.createPath();
      cross.setAttribute(
        "d",
        "m " + (x * 30 + 8) + "," + (y * 30 + 8) + " l 14,14 m -14,0 l 14,-14"
      );
      cross.setAttribute("id", "cross");
      cross.style.fill = "white";
      cross.style.stroke = "red";
      cross.style.strokeWidth = "2";
      return cross;
    },
    createCircle(x, y) {
      const circle = this.createPath();
      circle.setAttribute(
        "d",
        "m " +
          (x * 30 + 8) +
          "," +
          (y * 30 + 15) +
          " a 7,7 0 1,0 14,0 a 7,7 0 1,0 -14,0"
      );
      circle.setAttribute("id", "circle");
      circle.style.fill = "white";
      circle.style.stroke = "blue";
      circle.style.strokeWidth = "2";
      return circle;
    },
    gameTerminated() {
      let terminated;
      for (let i = 0; i < 3; i++) {
        terminated = this.horizontalLineTerminated(i);
        if (terminated) return terminated;
        terminated = this.verticalLineTerminated(i);
        if (terminated) return terminated;
      }
      terminated = this.diagonalLineTerminated(1);
      if (terminated) return terminated;
      return this.diagonalLineTerminated(-1);
    },
    horizontalLineTerminated(i) {
      return this.rectangle[i][0] == this.rectangle[i][1] &&
        this.rectangle[i][0] == this.rectangle[i][2]
        ? this.rectangle[i][0]
        : 0;
    },
    verticalLineTerminated(i) {
      return this.rectangle[0][i] == this.rectangle[1][i] &&
        this.rectangle[0][i] == this.rectangle[2][i]
        ? this.rectangle[0][i]
        : 0;
    },
    diagonalLineTerminated(i) {
      return this.rectangle[0][1+i] == this.rectangle[1][1] &&
        this.rectangle[0][1+i] == this.rectangle[2][1-i]
        ? this.rectangle[0][1+i]
        : 0;
    },
    currentPlayer() {
      return this.firstPlayer ? 1 : 2;
    },
    disableAll() {
      for (let i = 0; i < 9; i++) {
        const item = document.getElementById(i);
        item.setAttribute("pointer-events", "none");
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.game-container {
  width: 300px;
}
</style>