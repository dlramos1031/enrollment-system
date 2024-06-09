<?php
$sname = "localhost";
$uname = "root";
$pword = "";
$dbname = "enrollment_db";

// Create connection
$conn = new mysqli($sname, $uname, $pword, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
