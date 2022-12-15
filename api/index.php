<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
//header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/login':
        require __DIR__  . "/views/login.php";
        break;
    case '/register':
        require __DIR__  . "/views/register.php";
        break;
}
?>