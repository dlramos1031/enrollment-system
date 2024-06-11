<?php
include 'config.php';
include 'cor.php';

header("Content-Type: application/json");

// We only need to get profiles with role 0 (Guest)
$role = 0;

$sql = "SELECT s.student_id, s.first_name, s.middle_name, s.last_name, s.suffix, s.contact_number, s.email_address, s.home_address, u.role, u.user_id
        FROM student s 
        JOIN user u ON s.user_id = u.user_id 
        WHERE u.role = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $role);
$stmt->execute();
$result = $stmt->get_result();

$profiles = [];
while ($row = $result->fetch_assoc()) {
    $profiles[] = [
        'student_id' => $row['student_id'],
        'first_name' => $row['first_name'],
        'middle_initial' => substr($row['middle_name'], 0, 1),
        'last_name' => $row['last_name'],
        'suffix' => $row['suffix'],
        'contact_number' => $row['contact_number'],
        'email_address' => $row['email_address'],
        'home_address' => $row['home_address'],
        'role' => $row['role'],
        'user_id' => $row['user_id']
    ];
}

echo json_encode($profiles);

$stmt->close();
$conn->close();
?>
