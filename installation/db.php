<?php
/* make DataBase */
$ServerName   = 'localhost';
$UserName     = 'root';
$Password     = '';

try {
    $conn = new PDO("mysql:host=$ServerName", $UserName , $Password);
    $conn->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);
    $sql = "CREATE DATABASE JS"; // <- Enter DB name 
    $conn->exec($sql);
    echo 'true';
}catch (PDOException $e){
    echo 'false';
}

$conn = null;