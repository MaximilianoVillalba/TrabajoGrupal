<?php
include('./head.php');
require('./conexion.php');

$provinces = $mysqli->query("SELECT * FROM provincia");
?>

<body>
    <div class="centrado">
        <h1>Busca tu proximo trekking</h1>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-md-6">
                <select class="form-select" id="select_province">
                    <option selected disabled>Provincia</option>
                    <?php while ($rowProvinces = $provinces->fetch_assoc()) { ?>
                    <option value="<?php echo $rowProvinces['id_provincia'] ?>"><?php echo $rowProvinces['nombre'] ?>
                    </option>
                    <?php } ?>
                </select>
            </div>
            <div class="col-12 col-md-6">
                <select class="form-select" id="select_montania">
                    <option selected disabled>-</option>
                </select>
            </div>
        </div>
        <div class="row" id="info">
        </div>
    </div>
</body>
<?php include('./footer.php') ?>