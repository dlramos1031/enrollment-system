<?php
include 'config.php';
include 'cor.php';

header("Content-Type: application/json");

$data = json_decode(file_get_contents('php://input'), true);

$user_id = $data['user_id'];
$program_id = $data['program_id'];
$student_type = $data['student_type'];

// Get student_id from user_id
$sql_student_id = "SELECT `student_id` FROM `student` WHERE `user_id` = ?";
$stmt_student_id = $conn->prepare($sql_student_id); 
$stmt_student_id->bind_param("i", $user_id);
$stmt_student_id->execute();
$result_student_id = $stmt_student_id->get_result();
$student_id_row = $result_student_id->fetch_assoc();
$student_id = $student_id_row['student_id'];

if (!$student_id) {
    echo json_encode(['success' => false, 'message' => 'Student ID not found for given User ID.']);
    exit();
}

// Check if there's already a pending application
$sql_check_pending = "SELECT `application_id` FROM `application` WHERE `student_id` = ? AND `application_status` = 0";
$stmt_check_pending = $conn->prepare($sql_check_pending);
$stmt_check_pending->bind_param("i", $student_id);
$stmt_check_pending->execute();
$stmt_check_pending->store_result();

if ($stmt_check_pending->num_rows > 0) {
    echo json_encode(['success' => false, 'message' => 'You already have a pending application.']);
    $stmt_check_pending->close();
    $conn->close();
    exit();
}
$stmt_check_pending->close();

$application_status = 1;  // Pending application

$sql = "INSERT INTO `application` (`student_id`, `program_id`, `student_type`, `application_status`) 
        VALUES (?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("iisi", $student_id, $program_id, $student_type, $application_status);

$response = [];
if ($stmt->execute()) {
    $response['success'] = true;
    $response['message'] = 'Application submitted successfully.';
} else {
    $response['success'] = false;
    $response['message'] = 'Failed to submit application.';
}

echo json_encode($response);

$stmt->close();
$conn->close();
?>
