<?php
require('./conexion.php');
include('./head.php');

$listado = $mysqli->query("SELECT * FROM usuario");

?>

<body>
    <div class="container-fluid d-flex justify-content-center align-items-center">
        <div class="row">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Empresa</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Email</th>
                        <th scope="col">Comentario</th>
                    </tr>
                </thead>
                <tbody id="tbody-pagina">

                </tbody>
            </table>
            <button type="button" class="btn btn-primary boton-paginacion boton-izq" id="ant"
                value="1">Anterior</button>
            <button type="button" class="btn btn-primary boton-paginacion boton-der" id="sig"
                value="1">Siguiente</button>
        </div>
    </div>
</body>

<?php include('./footer.php') ?>