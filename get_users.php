<?php
require('./conexion.php');

$listado = $mysqli->query("SELECT COUNT(nombre_usuario) as cantidad FROM usuario");
$cant = $listado->fetch_assoc()['cantidad'];

echo $cant;