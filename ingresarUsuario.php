<?php
    require('./conexion.php');

    $nomb = $_POST['nombre'];
    $emp = $_POST['empresa'];
    $tel = $_POST['tel'];
    $em = $_POST['email'];
    $pr = $_POST['provi'];
    $comen = $_POST['comentarios'];

    $consulta = $mysqli->query("INSERT INTO usuario(nombre_usuario, empresa, telefono, email, comentario, provincia) VALUES ('$nomb','$emp',$tel,'$em','$comen', '$pr')");
    echo $consulta;
    

?>