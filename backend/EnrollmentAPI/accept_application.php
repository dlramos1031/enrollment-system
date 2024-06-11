<?php
include 'config.php';
include 'cor.php';

header("Content-Type: application/json");

$input = json_decode(file_get_contents('php://input'), true);
$application_id = $input['id'];
$role = $input['role'];

$status = null;
$student_status = null;

// Determine the new application status based on the user role
switch ($role) {
    case '2': // Admission Staff
        $status = 1; // Admin Staff approved / Pending Dept. Head approval
        break;
    case '3': // Department Head
        $status = 2; // Dept. Head approved / Pending Registrar approval
        break;
    case '4': // Registrar
        $status = 3; // Registrar approved / Application accepted
        $student_status = 2; // Student admitted / not enrolled
        break;
    default:
        $response['status'] = 'error';
        $response['message'] = 'Invalid role';
        echo json_encode($response);
        exit();
}

// Begin transaction
$conn->begin_transaction();

try {
    // Update application status
    $query = "UPDATE `application` SET `application_status` = ? WHERE `application_id` = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param('ii', $status, $application_id);

    if (!$stmt->execute()) {
        throw new Exception('Unable to update application status');
    }

    // Update student status if Registrar approved
    if ($role == '4') {
        // Fetch the student_id associated with the application
        $query = "SELECT `student_id` FROM `application` WHERE `application_id` = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param('i', $application_id);

        if (!$stmt->execute()) {
            throw new Exception('Unable to fetch student_id');
        }

        $result = $stmt->get_result();
        $student = $result->fetch_assoc();
        $student_id = $student['student_id'];

        // Update the student status
        $query = "UPDATE `student` SET `status` = ? WHERE `student_id` = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param('ii', $student_status, $student_id);

        if (!$stmt->execute()) {
            throw new Exception('Unable to update student status');
        }
    }

    // Commit transaction
    $conn->commit();
    $response['status'] = 'success';
} catch (Exception $e) {
    // Rollback transaction in case of error
    $conn->rollback();
    $response['status'] = 'error';
    $response['message'] = $e->getMessage();
}

echo json_encode($response);
$stmt->close();
$conn->close();
?>
