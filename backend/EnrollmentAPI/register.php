<?php
include 'config.php';
include 'cor.php';

header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

// Handles empty fields
if(empty($data['username']) || empty($data['password'])) {
    echo json_encode(['error' => 'Fill up empty fields']);
    exit(0);
}

$username = $data['username'];
$password = $data['password'];
$hashed_password = password_hash($password, PASSWORD_DEFAULT);
$role = 0; // Default role is Guest

$sql = "INSERT INTO `user` (`username`, `password`, `role`) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssi", $username, $hashed_password, $role);

if ($stmt->execute()) {
    echo json_encode(["success" => "Registration successful"]);
} else {
    echo json_encode(["error" => "Error: " . $stmt->error]);
}

$stmt->close();
$conn->close();
