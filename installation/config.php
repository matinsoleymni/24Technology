<?php
/* DB config */
$ServerName   = 'localhost';
$UserName     = 'root';
$Password     = '';
$DatabaseName = 'js';

try {
    $conn = new PDO("mysql:host=$ServerName;dbname=$DatabaseName" , $UserName , $Password);
    $conn->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);
}catch (PDOException $e){
    echo "Error  ".$e->getMessage();
}