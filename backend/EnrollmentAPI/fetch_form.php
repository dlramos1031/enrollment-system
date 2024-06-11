<?php
include 'config.php';
include 'cor.php';

header("Content-Type: application/json");

$user_id = $_GET['user_id']; // Get the user ID from the query parameters

// fetching student ID first
$sql_student_id = "SELECT `student_id` FROM `student` WHERE `user_id` = ?";
$stmt_student_id = $conn->prepare($sql_student_id);
$stmt_student_id->bind_param("i", $user_id);
$stmt_student_id->execute();
$result = $stmt_student_id->get_result();

// fetching application using fetched student ID
$sql_form = "SELECT * FROM `application` WHERE `student_id` = ?";
$stmt_form = $conn->prepare($sql_form);
$stmt_form->bind_param("i", $user_id);
$stmt_form->execute();
$result = $stmt_form->get_result();

if ($result->num_rows > 0) {
    $profile = $result->fetch_assoc();
    echo json_encode($profile);
} else {
    echo json_encode(["error" => "Student not found"]);
}

$stmt_student_id->close();
$conn->close();
?>