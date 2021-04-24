<?php include('./head.php') ?>

<body>
    <div class="container d-flex justify-content-center align-items-center">
        <div class="col-md-12">
            <h1 class="text-center">Formulario de Registro</h1>
            <div id="form" class="row">
                <form id="formularioUsuario">
                    <div class="form-floating mb-3">
                        <label for="floatingInput" class="imputs">Nombre</label>
                        <input type="text" class="form-control" id="input-user" placeholder="Nombre de usuario">

                        <label id="mensajeUser" for="floatingInput"></label>
                    </div>
                    <div class="form-floating mb-3">
                        <label for="floatingInput" class="imputs">Empresa</label>
                        <input type="text" class="form-control" id="empresa" placeholder="Empresa">

                        <label id="mensajeEmpresa" for="floatingInput"></label>
                    </div>
                    <div class="form-floating mb-3">
                        <label for="floatingInput" class="imputs">Telefono (solo numeros)</label>
                        <input type="text" class="form-control" pattern="[0-9]{0,15}"
                            title="Ingrese solo numeros, por favor" id="telefono" placeholder="Telefono (solo numeros)">

                        <label id="mensajeTel" for="floatingInput"></label>
                    </div>
                    <div class="form-floating mb-3">
                        <label for="floatingInput" class="imputs">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Email">
                        <label id="mensajeEmail" for="floatingInput"></label>
                    </div>
                    <div class="form-floating mb-3">
                        <label for="floatingInput" class="imputs">Provincia</label>
                        <input type="text" class="form-control" id="provincia" placeholder="provincia">
                        <label id="mensajeProvincia" for="floatingInput"></label>
                        <div id="sugerencias"></div>
                    </div>
                    <div class="form-floating mb-3">
                        <label for="floatingInput" class="imputs">Comentarios(opcional)</label>
                        <textarea type="text" class="validado" id="comentarios" placeholder="Comentarios"
                            style="height: 6em;"></textarea>

                    </div>
                    <button type="bottom" id="enviar" class="btn btn-light border">Enviar</button>
                    <button type="reset" id="reset" class="btn btn-danger">Borrar</button>
                    <label class="imputs" id="resultado"></label>
                </form>
            </div>
        </div>
    </div>
</body>
<?php include('./footer.php') ?>