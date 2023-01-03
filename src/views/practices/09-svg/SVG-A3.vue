<template>
  <h1>Interaktive SVG Grafik</h1>
  <p class="question">
    In dieser Aufgabe implementieren wir das Spiel Tic-Tac-Toe als HTML-Datei
    mit Inline SVG, CSS und JS.
  </p>
  <h3>Ergebnis:</h3>
  <div class="main-container">
    <div class="score">
      <div class="border">Spieler 1 </div>
      <div class="border">{{ scoreFirstPlayer }} : {{ scoreSecondPlayer }}</div>
      <div class="border">Spieler 2</div>
    </div>
    <div class="player-turn"><strong>{{ actualPlayerName() }} is dran</strong></div>
    <div id="game-container">
    </div>
    <div :style="{ visibility: gameEndedWithWin ? 'visible' : 'hidden' }" id="result"><strong>{{ winner() }} hat
        gewonnen</strong></div>
    <button :style="{ visibility: gameEndedWithWin || gameEndedWithoutWin ? 'visible' : 'hidden' }" class="primary"
      @click="init">erneut spielen</button>

  </div>

</template>

<script>
export default {
  data() {
    return {
      scoreFirstPlayer: 0,
      scoreSecondPlayer: 0,
      gameEndedWithWin: false,
      gameEndedWithoutWin: false,
      gameEnded: false,
      svgns: "http://www.w3.org/2000/svg",
      boardSize: 90,
      firstPlayerBegin: true,
      firstPlayerTurn: true,
      rectangle: null,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.firstPlayerTurn = this.firstPlayerBegin;
      this.gameEndedWithWin = false;
      this.gameEndedWithoutWin = false;
      this.initRectangle();
      const container = document.getElementById("game-container");
      const svg = this.createSVGElement('svg');
      svg.setAttribute("viewBox", `0 0 ${this.boardSize} ${this.boardSize}`)
      const lineSize = this.boardSize / 3;
      const columnSize = this.boardSize / 3;
      const g = this.createSVGElement('g');
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const x = i * lineSize;
          const y = j * columnSize;
          const item = this.createRect(x, y);
          item.addEventListener("click", () => {
            if (this.rectangle[i][j]) return;
            g.appendChild(
              this.firstPlayerTurn ? this.createCircle(x, y) : this.createCross(x, y)
            );
            this.rectangle[i][j] = this.currentPlayer();
            item.setAttribute("pointer-events", "none");
            this.checkIfTerminated();
            if (this.gameEndedWithWin) {
              this.disableAll();
              this.updateScore();
            }
            if(this.gameEndedWithWin || this.gameEndedWithoutWin) {
              this.switchPlayerTurns();
            }
            else this.firstPlayerTurn = !this.firstPlayerTurn;
          });
          svg.append(item)
        }
      }
      svg.append(g);
      container.innerHTML = null;
      container.append(svg);
    },
    createSVGElement(name) {
      return document.createElementNS(this.svgns, name);
    },
    createRect(x, y) {
      const rect = this.createSVGElement("rect");
      rect.setAttribute("x", x);
      rect.setAttribute("y", y);
      rect.style.width = "30";
      rect.style.height = "30";
      rect.style.fill = "white";
      rect.style.stroke = "black";
      return rect;
    },
    createPath() {
      return this.createSVGElement("path");
    },
    createCross(x, y) {
      const cross = this.createPath();
      cross.setAttribute(
        "d",
        "m " + (x + 8) + "," + (y + 8) + " l 14,14 m -14,0 l 14,-14"
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
        (x + 8) +
        "," +
        (y + 15) +
        " a 7,7 0 1,0 14,0 a 7,7 0 1,0 -14,0"
      );
      circle.setAttribute("id", "circle");
      circle.style.fill = "white";
      circle.style.stroke = "blue";
      circle.style.strokeWidth = "2";
      return circle;
    },
    checkIfTerminated() {
      for (let i = 0; i < 3; i++) {
        this.gameEndedWithWin = this.horizontalLineTerminated(i);
        if (this.gameEndedWithWin) return;
        this.gameEndedWithWin = this.verticalLineTerminated(i);
        if (this.gameEndedWithWin) return;
      }
      if (this.diagonalLineTerminated(1) || this.diagonalLineTerminated(-1)) {
        this.gameEndedWithWin = true;
        return;
      }
      this.gameEndedWithoutWin = this.gameRectangeIsFull();
    },
    gameRectangeIsFull() {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (this.rectangle[i][j] == 0) {
            return false;
          }
        }
        return true;
      }
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
      return this.rectangle[0][1 + i] == this.rectangle[1][1] &&
        this.rectangle[0][1 + i] == this.rectangle[2][1 - i]
        ? this.rectangle[0][1 + i]
        : 0;
    },
    currentPlayer() {
      return this.firstPlayerTurn ? 1 : 2;
    },
    disableAll() {
      const container = document.getElementById("game-container");
      const rectangles = container.querySelectorAll("rect");
      for (let item of rectangles) {
        item.setAttribute("pointer-events", "none");
      }
    },
    updateScore() {
      if (this.firstPlayerTurn) {
        this.scoreFirstPlayer++;
      } else {
        this.scoreSecondPlayer++;
      }
    },
    actualPlayerName() {
      return `Spieler ${this.firstPlayerTurn ? 1 : 2}`
    },
    winner() {
      return this.gameEndedWithWin ? this.actualPlayerName() : '';
    },
    switchPlayerTurns() {
      this.firstPlayerBegin = !this.firstPlayerBegin;
    },
    initRectangle() {
      this.rectangle = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]
    }
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#game-container {
  width: 300px;
}

.score {
  display: flex;
  flex-direction: row;

  .border {
    border: solid var(--dark);
    background-color: var(--dark-alt);
    border-radius: 0;
    color: white;
    padding: 5px 10px;
    margin: 5px;
  }
}

.player-turn {
  margin: 10px;
}

#result {
  color: green;
}
</style>