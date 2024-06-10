<?php
include 'config.php';
include 'cor.php';

header("Content-Type: application/json");

session_start();
var_dump($_SESSION);
echo json_encode([
    "loggedIn" => $_SESSION['loggedIn'],
    "user_id" => $_SESSION['user_id'],
    "role" => $_SESSION['role'],
    "var_dump" => var_dump($_SESSION)
]);
