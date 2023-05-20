<?php

require_once('config.php');

try {
    
    $stmt = $conn->query('SELECT * FROM data');
    while($rows = $stmt->fetch()){
        echo "id: ".$rows['id']."/"."title: ".$rows['title']."/"."dis: ".$rows['dis']."/"."meta: ".$rows['meta'];
    }
}catch (PDOException $e){
    echo "Error  ".$e->getMessage();

}