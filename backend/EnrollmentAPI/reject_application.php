<?php
include 'config.php';
include 'cor.php';

header("Content-Type: application/json");

$input = json_decode(file_get_contents('php://input'), true);
$application_id = $input['id'];

$query = "DELETE FROM application WHERE application_id = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param('i', $application_id);

$response = [];
if ($stmt->execute()) {
    $response['status'] = 'success';
} else {
    $response['status'] = 'error';
    $response['message'] = 'Unable to reject application';
}

echo json_encode($response);
$stmt->close();
$conn->close();
?>
