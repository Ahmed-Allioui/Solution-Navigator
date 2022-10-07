<template>
  <h1>HTML Wireframe</h1>
  <p class="question">Gegeben ist folgendes HTML-Wireframe:</p>
  <img src="./picture-1.4.png" alt="" />
  <p class="question">
    Mit welchem HTML-Code (ohne CSS, nur mit HTML-Tags) kann man diesen
    Wireframe exakt nachbilden? Die beiden Bilder finden Sie z.B. unter
    <a href="https://kaul.inf.h-brs.de/ccm/we/ws22/resources/img/assets/tbl.jpg"
      >TBL</a
    >
    und
    <a
      href="https://kaul.inf.h-brs.de/ccm/we/ws22/resources/img/assets/eich.jpg"
      >Eich</a
    >.
  </p>

  <h1>Übung 1.2: Inventors of the web</h1>
  <ul>
    <li><mark>Tim Berners-Lee</mark>: WWW, HTTP, HTML,URI</li>
    <li>Hakom Lie and Bert Bos: CSS</li>
    <li>Brendan Eich: JavaScript</li>
  </ul>
  <hr />
  <br />
  <h2>Inventors of the WWW</h2>
  <table>
    <tr>
      <td colspan="4"><center>Inventors of the WWW</center></td>
    </tr>
    <tr>
      <td><center>WWW</center></td>
      <td><center>HTML</center></td>
      <td><center>CSS</center></td>
      <td><center>JavaScript</center></td>
    </tr>
    <tr>
      <td>
        <center><mark>Tim Berners-Lee</mark></center>
      </td>
      <td>
        <center><mark>Tim Berners-Lee</mark></center>
      </td>
      <td><center>Hakom Lie and Bert Bos</center></td>
      <td><center>Brendan Eich</center></td>
    </tr>
  </table>
  <br />
  <hr />
  <table>
    <thead>
      <tr>
        <th colspan="3"><center>Inventors of the WWW</center></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="3">
          <center><hr /></center>
        </td>
      </tr>
      <tr>
        <td><center>HTML</center></td>
        <td><center>|</center></td>
        <td><center>JavaScript</center></td>
      </tr>
      <tr>
        <td>
          <center>
            <img
              src="https://kaul.inf.h-brs.de/ccm/we/ws22/resources/img/assets/tbl.jpg"
              alt=""
            />
          </center>
        </td>
        <td><center>|</center></td>
        <td>
          <center>
            <img
              src="https://kaul.inf.h-brs.de/ccm/we/ws22/resources/img/assets/eich.jpg"
              alt=""
            />
          </center>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>
          <center><mark>Tim Berners-Lee</mark></center>
        </td>
        <td><center>|</center></td>
        <td><center>Brendan Eich</center></td>
      </tr>
    </tfoot>
  </table>
  <br />
  <hr />
</template>

<style scoped>
img {
  width: 30%;
  height: 30%;
  align-self: center;
  padding: 2rem;
}
</style>