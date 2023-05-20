<?php

require_once('config.php');


try {
    $sql = "CREATE DATABASE JS";
    $conn->exec($sql);
    echo true;
}
catch (ErrorException $error){
    echo $error->getMessage();
}

$conn = null;