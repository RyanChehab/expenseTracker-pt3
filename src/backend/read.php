<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
include 'connection.php';
$user_id=3;

// if ($_SERVER["REQUEST_METHOD"]=="POST"){
    $sql="SELECT * FROM transactions where user_id = ?";
    
    $stmt = $connection->prepare($sql);

    $stmt->bind_param('i',$user_id);

    $stmt->execute();

    $result = $stmt->get_result();

    $transactions = [];

    while($row = $result->fetch_assoc()){
        $transactions[] = $row;
    }   
    echo json_encode($transactions);
// } else{
//     $response = ["message" => "No transactions"];
//     echo json_encode($response);
// }