<?php
require('./conexion.php');

$id = $_POST['idSeleccionado'];

$montania = $mysqli->query("SELECT * FROM montania WHERE id='$id'");
$resp = '';

while ($rowMontania = $montania->fetch_assoc()) {
    $resp .= '<div class="tab-pane active" id="tab-seleccionado">
    <div class="tab-pane">
        <div class="row">
            <div class="col-lg-6">
                <div class="card">
                    <img src="' . $rowMontania['imagen'] . '" class="card-img-top" alt="...">
                </div>
            </div>
            <div class="col col-lg-6 centrado" id="pagina2-card-body">
                <h5>' . $rowMontania['nombre'] . '</h5>
                <p>' . $rowMontania['descripcion'] . '</p>
            </div>
        </div>
    </div>
</div>';
}

echo $resp;