<template>
  <h1>Responsiv mit Grid Mobile-First</h1>
  <p>
    Spielen Sie zunächst das
    <a href="https://cssgridgarden.com/#de">Grid Garden-Spiel</a>, um Grid
    Layout zu lernen.
  </p>
  <p>
    Implementieren Sie dann das gleiche responsive Webdesign wie in Aufgabe 3.1
    allerdings mit Grid und der Mobile-First-Strategie. Vermeiden Sie außerdem
    das Erscheinen von horizontalen Scrollbars so weit wie möglich.
  </p>
  <img
    src="./img/img-3-1-example.jpg"
    alt="Responsive Design"
    class="example"
  />
  <h3>Antwort</h3>
  <div class="titel">
    <div class="desktop">Desktop</div>
    <div class="tablet">Tablet</div>
    <div class="phone">Phone</div>
  </div>
  <div class="main-container">
    <div class="header"></div>
    <div class="sidebar"></div>
    <div class="body"></div>
    <div class="footer"></div>
  </div>
</template>
  
<style lang="scss" scoped>
$ipad-width: "1000px"; // these values are only approximation
$phone-width: "700px";
.main-container {
  border: 25px solid grey;
  border-radius: 30px;
  min-height: 150vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 8fr 1fr;
  grid-template-areas:
    "header"
    "sidebar"
    "body"
    "footer";
  @media screen and (min-width: $phone-width) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 4fr 1fr;
    grid-template-areas:
      "header header"
      "sidebar body"
      "footer footer";
      gap: 0.5vw;
      padding: 2vw 5vw 2vw 5vw;
  }

  @media screen and (min-width: $ipad-width) {
    grid-template-columns: 2fr 5fr 2fr;
    grid-template-rows: 1fr 2fr;
    grid-template-areas:
      "header header header"
      "sidebar body footer";
      gap: 1vw;
  }
  .header {
    grid-area: header;
    background-color: red;
  }
  .body {
    grid-area: body;
    background-color: blue;
  }
  .sidebar {
    grid-area: sidebar;
    background-color: green;
  }
  .footer {
    grid-area: footer;
    background-color: violet;
  }
}

div.titel {
  display: flex;
  flex-direction: row;
  align-self: center;
  font-weight: bold;
  padding: 1vw;

  .tablet,
  .phone {
    visibility: hidden;
    width: 0;
  }

  .desktop {
    visibility: visible;
    width: auto;
  }

  @media (max-width: $ipad-width) {
    .phone,
    .desktop {
      visibility: hidden;
      width: 0;
    }

    .tablet {
      visibility: visible;
      width: auto;
    }
  }

  @media (max-width: $phone-width) {
    .desktop,
    .tablet {
      visibility: hidden;
      width: 0;
    }

    .phone {
      visibility: visible;
      width: auto;
    }
  }
}

img.example {
  align-self: center;
  max-width: 350px;
}
</style>