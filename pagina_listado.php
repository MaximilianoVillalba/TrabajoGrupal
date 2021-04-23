<?php
require('./conexion.php');

$pagina = $_POST['pagina'];

$conca = "SELECT * FROM usuario LIMIT $pagina, 4";

$listado = $mysqli->query("SELECT * FROM usuario LIMIT $pagina, 4");

$resp = '';

while ($rowListado = $listado->fetch_assoc()) {
    $resp .= '<tr>';
    $resp .= '<td>' . $rowListado['nombre_usuario'] . '</td>';
    $resp .= '<td>' . $rowListado['empresa'] . '</td>';
    $resp .= '<td>' . $rowListado['telefono'] . '</td>';
    $resp .= '<td>' . $rowListado['email'] . '</td>';
    $resp .= '<td>' . $rowListado['comentario'] . '</td>';
    $resp .= '</tr>';
}

echo $resp;