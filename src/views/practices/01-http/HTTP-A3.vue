<template>
  <h1>HTML-Literatur lesen und Fragen beantworten</h1>
  <p class="question">
    Arbeiten Sie ein HTML-Tutorial durch (<a
      href="https://www.w3schools.com/html"
      >W3Schools</a
    >
    oder <a href="https://wiki.selfhtml.org/wiki/HTML">selfhtml</a>) und
    beantworten Sie dazu folgende Fragen:
  </p>
  <ol>
    <li class="question">Was ist HTML?</li>
    <p>
      Die HyperText Markup Language oder HTML ist die Standard-Markup-Sprache
      für Dokumente, die für die Anzeige in einem Webbrowser entwickelt wurden.
      Es kann durch Technologien wie Cascading Style Sheets (CSS) und
      Skriptsprachen wie JavaScript unterstützt werden.
    </p>
    <li class="question">
      Wie kann man eine geschachtelte geordnete Liste der Schachtelungstiefe 3
      erzeugen?
    </li>
    <p>&lt;ol&gt;</p>
    <p style="margin-left: 1rem">&lt;li&gt;eins&lt;/li&gt;</p>
    <p style="margin-left: 1rem">&lt;li&gt;zwei&lt;/li&gt;</p>
    <p style="margin-left: 1rem">&lt;ol&gt;</p>
    <p style="margin-left: 2rem">&lt;li&gt;zwei.eins&lt;/li&gt;</p>
    <p style="margin-left: 2rem">&lt;ol&gt;</p>
    <p style="margin-left: 3rem">&lt;li&gt;zwei.zwei.eins&lt;/li&gt;</p>
    <p style="margin-left: 2rem">&lt;/ol&gt;</p>
    <p style="margin-left: 1rem">&lt;/ol&gt;</p>
    <p>&lt;/ol&gt;</p>
    <li class="question">Wie ist eine HTML-Tabelle aufgebaut?</li>
    <p>Eine HTML-Tabelle besteht aus verschiedenen Komponenten:</p>
    <p>&lt;tr&gt;: repräsentiert eine Tabellenzeile</p>
    <p>&lt;th&gt;: repräsentiert eine Kopfzelle</p>
    <p>&lt;td&gt;: repräsentiert eine Datenzelle</p>
    <li class="question">Welche Konventionen sollte man bei Pfaden und Dateinamen beachten?</li>
    <p>Die Dateinamen sollen:</p>
    <ul>
      <li>keine Leerzeichen enthalten,</li>
      <li>Nur aus Buchstaben, Zahlen und Bindestriche bestehen</li>
    </ul>
    <li class="question">Wie baut man in HTML ein Menü?</li>
    <p>
      Das &lt;menu&gt;-Tag kommt paarweise vor. Der Inhalt wird zwischen den
      öffnenden (&lt;menu&gt;) und schließenden (&lt;/menu&gt;) Tags
      geschrieben. Es kann eine ungeordnete Liste von Elementen enthalten, die
      durch das HTML-Element &lt;li&gt; dargestellt werden. Es kann Flow-Inhalte
      enthalten, die die zugänglichen Optionen und Befehle beschreiben. Each
      list item in &lt;menu&gt; tag starts with the &lt;li&gt; or the
      &lt;menuitem&gt; elements.
    </p>

    <li class="question">Welche Attribute sollte man bei Bildern wie verwenden?</li>
    <ul>
      <li>alt</li>
      <li>crossorigin</li>
      <li>height</li>
      <li>ismap</li>
      <li>loading</li>
      <li>longdesc</li>
      <li>referrerpolicy</li>
      <li>sizes</li>
      <li>src</li>
      <li>srcset</li>
      <li>usemap</li>
      <li>width</li>
    </ul>
  </ol>
</template>