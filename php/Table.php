<?php

require_once('config.php');
try {
    $sql = "CREATE TABLE data (id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY , title VARCHAR(255) NOT NULL , dis VARCHAR(255) NOT NULL , meta VARCHAR(255) NOT NULL )";
    $conn->exec($sql);
    echo 'true';
}catch (PDOException $e){
    echo 'false';

}