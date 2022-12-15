<?php

include(__DIR__.'\..\security\hashable.php');

if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = hash_with_salt($_POST['username']);
    $password = hash_with_salt($_POST['password']);

    $lines = file(__DIR__ . '\..\data\password.csv');
    foreach ($lines as $line_num => $line) {
        list($savedUsername, $savedPassword) = explode(",", $line);
        $savedPassword = str_replace("\n", "", $savedPassword);
        if ($savedUsername == $username && $savedPassword == $password) {
            echo 'Anmeldedaten sind korrekt';
            return true;
        }
    }
    http_response_code(401);
    echo 'Anmeldedaten sind falsch';
    return false;
}

?>