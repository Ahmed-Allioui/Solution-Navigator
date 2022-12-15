<?PHP

include(__DIR__.'\..\security\hashable.php');

const SALT = "xXCgx§%$(DF=DFG]SdgrDFufu@FJ?*dfhdgdg";

if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = hash_with_salt($_POST['username']);
    $password = hash_with_salt($_POST['password']);

    if(user_exists($username)) {
        http_response_code(409);
        echo 'Benutzer existiert bereits';
        return false;
    }
    
    $file = __DIR__ . '\..\data\password.csv';
    $new_line = $username . ',' . $password . "\n";
    if (file_put_contents($file, $new_line, FILE_APPEND | LOCK_EX)) {
        echo 'Benutzer erfolgreich registriert!';
    } else {
        echo 'Ein Fehler trat bei der Registrierung auf';
    }
}

function user_exists($username) {
    $lines = file(__DIR__ . '\..\data\password.csv');
    foreach ($lines as $line_num => $line) {
        list($savedUsername, $savedPassword) = explode(",", $line);
        if ($savedUsername == $username) {
            return true;
        }
        return false;
    }
}
?>