<?php
include 'config.php';
include 'cor.php';

header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$user_id = $data['user_id']; // Get the user ID from the request body
$first_name = $data['first_name'];
$middle_name = $data['middle_name'];
$last_name = $data['last_name'];
$suffix = $data['suffix'];
$dob = $data['date_of_birth'];
$gender = $data['gender'];
$email = $data['email_address'];
$phone = $data['contact_number'];
$address = $data['home_address'];

// Check if the profile already exists
$sql_check = "SELECT * FROM `student` WHERE `user_id` = ?";
$stmt_check = $conn->prepare($sql_check);
$stmt_check->bind_param("i", $user_id);
$stmt_check->execute();
$result_check = $stmt_check->get_result();

if ($result_check->num_rows > 0) {
    // Profile exists, update it
    $sql_update = "UPDATE `student` SET `first_name` = ?, `middle_name` = ?, `last_name` = ?, `suffix` = ?, `date_of_birth` = ?, `gender` = ?, `email_address` = ?, `contact_number` = ?, `home_address` = ? WHERE `user_id` = ?";

    $stmt_update = $conn->prepare($sql_update);
    $stmt_update->bind_param("sssssssssi", $first_name, $middle_name, $last_name, $suffix, $dob, $gender, $email, $phone, $address, $user_id);
    if ($stmt_update->execute()) {
        echo json_encode(["success" => "Profile updated successfully"]);
    } else {
        echo json_encode(["error" => "Failed to update profile"]);
    }
    $stmt_update->close();
} else {
    // Profile does not exist, insert a new one
    $sql_insert = "INSERT INTO `student` (`user_id`, `first_name`, `middle_name`, `last_name`, `suffix`, `date_of_birth`, `gender`, `email_address`, `contact_number`, `home_address`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt_insert = $conn->prepare($sql_insert);
    $stmt_insert->bind_param("isssssssss", $user_id, $first_name, $middle_name, $last_name, $suffix, $dob, $gender, $email, $phone, $address);
    if ($stmt_insert->execute()) {
        echo json_encode(["success" => "Profile created successfully"]);
    } else {
        echo json_encode(["error" => "Failed to create profile"]);
    }
    $stmt_insert->close();
}

$stmt_check->close();
$conn->close();
?>
