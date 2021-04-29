<?php
require('./conexion.php');

$id = $_POST['idSeleccionado'];

$montania = $mysqli->query("SELECT * FROM montania WHERE id='$id'");

$array = $montania->fetch_all(MYSQLI_ASSOC);
$resp = json_encode($array);
echo  $resp;