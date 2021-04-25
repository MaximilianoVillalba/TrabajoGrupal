<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Trabajo Práctico 2 - PWA</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 
        CSS Y BOOTSTRAP    
        -->
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/style.css">
    <!--
        FUENTE y voy a pushear
      -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;400;500;600&display=swap" rel="stylesheet">
</head>

<header>
    <!-- 
        ENCABEZADO
     -->
    <div id="encabezado">
        <div class="row">
            <div class="col-2">
                <img id="img-logo" src="img/hiking.png" alt="Trekking">
            </div>
            <div class="col-5 offset-2 centrado">
                <h1>
                    <strong>Trekking</strong>
                    <small class="text-muted">excursionismo en la patagonia</small>
                </h1>
            </div>

        </div>
    </div>
    <!-- 
        BARRA DE NAVEGACION
     -->
    <nav class="navbar navbar-light bg-light d-block">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="./index.php">Inicio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="./tabs.php">Tabs</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="./columnas.php">Columnas</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="./ejercicio4.php">Ejercicio 4</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="./ejercicio5.php">Ejercicio 5</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="./ejercicio6.php">Ejercicio 6</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Practico Ajax
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                    <li><a class="dropdown-item" href="./selects.php">Selects</a></li>
                    <li><a class="dropdown-item" href="./registro.php">Formulario</a></li>
                    <li><a class="dropdown-item" href="./listado.php">Listado</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</header>