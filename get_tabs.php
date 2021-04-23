<?php
require('./conexion.php');

$montanias = $mysqli->query("SELECT * FROM montania");

$array = $montanias->fetch_all(MYSQLI_ASSOC);
$resp = json_encode($array);
echo  $resp;