<?php
include 'config.php';
include 'cor.php';

header("Content-Type: application/json");

$dept_id = $_GET['dept_id'];

$sql = "SELECT `program_id`, `name` FROM `program` WHERE `dept_id` = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $dept_id);
$stmt->execute();
$result = $stmt->get_result();

$programs = [];
while ($row = $result->fetch_assoc()) {
    $programs[] = [
        'program_id' => $row['program_id'],
        'name' => $row['name'],
    ];
}

echo json_encode($programs);

$stmt->close();
$conn->close();
?>
