<?php
include('./head.php');
?>
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
    crossorigin="anonymous"></script>
<script src="../bootstrap/js/bootstrap.bundle.min.js"></script>

<body>
    <div class="container-fluid d-flex justify-content-center align-items-center">
        <div class="col-md-12">
            <h1 class="text-center">Opciones de trekking</h1>
            <div class="row">
                <div class="nav nav-pills mb-3" id="tabs-dinamicos" role="tablist">
                </div>
            </div>
            <div class="tab-content" id="contenido-tab">
            </div>
        </div>
    </div>
</body>
<?php include('./footer.php') ?>