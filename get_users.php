<?php
require('./conexion.php');

$listado = $mysqli->query("SELECT * FROM usuario");

$array = $listado->fetch_all(MYSQLI_ASSOC);
$resp = json_encode($array);
echo $resp;