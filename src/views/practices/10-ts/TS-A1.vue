<template>
  <h1>Static classes in TypeScript</h1>
  <ol>
    <li>
      <p class="question">Gibt es in TypeScript statische Klassen?</p>
      <p class="question">Antwort</p>
      <p>Typescript enthält statische Member, weil ES6 sie eingefüht hat. Auf die statischen Member einer Klasse wird
        über
        den Klassennamen und die Punktnotation zugegriffen, ohne ein Objekt zu erstellen.
        Dazu können die statischen Elemente mit dem Schlüsselwort static definiert werden. <a
          href="https://www.tutorialsteacher.com/typescript/typescript-static">[source]</a></p>
    </li>
    <li>
      <p class="question">Erläutern Sie den Unterschied
        von TypeScript zu anderen objekt-orientierten, statisch typisierten
        Programmiersprachen wie Java und C# ?</p>
      <p class="question">Antwort</p>
      <table>
        <tr>
          <th>TypeScript</th>
          <th>Statisch typisierten Programmiersprachen wie Java und C#</th>
        </tr>
        <tr>
          <td>Typescript ist nur eine Obermenge des JavaScript</td>
          <td>Sie sind an sich eigene statisch typisierten Programmiersprachen</td>
        </tr>
        <tr>
          <td>TypeScriptist Erweiterung der Sprache JavaScript
            um optionale statische Typisierung und
            Annotationen</td>
          <td>Diese Sprachen sind stark typisiert</td>
        </tr>
        <tr>
          <td>Typescript Kompiler fokussiert bei der Typ-Prüfung
            auf die Struktur der Werte. Der Name der Struktur spielt also keine Rolle. das heißt TypeScript basiert auf "Duck Typing" oder "strukturelle Typisierung"</td>
          <td>Hier spielt den Namen der Struktur eine
            wesentliche Rolle. Das heißt zwei Klassen mit den selben Attributes aber unterschiedlichen Namen werden als
            unterschiedliche Strukturen / Typen betrachtet.</td>
        </tr>
      </table>
    </li>
  </ol>

</template>

<script>

</script>
  
<style lang="scss" scoped>

</style>