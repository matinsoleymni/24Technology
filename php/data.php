<?php

require_once('../installation/config.php');
try {
    $stmt = $conn->query("SELECT * FROM users WHERE id=24");
    while($rows = $stmt->fetch()){
        echo json_encode($rows);
    }

}catch (PDOException $e){
    echo 'Select false';

}