<?php
require('./conexion.php');

$pagina = $_POST['paginacion'];

$conca = "SELECT * FROM usuario LIMIT $pagina, 4";

$listado = $mysqli->query("SELECT * FROM usuario LIMIT $pagina, 5");

$array = $listado->fetch_all(MYSQLI_ASSOC);
$resp = json_encode($array);
echo $resp;