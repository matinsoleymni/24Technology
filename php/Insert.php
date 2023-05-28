<?php

require_once('../installation/config.php');
$name = $_REQUEST['name'];
$username = $_REQUEST['username'];
$pass = $_REQUEST['pass'];
$pass = md5($pass);
try {
    $stmt = $conn->query("INSERT INTO `users`(`name` , `username` , `password`) VALUES('$name' , '$username' , '$pass')");
}catch (PDOException $e){
    echo 'false';
}