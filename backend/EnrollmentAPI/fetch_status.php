<?php
include 'config.php';
include 'cor.php';

header("Content-Type: application/json");

$user_id = $_GET['user_id'];

$sql = "SELECT `status` FROM `student` WHERE `user_id` = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $status = $result->fetch_assoc();
    echo json_encode($status);
} else {
    echo json_encode(["error" => "Status not found"]);
}

$stmt->close();
$conn->close();
?>