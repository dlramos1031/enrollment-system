<?php
include 'config.php';
include 'cor.php';

header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['user_id']) && isset($data['role'])) {
    $user_id = $data['user_id'];
    $role = $data['role'];

    $sql = "UPDATE `user` SET `role` = ? WHERE `user_id` = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ii", $role, $user_id);

    if ($stmt->execute()) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["error" => "Failed to update role",
                        "role" => $role]);
    }

    $stmt->close();
} else {
    echo json_encode(["error" => "Invalid input",
                    "role" => $data['role'], "user_id" => $data['user_id']]);
}

$conn->close();
?>
