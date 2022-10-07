<template>
  <h1>HTTP</h1>
  <ol>
    <li class="question">Sie bekommen im Browser den HTTP Status Code 200. Was bedeutet das?</li>
    <p>
      Der HTTP Status Code 200 bedeutet, dass die Kommunikation erfolgreich war.
    </p>
    <li class="question">
      Sie bekommen im Browser den HTTP Status Code 301. Was hat das zu bedeuten?
    </li>
    <p>
      Der HTTP Status Code 301 bedeutet, dass eine URL dauerhaft umgezogen ist
      und durch eine neue ersetzt wurde.
    </p>
    <li class="question">
      Sie bekommen im Browser den HTTP Status Code 400. Was hat das zu bedeuten?
      Was können Sie dagegen tun?
    </li>
    <p>Der HTTP Status Code 301 bedeutet, dass die Anfrage fehlerhaft war.</p>
    <p>
      In dem Falle muss man noch prüfen, ob die URL korrekt ist und ob die
      ausgewählte Methode unterstützt wird.
    </p>
    <li class="question">
      Sie bekommen im Browser den HTTP Status Code 403. Was hat das zu bedeuten?
      Was können Sie dagegen tun?
    </li>
    <p>
      Der HTTP Status Code 301 bedeutet, dass der User keine Berechtigung hat.
    </p>
    <p>
      In dem Falle muss man sicher sein, dass man die Anmeldedaten richtig
      eingegeben wurden, wie zB. Username & Password.
    </p>
    <li class="question">
      In einer Webanwendung benötigen Sie eine OPTIONS-Anfrage, die die Optionen
      des Servers vor dem eigentlichen Zugriff erfragen soll. Aus
      Performanzgründen soll die Abfrage jedoch cacheable sein. Wie könnten Sie
      dafür eine Lösung angehen?
    </li>
    <p>
      Wenn die Abfrage cacheable sein soll, konnte man die Head-Methode
      aufrufen. Sie ist zwar cacheable, aber liefert nur die Information über
      die Get-Methode.
    </p>
  </ol>
</template>