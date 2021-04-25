<?php
    require('./conexion.php');

    $provincia = $_POST['valor'];

    $consulta = $mysqli->query("SELECT * FROM provincia WHERE nombre LIKE '$provincia%'");
    $resp = 'sugerencias:';

    while ($row = $consulta->fetch_assoc()) {
        $resp .= '<br>';
        $resp .= $row['nombre'];
    }
    $res = '<p>'.$resp.'</p>';
    echo $res;
?>