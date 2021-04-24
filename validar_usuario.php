<?php
require('./conexion.php');

$usuario = $_POST['valor'];

$validacion = $mysqli->query("SELECT COUNT(nombre_usuario) FROM usuario WHERE nombre_usuario='$usuario'");
$num = $validacion->fetch_row();
print_r($num[0]);