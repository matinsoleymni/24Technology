<?php



require_once('config.php');
$id = $_REQUEST['id'];
try {
    $stmt = $conn->query("SELECT * FROM data WHERE id=$id");
    while($rows = $stmt->fetch()){
        echo json_encode($rows);
    }

}catch (PDOException $e){
    echo 'Select false';

}