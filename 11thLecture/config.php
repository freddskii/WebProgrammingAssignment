<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "test";

$pdo = new PDO('mysql:host='.$host.';dbname='.$database, $username, $password);
?>