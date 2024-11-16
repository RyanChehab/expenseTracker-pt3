<?php
session_start();
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