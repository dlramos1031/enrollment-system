<?php
include 'config.php';
include 'cor.php';

header("Content-Type: application/json");

$sql = "SELECT `dept_id`, `name` FROM `department`";
$stmt = $conn->prepare($sql);
$stmt->execute();
$result = $stmt->get_result();

$departments = [];
while ($row = $result->fetch_assoc()) {
    $departments[] = [
        'dept_id' => $row['dept_id'],
        'name' => $row['name'],
    ];
}

echo json_encode($departments);

$stmt->close();
$conn->close();
?>
