<?php
include('./head.php');
?>

<body>
    <div class="container-fluid d-flex justify-content-center align-items-center">
        <div class="col-md-12">
            <h1 class="text-center">Opciones de trekking</h1>
            <div class="row">
                <div class="nav nav-pills mb-3" id="tabs-dinamicos" role="tablist">
                </div>
            </div>
            <div class="tab-content" id="contenido-tab">
                <div class="tab-pane active" id="tab-seleccionado">
                    <div class="tab-pane">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="card">
                                    <img src="" class="card-img-top" alt="..." id="img-tab">
                                </div>
                            </div>
                            <div class="col col-lg-6 centrado" id="pagina2-card-body">
                                <h5></h5>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<?php include('./footer.php') ?>