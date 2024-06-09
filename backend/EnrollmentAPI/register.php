<?php
include 'config.php';
include 'cor.php';

header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);
$username = $data['username'];
$password = $data['password'];
$hashed_password = password_hash($password, PASSWORD_DEFAULT);
$role = 0; 

$sql = "INSERT INTO `user` (`username`, `password`, `role`) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssi", $username, $hashed_password, $role);

if ($stmt->execute()) {
    echo json_encode(["message" => "Registration successful"]);
} else {
    echo json_encode(["message" => "Error: " . $stmt->error]);
}

$stmt->close();
$conn->close();
