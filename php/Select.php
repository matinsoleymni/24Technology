<?php

/* This file NOT USE -> For the future */

require_once('installation/config.php');
try {
    $stmt = $conn->query("SELECT * FROM data WHERE id=$id");
    while($rows = $stmt->fetch()){
        echo json_encode($rows);
    }

}catch (PDOException $e){
    echo 'Select false';

}