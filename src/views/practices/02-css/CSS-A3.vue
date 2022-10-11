<template>
  <h1>Wireframe mit HTML und CSS</h1>
  <p class="question">Gegeben ist folgendes HTML-Wireframe:</p>
  <img src="./survey.png" alt="Survey Bild" />
  <br />
  <p class="question">
    Mit welchem HTML- und CSS-Code kann man diesen Wireframe exakt nachbilden?
    Schreiben Sie Ihren CSS-Code direkt in die HTMLDatei.
  </p>
  <p>
    Hinweis zu den Farben: Die DevTools von Firefox enthalten eine Pipette
    namens Eyedropper, mit der man die Farben aus einer Webseite auslesen kann.
    Die grünliche Farbe im Rahmen des Wireframes ist demnach #b2d6d1.
  </p>
  <p>
    Hinweis zu den Schriften (Fonts): Die größte Sammlung an "kostenlosen"
    Web-Schriften stammt von Google und ist unter Google Fonts zu finden. Wer
    lieber aus dem Vorrat an vorhanden Schriften auswählt, wird unter websichere
    Schriften fündig.
  </p>
  <h4>Antwort:</h4>
  <div
    style="
      display: flex;
      flex-direction: column;
      min-height: 55vw;
      background-color: #b2d6d1;
    "
  >
    <div
      style="
        height: 6vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      "
    >
      <div
        style="
          font-family: Martel Sans, sans-serif;
          font-weight: bold;
          font-size: 2.5vw;
        "
      >
        Survey Form
      </div>
    </div>
    <div
      style="
        display: flex;
        flex-direction: row;
        align-items: stretch;
        flex-grow: 1;
      "
    >
      <div style="width: 3vw"></div>
      <div style="flex-grow: 1; background-color: #fff"></div>
      <div style="width: 4vw"></div>
    </div>
  </div>
  <br />
  <br />
  <p class="question">
    Was war in der Lösung dieser Aufgabe die größte Schwierigkeit und wie haben
    Sie diese gelöst?
  </p>
  <h4>Antwort:</h4>
  <p>
    Die größte Schwierigkeit, die ich hatte, war, den Title vertikal zu
    zentrieren. Die Lösung, die ich gefunden habe, war, ein Header zu haben,
    dann kann man den Text drin zentrieren
  </p>

</template>