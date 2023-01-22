<template>
  <h1>Statistik-Balkendiagramm in SVG</h1>
  <p>
    In dieser Aufgaben haben wir ein Balkendiagramm mit HTML, Inline SVG, CSS
    und JavaScript entwickelt. Die Daten für das Balkendiagramm sind im
    JSON-Format gespeichert. Als Beispieldaten sind die
    <a
      href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Fallzahlen.html"
      >COVID-19: Fallzahlen in Deutschland</a
    >, die am 04.12.2022 publiziert wurden.
  </p>
  <h3>
    Der Balkendiagramm representiert die Anzahl der Coronafälle pro Region am
    04.12.2022 in Deutschland.
  </h3>
  <div id="root"></div>
</template>

<script>
export default {
  data() {
    return {
      width: 500,
      heigth: 500,
      yAxisWidth: 45,
      xAxisHeight: 100,
      xMargin: 20,
      statistics: [],
    };
  },
  mounted() {
    (async () => {
      fetch("/ressource/svg/corona.json")
        .then((resp) => resp.json())
        .then((json) => {
          // should be deleted
          this.statistics = json;
          return json;
        })
        .then(this.generateChart);
    })();
  },
  methods: {
    generateChart(data) {
      const svg = this.generateSVG();
      document.getElementById("root").appendChild(svg);
      let max = this.maxValue(data);
      this.generateBarElems(svg, data, max);
      this.generateYAxis(svg, max);
      this.generateXAxis(svg, data);
      return;
    },
    generateSVG() {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("height", `${this.heigth}`);
      svg.setAttribute("width", `${this.width}`);
      svg.setAttribute("viewBox", `0 0 ${this.width} ${this.heigth}`);
      return svg;
    },
    maxValue(data) {
      let max = 0;
      data.forEach((entry) => {
        if (entry.amount > max) max = entry.amount;
      });
      return Math.ceil(max / 10) * 10;
    },
    generateBarElems(svg, data, max) {
      const barCharHeight = this.heigth - this.xAxisHeight;
      const barWidth = this.getBarWidth(data);

      data.forEach((entry, index) => {
        const x = this.yAxisWidth + this.xMargin + index * barWidth;
        const bar = this.generateSVGRect(x, barCharHeight, barWidth * 0.8, 0);
        bar.setAttribute("style", "transition: 0.5s all;");
        bar.setAttribute("fill", `var(--dark-alt)`);
        svg.appendChild(bar);
        setTimeout(() => {
          const h = Math.round((barCharHeight * entry.amount) / max);
          bar.setAttribute("y", barCharHeight - h);
          bar.setAttribute("height", `${h}px`);
        }, 100 * index);
      });
    },
    generateYAxis(svg, max) {
      const barCharHeight = this.heigth - this.xAxisHeight;
      const bar = this.generateSVGRect(this.yAxisWidth, 0, 2, barCharHeight);
      svg.appendChild(bar);
      let numberOfStabs = 5;
      for (let i = 1; i <= numberOfStabs; i++) {
        const coord = Math.round((max / numberOfStabs) * i);
        const pos = Math.round((barCharHeight / numberOfStabs) * i);
        const stab = this.generateSVGRect(
          this.yAxisWidth,
          barCharHeight - pos,
          5,
          2
        );
        svg.appendChild(stab);

        const text = this.generateSVGText(0, barCharHeight - pos + 8, coord);
        svg.appendChild(text);
      }
    },
    generateSVGText(x, y, content) {
      const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      text.setAttribute("x", x);
      text.setAttribute("y", y);
      text.setAttribute("font-size", "10px");
      text.textContent = content;
      return text;
    },
    generateSVGRect(x, y, width, height) {
      const rect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      rect.setAttribute("x", x);
      rect.setAttribute("y", y);
      rect.setAttribute("height", `${height}px`);
      rect.setAttribute("width", `${width}px`);
      return rect;
    },
    generateXAxis(svg, data) {
      const barWidth = this.getBarWidth(data);

      const xAxis = this.generateSVGRect(
        this.yAxisWidth,
        this.heigth - this.xAxisHeight,
        this.width - this.yAxisWidth,
        2
      );
      svg.appendChild(xAxis);

      data.forEach((entry, index) => {
        const x = this.yAxisWidth + this.xMargin + index * barWidth + 10;
        const y = this.heigth - this.xAxisHeight + 5;
        const text = this.generateSVGText(x, y, entry.region);
        text.setAttribute(
          "transform",
          `rotate(45,${this.yAxisWidth + this.xMargin + index * barWidth},${
            this.heigth - this.xAxisHeight
          })`
        );
        svg.appendChild(text);
      });
    },
    getBarWidth(data) {
      const barChartWidth = this.width - this.yAxisWidth;
      return (barChartWidth - 2 * this.xMargin) / data.length;
    },
  },
};
</script>
  
<style lang="scss" scoped>

</style>