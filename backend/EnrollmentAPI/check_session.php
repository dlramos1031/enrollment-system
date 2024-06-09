<?php
include 'config.php';
include 'cor.php';
session_start();

header("Content-Type: application/json");

if (isset($_SESSION['user_id'])) {
    echo json_encode([
        "loggedIn" => true,
        "user_id" => $_SESSION['user_id'],
        "role" => $_SESSION['role']
    ]);
} else {
    echo json_encode(["loggedIn" => false]);
}
