<?php
include('./head.php');
?>

<body>
    <main class="container-fluid d-flex justify-content-center align-items-center main-margin">
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
            <div class="d-md-block col-3 mx-auto">
                <button type="button" class="btn btn-primary boton-paginacion boton-izq" id="ant">Anterior</button>
                <button type="button" class="btn btn-secondary" id="paginaActual" value="1" disabled>1</button>
                <button type="button" class="btn btn-primary boton-paginacion boton-der" id="sig">Siguiente</button>
            </div>
        </div>
    </main>
</body>

<?php include('./footer.php') ?>