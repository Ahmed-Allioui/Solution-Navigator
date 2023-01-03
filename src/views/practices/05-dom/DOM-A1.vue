<template>
  <h1>Performanz-Messungen von DOM-Operationen</h1>
  <h3>Aufgabe</h3>
  <p>Implementieren Sie Performanz-Messungen zum Vergleich von innerHTML, innerText, textContent und outerHTML.
    selbstständig in JavaScript durch Nutzung der DOM-API.</p>
  <h3>Lösung</h3>
  <div id="container">
    <div id="subcontainer"></div>
  </div>
  <table>
    <tr>
      <th></th>
      <th>Zeitmessung (μs)</th>
    </tr>
    <tr>
      <td>innerHTML</td>
      <td>{{ timeInnerHTML }}</td>
    </tr>
    <tr>
      <td>innerText</td>
      <td>{{ timeInnerText }}</td>
    </tr>
    <tr>
      <td>textContent</td>
      <td>{{ timeTextContent }}</td>
    </tr>
    <tr>
      <td>outerHTML</td>
      <td>{{ timeOuterHTML }}</td>
    </tr>
  </table>
  <div></div>
</template>

<script>

const content = `
  This element contains 
  <code>
    code
  </code>
  <p>
    <strong>
      and HTML tags
    </strong>
  </p>
  <div>
    <button>
      and some button
    </button>
  </div>
  `;

export default {
  data() {
    return {
      timeInnerHTML: 0,
      timeInnerText: 0,
      timeTextContent: 0,
      timeOuterHTML: 0
    }
  },
  mounted() {
    const subcontainer = document.getElementById("subcontainer");
    let t1 = performance.now();
    subcontainer.innerHTML = content;
    this.timeInnerHTML = (performance.now() - t1) * 1000;
    let t2 = performance.now();
    subcontainer.innerText = content;
    this.timeInnerText = (performance.now() - t2) * 1000;
    let t3 = performance.now();
    subcontainer.textContent = content;
    this.timeTextContent = (performance.now() - t3) * 1000;
    let t4 = performance.now();
    subcontainer.outerHTML = content;
    this.timeOuterHTML = (performance.now() - t4) * 1000;
  },
};
</script>
  
<style lang="scss" scoped>
#container {
  display: none;
}

table {
  max-width: 500px;
}
</style>