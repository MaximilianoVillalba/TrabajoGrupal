<?php
include('./head.php');
?>

<body>
    <div class="container-fluid">
        <div class="row color-head justify-content-center text-center">
            <h2>Trekking</h2>
        </div>
        <div class="row">
            <div class="row">
                <div class="col-lg-12">
                    <b>El excursionismo (o trekking) puede definirse como una modalidad deportiva no competitiva que
                        consiste en recorrer de forma autónoma, generalmente a pie, parajes aislados generalmente con
                        dificultad de tránsito, tales como zonas montañosas o lugares remotos sin senderos.En las
                        siguientes fotos podemos notar la recompensa al esfuerzo y dedicacion para realizar tal
                        actividad</b>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3" id="img-container">
                    <img class="img-lista" src="./img/trekking_chalten1.jpg" alt="">
                </div>
                <div class="col-lg-3" id="img-container">
                    <img class="img-lista" src="./img/trekking_chalten2.jpg" alt="">
                </div>
                <div class="col-lg-3" id="img-container">
                    <img class="img-lista" src="./img/trekking_lanin2.jpg" alt="">
                </div>
                <div class="col-lg-3" id="img-container">
                    <img class="img-lista" src="./img/trekking_lanin1.jpg" alt="">
                </div>
                <img class="img-lista" src="./img/trekking_tromen1.jpg" alt="">
                <img class="img-lista" src="./img/trekking_tromen2.jpg" alt="">
                <img class="img-lista" src="./img/trekking_mendoza1.jpg" alt="">
                <img class="img-lista" src="./img/trekking_mendoza2.jpg" alt="">
                <img class="img-lista" src="./img/trekking_ushuaia1.jpg" alt="">
                <img class="img-lista" src="./img/trekking_ushuaia2.jpg" alt="">
                <img class="img-lista" src="./img/trekking5.jpeg" alt="">
                <img class="img-lista" src="./img/trekking6.jpg" alt="">
            </div>
            <div class="row primer-row">
                <div class="col-sm-4 col-md-6 centrado">
                    <ol class="list-li-desc">
                    </ol>
                    <div>
                        <div class="modal" tabindex="-1" id="modal-desc">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="modal-title">Modal title</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body" id="modal-description">
                                        <p>Modal body text goes here.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-8 col-md-6 d-flex justify-content-center align-items-center">
                    <img id="img-general" src=./img/trekking_general.jpg alt="">
                </div>
            </div>
            <div class="row last-row color-last-div">
                <div class="col-sm-8 col-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Orden</th>
                                <th scope="col">Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Fitz Roy</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Cerro Dos Banderas</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Sendero Cerro Corona</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Cerro Cocodrilo en Potrerillos</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-sm-4 col-12 centrado">
                    <p>
                        El listado que podemos notar a nuestra izquierda es una valoracion de lo que creemos que son
                        los cerros mas
                        interesantes para conocer y recorrer. Si bien ciertos tienen una grado de dificultad
                        considerable, por esto mismo, recomendamos informarse de su altura y como es el sendero para
                        llegar a hacer cumbre
                    </p>
                </div>
            </div>
        </div>
</body>
<?php include('./footer.php') ?>