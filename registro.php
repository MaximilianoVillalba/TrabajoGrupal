<?php include('./head.php') ?>

<body>
    <main class="container-fluid d-flex justify-content-center align-items-center main-margin" id="back-formulario">
        <div class="col-md-12">
            <h1 class="text-center">Formulario de Registro</h1>
            <div id="form" class="row">
                <form id="formularioUsuario">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="input-user" placeholder="Nombre de usuario">
                        <label for="floatingInput" id="inputs-form-user">Nombre de usuario</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="empresa" placeholder="Empresa">
                        <label for="floatingInput" id="inputs-form-empresa">Empresa</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" pattern="[0-9]{0,15}" id="telefono"
                            placeholder="Telefono (solo numeros)">
                        <label for="floatingInput" id="inputs-form-tel">Telefono (solo numeros)</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="email" placeholder="Email">
                        <label for="floatingInput" id="inputs-form-email">Email</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="provincia" placeholder="provincia">
                        <label for="floatingInput" id="inputs-form-provincia">Provincia</label>
                        <div id="sugerencias"></div>
                    </div>
                    <div class="form-floating mb-3">
                        <textarea type="text" class="form-control" id="comentarios" placeholder="Comentarios"
                            style="height: 6em;"></textarea>
                        <label for="floatingInput" id="inputs-form">Comentarios(opcional)</label>
                    </div>
                    <button type="bottom" id="enviar" class="btn btn-light border">Enviar</button>
                    <button type="reset" id="reset" class="btn btn-danger">Borrar</button>
                    <label class="imputs" id="resultado"></label>
                </form>
            </div>
        </div>
    </main>
</body>
<?php include('./footer.php') ?>