<?php
$servername = "localhost";
$username = "root";
$dbname = "fadein"; //my_pfunibg
$password = null;
$error = false;

$connessione = new mysqli($servername, $username, $password, $dbname);


if ($connessione->connect_error) {
    die("Connection failed: " . $connessione->connect_error);
}

?>