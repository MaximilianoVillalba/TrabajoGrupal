<?php
require('./conexion.php');

$id_provincia = $_POST['valor'];

$montanias = $mysqli->query("SELECT * FROM montania WHERE id_provincia='$id_provincia'");

$array = $montanias->fetch_all(MYSQLI_ASSOC);
$resp = json_encode($array);
echo  $resp;