<?php

$host = "localhost";
$user = "u469204600_kra";
$pwd = "Database@0";
$db = "u469204600_kra";

/*
$host="localhost";
$user="root";
$pwd="";
$db="sol";
*/

//connect
$con = new mysqli($host, $user, $pwd, $db);
//create connection
if (!$con) {
    die("connection failed : " . mysqli_connect_error());
}
?>
