<?php
include 'config.php';
include 'cor.php';

session_start();
session_unset();
session_destroy();

echo json_encode(["success" => true, "user_id" => $_SESSION]);
