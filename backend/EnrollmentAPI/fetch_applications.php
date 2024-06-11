<?php
include 'config.php';
include 'cor.php';

header("Content-Type: application/json");

$role = $_GET['role'];
$status = null;

// Determine the application status based on the user role
switch ($role) {
    case '2': // Admission Staff
        $status = 0;
        break;
    case '3': // Department Head
        $status = 1;
        break;
    case '4': // Registrar
        $status = 2;
        break;
    case '5': // Admin Staff (Confirmation)
        $status = 3;
        break;
    default:
        // Handle other roles or invalid role
        echo json_encode([]);
        exit();
}

$query = "
    SELECT 
        a.application_id,
        s.student_id,
        CONCAT(s.first_name, ' ', IFNULL(CONCAT(s.middle_name, ' '), ''), s.last_name, IFNULL(CONCAT(' ', s.suffix), '')) AS full_name,
        s.email_address AS email,
        s.contact_number AS phone,
        a.application_date,
        p.name AS program_name,
        a.student_type
    FROM 
        application a
    JOIN 
        student s ON a.student_id = s.student_id
    JOIN 
        program p ON a.program_id = p.program_id
    WHERE 
        a.application_status = ?
";

$stmt = $conn->prepare($query);
$stmt->bind_param("i", $status);
$stmt->execute();
$result = $stmt->get_result();

$applications = [];
while ($row = $result->fetch_assoc()) {
    $applications[] = $row;
}

// Ensure applications is always an array
echo json_encode($applications);
$stmt->close();
$conn->close();
?>
