<?php include('./head.php') ?>

<body>
    <div class="container-fluid">
        <!-- Primer div -->
        <div class="row color-first-last justify-content-center text-center border border-5 border-white">
            <h2><em>Header</em></h2>
        </div>
        <!-- Segundo div con 5 columnas, una simplemente para que la 3ra columna salte hacia abajo  -->
        <div class="row text-center color-primer-div">
            <div class="offset-lg-3 col-lg-3 col-md-3 col-6 border border-5 border-white alt-div centrado">
                1</div>
            <div class="col-lg-3 col-md-3 col-6 border border-5 border-white alt-div centrado">2
            </div>
            <div class="col-lg-3 col-md-3 d-lg-block d-md-none bg-white d-none centrado"></div>
            <div class="col-lg-3 col-md-3 col-6 border border-5 border-white alt-div centrado">3
            </div>
            <div class="offset-lg-6 col-lg-3 offset-md-0 col-md-3 col-6 border border-5 border-white alt-div centrado">
                4</div>
        </div>
        <!-- Tercer div que contiene el texto tablet para que se muestre cuando la pantalla esta en medium -->
        <div class="row d-lg-none d-md-flex d-none color-windown alt-div-windos text-center alt-div centrado">
            Tablet
        </div>
        <!-- Cuarto div con 4 columnas, las cuales tienen distintos ordenes de acuerdo al tamanio de a pantalla -->
        <div class="row alt-div justify-content-center text-center">
            <div class="col-lg-3 order-lg-5 col-md-3 col-6 border border-5 border-white color-tercer-row centrado">
                a</div>
            <div class="col-lg-3 order-lg-3 col-md-3 col-6 border border-5 border-white color-tercer-row centrado">
                b</div>
            <div class="col-lg-3 order-lg-2 col-md-3 col-6 border border-5 border-white color-tercer-row centrado">
                c</div>
            <div class="col-lg-3 order-lg-6 col-md-3 col-6 border border-5 border-white color-tercer-row centrado">
                d</div>
        </div>
        <!-- Tercer div que contiene el texto tablet para que se muestre cuando la pantalla esta en large -->
        <div
            class="row d-lg-flex d-md-none d-none color-windown text-center border border-5 border-white alt-div centrado">
            Desktop
        </div>
        <!-- Tercer div que contiene el texto tablet para que se muestre cuando la pantalla esta en small y extrasmall -->
        <div
            class="row d-lg-none d-md-none d-flex color-windown text-center border border-5 border-white alt-div centrado">
            Mobile
        </div>
        <div class="row alt-div">
            <div
                class="order-md-2 col-md-6 order-lg-1 offset-lg-3 col-lg-3 d-md-flex d-none border border-5 border-white color-emoticones centrado">
                <em>:(</em>
            </div>
            <div class="order-md-1 col-md-6 order-lg-2 col-lg-3 border border-5 border-white color-emoticones centrado">
                <em>:D</em>
            </div>
        </div>
        <div
            class="row color-first-last d-lg-block d-md-block d-none justify-content-center border border-5 border-white text-center centrado">
            <h2><em>Footer</em></h2>
        </div>
    </div>
</body>
<?php include('./footer.php') ?>