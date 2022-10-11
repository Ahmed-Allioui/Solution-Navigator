<template>
  <h1>Responsiv mit Grid</h1>
  <p>
    Implementieren Sie folgende Landing Page responsiv mit Grid Layout.
    Vermeiden Sie auch hier das Erscheinen von horizontalen Scrollbars so weit
    wie möglich.
  </p>
  <img
    src="./img/img-3-3-example.jpg"
    alt="Responsive Design"
    class="example"
  />
  <h3>Antwort</h3>
  <div class="main-container">
    <div class="header">
      <div class="button-container">
        <button>The book series</button>
        <button>Testimonials</button>
        <button>The Author</button>
        <button>Free ressources</button>
      </div>
    </div>
    <div class="navbar">
      <h2 class="titel">You dont know JavaScript</h2>
    </div>
    <div class="sidebar">
      <img src="./img/img-3-1-picture.jpg" alt="" />
    </div>
    <div class="body">
      <p>don't just drift through Javascript</p>
      <p>Understand how Javascript works</p>
      <p>Start your journey through the bumpy side of Javascript</p>
      <button class="orange">ORDER YOUR COPY NOW</button>
    </div>
    <div class="footer">
        <div class="footer-titel">The first ebook in the book series is absolutely free.</div>
        <button class="orange">FIND OUT MORE ABOUT THIS OFFER</button>
    </div>
  </div>
</template>
    
  <style lang="scss" scoped>
$ipad-width: "1000px"; // these values are only approximation
$phone-width: "700px";
$body-color: rgb(237, 236, 226);
.main-container {
  max-width: 700px;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto auto;
  grid-template-areas:
    "header"
    "navbar"
    "sidebar"
    "body"
    "footer";
  @media screen and (min-width: $phone-width) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      "header header"
      "navbar navbar"
      "sidebar body"
      "footer footer";
  }

  @media screen and (min-width: $ipad-width) {
    grid-template-columns: 2fr 3fr;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      "header header"
      "navbar navbar"
      "sidebar body"
      "footer footer";
  }
  .header {
    grid-area: header;
    background-color: rgb(46, 45, 45);

    .button-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      button {
        color: white;
        padding: 1vw;
      }
    }
  }
  .navbar {
    grid-area: navbar;
    background-color: $body-color;
    .titel {
      text-align: center;
      padding: 2vw 0 1vw 0;
    }
  }
  .body {
    padding: 5vw 0 5vw 0;
    grid-area: body;
    background-color: $body-color;
    display: flex;
    flex-direction: column;

    > * {
      align-self: center;
      padding: 1vw;
      text-align: center;
    }
    button.orange {
      padding-left: 5vw;
      padding-right: 5vw;
    }
  }
  .sidebar {
    grid-area: sidebar;
    background-color: $body-color;
    padding: 2vw;
    img {
      border: 1px solid black;
      border-radius: 0.5vw;
    }
  }
  .footer {
    grid-area: footer;
    background-color: black;
    display: flex;
    flex-direction: column;
    > * {
        align-self: center;
    }

    .footer-titel {
        color: white;
        text-align: center;
        padding: 2vw 1vw 0.2vw 1vw;
    }

    button.orange {
        padding-left: 7vw;
        padding-right: 7vw;
    }
  }

  button.orange {
    background-color: orange;
    padding: 0.5vw;
    border-radius: 0.5vw;
    color: white;
    margin: 1vw;
  }
}

img.example {
  align-self: center;
  max-width: 700px;
}
</style>