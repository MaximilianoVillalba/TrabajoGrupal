<?php
include('./head.php');
?>

<body>
    <main class="centrado main-margin">
        <h1>Busca tu proximo trekking</h1>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-6">
                    <select class="form-select" id="select_province">
                        <option selected disabled>Provincia</option>
                    </select>
                </div>
                <div class="col-12 col-md-6">
                    <select class="form-select" id="select_montania">
                        <option selected disabled>-</option>
                    </select>
                </div>
            </div>
            <div class="row" id="info">
                <img src="img/trip-plan.jpg" id="placeholder-img-select">
            </div>
    </main>
</body>
<?php include('./footer.php') ?>