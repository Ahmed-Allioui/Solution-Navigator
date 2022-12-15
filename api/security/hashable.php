<?php

function hash_with_salt($text) {
    $salt = "xXCgx§%$(DF=DFG]SdgrDFufu@FJ?*dfhdgdg";
    return hash("sha384", $text . $salt);
}

?>