<template>
  <h1>Responsiv mit Flexbox Desktop-First</h1>
  <p>
    Spielen Sie zunächst das
    <a href="http://flexboxfroggy.com/#de">Flexbox Froggy-Spiel</a>, um Flexbox
    zu lernen.
  </p>
  <p>
    Implementieren Sie dann ausschließlich mit HTML und CSS Flexbox folgendes
    responsive Webdesign nach der Desktop-First-Strategie.
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
    <div class="sidebar-body-footer">
      <div class="sidebar-body">
        <div class="sidebar"></div>
        <div class="body"></div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$ipad-width: "1000px";  // these values are only approximation
$phone-width: "700px";
.main-container {
  border: 25px solid grey;
  border-radius: 30px;
  padding: 2vw 5vw 2vw 5vw;
  min-height: 150vh;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  gap: 2vw;

  @media (max-width: $phone-width) {
    gap: 0;
    padding: 0;
  }

  * {
    gap: 1vw;

    @media (max-width: $ipad-width) {
      gap: 0.5vw;
    }

    @media (max-width: $phone-width) {
      gap: 0;
    }
  }

  .header {
    flex: 1 1 auto;
    background-color: red;
  }

  .sidebar-body-footer {
    flex: 2 2 auto;
    display: flex;
    flex-direction: row;

    @media (max-width: $ipad-width) {
      flex: 6 6 auto;
      flex-direction: column;
    }

    @media (max-width: $phone-width) {
      flex: 10 10 auto;
    }

    .sidebar-body {
      display: flex;
      flex-direction: row;
      flex: 4 4 auto;

      @media (max-width: $ipad-width) {
        flex: 6 6 auto;
      }

      @media (max-width: $phone-width) {
        flex-direction: column;
        flex: 9 9 auto;
      }

      .sidebar {
        flex: 1 1 auto;
        background-color: green;
      }

      .body {
        flex: 3 3 auto;
        background-color: blue;

        @media (max-width: $phone-width) {
          flex: 8 8 auto;
        }
      }
    }

    .footer {
      flex: 1 1 auto;
      background-color: violet;
    }
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
    .phone, .desktop{
        visibility: hidden;
        width: 0;
    }

    .tablet {
        visibility: visible;
        width: auto;
    }
  }

  @media (max-width: $phone-width) {
    .desktop, .tablet{
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