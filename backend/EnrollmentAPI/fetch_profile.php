<?php
include 'config.php';
include 'cor.php';

header("Content-Type: application/json");

$user_id = $_GET['user_id']; // Get the user ID from the query parameters

$sql = "SELECT `first_name`, `middle_name`, `last_name`, `suffix`, `date_of_birth`, `gender`, `email_address`, `contact_number`, `home_address` FROM `student` WHERE `user_id` = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $profile = $result->fetch_assoc();
    echo json_encode($profile);
} else {
    echo json_encode(["error" => "Profile not found"]);
}

$stmt->close();
$conn->close();
?>
