<?php
require('./conexion.php');

$pagina = $_POST['paginacion'];

$listado = $mysqli->query("SELECT * FROM usuario LIMIT $pagina, 5");

$array = $listado->fetch_all(MYSQLI_ASSOC);
$resp = json_encode($array);
echo $resp;