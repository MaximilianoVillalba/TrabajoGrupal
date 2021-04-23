<?php
require('./conexion.php');

$provinces = $mysqli->query("SELECT * FROM provincia");

$array = $provinces->fetch_all(MYSQLI_ASSOC);
$resp = json_encode($array);
echo  $resp;