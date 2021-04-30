/* SELECTS */
const limiteUsuarios = 5;
$(function () {
    var imagen_placeholder = $('#img-general').attr('src');
    $.ajax({
        url: './get_provincias.php',
        type: 'POST',
        success: (resp) => {
            info = JSON.parse(resp);
            info.forEach(element => {
                $("#select_province").append('<option value=' + element.id_provincia + '>' + element.nombre + '</option>');
            });
        },
        error: () => {
            console.log('errrr');
        }
    })

    $.ajax({
        url: './get_tabs.php',
        type: 'POST',
        success: (resp) => {
            tabs = JSON.parse(resp);
            tabs.forEach(element => {
                $("#tabs-dinamicos").append('<li class="nav-item"><button class="nav-link" id="' +
                    element.id + '" data-bs-toggle="pill" data-bs-target="#pills-' +
                    element.id + '" type="button" role="tab" aria-selected="true"> ' + element.nombre + '</button></li>');
            })
            $('#1').addClass('border');
            getContenido(1);
        }
    }).then(() => {
        $(".nav-link").click(function (e) {
            /* Para que no se agregue la clave active cada vez que se clickea */
            $(".nav-link").removeClass("active");
            /* Para sacar el border al que este seleccionado */
            $(".nav-link").removeClass("border");
            idSeleccionado = e.target.id;
            $("#" + idSeleccionado).addClass("border");
            getContenido(idSeleccionado);
        });
    })

    function getContenido(idSeleccionado) {
        $.ajax({
            url: './info_tab.php',
            type: 'POST',
            data: { idSeleccionado },
            success: function (resp) {
                montania = JSON.parse(resp);
                $("#img-tab").attr('src', montania[0].imagen);
                $("#pagina2-card-body h5").html(montania[0].nombre);
                $("#pagina2-card-body p").html(montania[0].descripcion);
            },
            error: function () {
                console.log('errror');
            }
        })
    }


    $.ajax({
        url: "./pagina_listado.php",
        type: "POST",
        data: { paginacion: 0 },
        success: (resp) => {
            users = JSON.parse(resp);
            users.forEach(user => {
                let html = '<tr>\
                <td>'+ user.nombre_usuario + '</td>\
                <td>'+ user.empresa + '</td>\
                <td>'+ user.telefono + '</td>\
                <td>'+ user.email + '</td>\
                <td>'+ user.comentario + '</td>\
                </tr>';
                $("#tbody-pagina").append(html);
            })
        }
    })

    $.ajax({
        url: "./get_tabs.php",
        success: (resp) => {
            montanias = JSON.parse(resp);
            montanias.forEach((elem) => {
                $(".list-li-desc").append('<li class="lista-cerros" id="' + elem.id + '">' + elem.nombre + '</li>');
            })
        }
    }).then(() => {
        $('.lista-cerros').mouseenter(function () {
            idSeleccionado = this.id;
            $.ajax({
                url: './info_modal.php',
                type: 'POST',
                data: { idSeleccionado },
                success: function (resp) {
                    montania = JSON.parse(resp);
                    $("#img-general").attr('src', montania[0].imagen);
                    $("#img-general").addClass('modal-on');
                },
                error: function () {

                }
            })
        })

        $('.lista-cerros').mouseleave(function () {
            if ($("#img-general").hasClass('modal-on') != false) {
                console.log('entraaa');
                $("#img-general").attr('src', imagen_placeholder);
                $("#img-general").removeClass('modal-on');
            } else {
                console.log('entra al else');
            }
        });

        $(".list-li-desc li").click(function (e) {
            idSeleccionado = e.target.id;
            $.ajax({
                url: './info_modal.php',
                type: 'POST',
                data: { idSeleccionado },
                success: function (resp) {
                    montania = JSON.parse(resp);
                    $("#modal-title").text(montania[0].nombre);
                    $("#modal-description").text(montania[0].descripcion);
                    $("#modal-desc").modal('show');
                },
                error: function () {

                }
            })
        })
    })
});

$("#select_province").change(function () {
    valor = $("#select_province option:selected").val();
    $.ajax({
        url: './get_montanias.php',
        type: 'POST',
        data: { valor },
        success: function (resp) {
            montanias = JSON.parse(resp);
            $("#select_montania").empty();
            $("#select_montania").append('<option disabled selected>Seleccione una opción</option>');
            montanias.forEach((mont) => {
                console.log(mont);
                $("#select_montania").append('<option value="' + mont.id + '">' + mont.nombre + '</option>')
            })
        },
        error: function () {
            console.log('errror');
        }
    })
});

$("#select_montania").change(function () {
    id_montania = $("#select_montania option:selected").val();
    $.ajax({
        url: './get_info.php',
        type: 'POST',
        data: { id_montania },
        success: function (resp) {
            $("#info").html(resp);
        },
        error: function () {
            console.log('errror');
        }
    })
});

$("#formularioUsuario").submit((e) => {
    e.preventDefault();
    console.log('asdasd');
});

/* Ejercicio paginacion */

$(".boton-paginacion").click((e) => {
    movimientoPermitido = true;
    paginaDestino = e.target.id; //Para saber que boton clickeo (ANT) O (SIG)
    paginaPresente = $("#paginaActual").val(); //Para saber en que pagina se encuentra

    $.ajax({
        url: "./get_users.php",
        success: (resp) => {
            return cantidadMaxPaginas = Math.ceil(resp / limiteUsuarios);
        }
    }).then(() => {
        if (paginaDestino == "sig") {
            $("#ant").prop("disabled", false); //Con esto habilito el otro boton cuando llega al maximo de su pagina, ya que avanzo de pagina al no poder retroceder
            if (paginaPresente == cantidadMaxPaginas) {
                movimientoPermitido = false;
            } else {
                paginaNueva = parseInt(paginaPresente) + 1;
                if (paginaPresente == cantidadMaxPaginas - 1) { //Con esto me fijo si la siguiente pagina que mostrar es el limite, pongo a ese boton en disabled
                    $("#" + paginaDestino).prop("disabled", true);
                }
            }
        } else {
            $("#sig").prop("disabled", false); //Con esto habilito el otro boton cuando llega al maximo de su pagina
            if (paginaPresente == 1) {
                movimientoPermitido = false;
            } else {
                paginaNueva = parseInt(paginaPresente) - 1;
                if (paginaPresente == 2) { //Con esto me fijo si la siguiente pagina que mostrar es el limite, pongo a ese boton en disabled, ya que retrocedio de pagina al no poder avanzar
                    $("#" + paginaDestino).prop("disabled", true);
                }
            }
        }
        paginacion = (parseInt(paginaNueva) - 1) * 5;
        if (movimientoPermitido) {
            $.ajax({
                url: "./pagina_listado.php",
                type: "POST",
                data: { paginacion },
                success: (resp) => {
                    $("#tbody-pagina").empty();
                    users = JSON.parse(resp);
                    users.forEach(user => {
                        let html = '<tr>\
                        <td>'+ user.nombre_usuario + '</td>\
                        <td>'+ user.empresa + '</td>\
                        <td>'+ user.telefono + '</td>\
                        <td>'+ user.email + '</td>\
                        <td>'+ user.comentario + '</td>\
                        </tr>'
                        $("#tbody-pagina").append(html);
                    })
                    /* $("#paginaActual").html('<button type="button" class="btn btn-secondary" id="paginaActual" value="' + paginaNueva + '" disabled>' + paginaNueva + '</button>') */
                    $("#paginaActual").attr("value", paginaNueva);
                    $("#paginaActual").html(paginaNueva);
                },
                error: () => {

                }
            })
        } else {

        }
    })

})

//revisa el nombre en la base de datos
$("#input-user").change(function () {
    //revisa que no este vacio
    $vacio = false;
    $("#inputs-form-user").empty();
    if ($("#input-user").val().length < 1) {
        $vacio = true;
    }
    if ($vacio) {
        $('#inputs-form-user').append('(campo obligatorio)');
        if ($("#input-user").hasClass('form-control')) {
            $("#input-user").addClass('error');
        }
        else {
            if ($("#input-user").hasClass('validado')) {
                $("#input-user").removeClass('validado');
                $("#input-user").addClass('error');
            }
        }
    }
    else {
        //revisa el nombre
        valor = $("#input-user").val();
        $.ajax({
            url: './validar_usuario.php',
            type: 'POST',
            data: { valor },
            success: (resp) => {
                if (resp == 1) {
                    $('#inputs-form-user').append('(nombre de usuario en uso)');
                    if ($("#input-user").hasClass('form-control')) {
                        $("#input-user").addClass('error');
                    }
                    else {
                        if ($("#input-user").hasClass('validado')) {
                            $("#input-user").removeClass('validado');
                            $("#input-user").addClass('error');
                        }
                    }
                }
                else {
                    $('#inputs-form-user').append('(nombre de usuario disponible)');
                    if ($("#input-user").hasClass('form-control')) {
                        $("#input-user").removeClass('error');
                        $("#input-user").addClass('validado');
                    }
                    else {
                        if ($("#input-user").hasClass('error')) {
                            $("#input-user").removeClass('error');
                            $("#input-user").addClass('validado');
                        }
                    }
                }
            },
            error: () => {

            }
        })
    }
});
//validaciones
//empresa no debe estar vacio
$("#empresa").change(function () {
    $vacio = false;
    $("#inputs-form-empresa").empty();
    if ($("#empresa").val().length < 1) {
        $vacio = true;
    }
    if ($vacio) {
        $('#inputs-form-empresa').append('(campo obligatorio)');
        if ($("#empresa").hasClass('form-control')) {
            $("#empresa").addClass('error');
        }
        else {
            if ($("#empresa").hasClass('validado')) {
                $("#empresa").removeClass('validado');
                $("#empresa").addClass('error');
            }
        }
    }
    else {
        if ($("#empresa").hasClass('form-control')) {
            $("#empresa").addClass('validado');
            $("#empresa").removeClass('error');
        }
        else {
            if ($("#empresa").hasClass('error')) {
                $("#empresa").removeClass('error');
                $("#empresa").addClass('validado');
            }
        }
    }
});
//telefono debe tener solo numeros y no estar vacio
//impide colocar algo que no sea numeros
$('#telefono').on('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});
//revisa que no este vacio
$("#telefono").change(function () {
    $numVacio = false;
    $("#inputs-form-tel").empty();
    if ($("#telefono").val().length < 1) {
        $numVacio = true;
    }
    if ($numVacio) {
        $('#inputs-form-tel').append('(campo obligatorio)');
        if ($("#telefono").hasClass('form-control')) {
            $("#telefono").addClass('error');
        }
        else {
            if ($("#telefono").hasClass('validado')) {
                $("#telefono").removeClass('validado');
                $("#telefono").addClass('error');
            }
        }
    }
    else {
        if ($("#telefono").hasClass('form-control')) {
            $("#telefono").addClass('validado');
            $("#telefono").removeClass('error');
        }
        else {
            if ($("#telefono").hasClass('error')) {
                $("#telefono").removeClass('error');
                $("#telefono").addClass('validado');
            }
        }
    }
});
//email debe tener forma de email
$("#email").change(function () {
    //revisa que no este vacio
    $emailVacio = false;
    $("#inputs-form-email").empty();
    if ($("#email").val().length < 1) {
        $emailVacio = true;
    }
    if ($emailVacio) {
        $('#inputs-form-email').append('(campo obligatorio)');
        if ($("#email").hasClass('form-control')) {
            $("#email").addClass('error');
        }
        else {
            if ($("#email").hasClass('validado')) {
                $("#email").removeClass('validado');
                $("#email").addClass('error');
            }
        }
    }
    else {
        // si no esta vacio se fija en la estructura
        $forma = true;
        if ($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
            $forma = false;
        }
        if ($forma == false) {
            $('#inputs-form-email').append('(email no valido)');
            if ($("#email").hasClass('form-control')) {
                $("#email").addClass('error');
            }
            else {
                if ($("#email").hasClass('validado')) {
                    $("#email").removeClass('validado');
                    $("#email").addClass('error');
                }
            }
        }
        else {
            $('#inputs-form-email').append('(email valido)');
            if ($("#email").hasClass('form-control')) {
                $("#email").addClass('validado');
                $("#email").removeClass('error');
            }
            else {
                if ($("#email").hasClass('error')) {
                    $("#email").removeClass('error');
                    $("#email").addClass('validado');
                }
            }
        }
    }
});
//reset
$("#reset").click(function () {
    $("#email").empty();
    $("#telefono").empty();
    $("#empresa").empty();
    $("#input-user").empty();
    $("#sugerencias").empty();

    /* Para que los labels vuelvan a sus estado base */
    $('#inputs-form-user').empty();
    $('#inputs-form-user').append('Nombre de usuario');
    $('#inputs-form-empresa').empty();
    $('#inputs-form-empresa').append('Empresa');
    $('#inputs-form-tel').empty();
    $('#inputs-form-tel').append('Telefono (solo numeros)');
    $('#inputs-form-email').empty();
    $('#inputs-form-email').append('Email');
    $('#inputs-form-provincia').empty();
    $('#inputs-form-provincia').append('Provincia');


    if ($("#email").hasClass('error')) {
        $("#email").removeClass('error');
    }
    else {
        if ($("#email").hasClass('validado')) {
            $("#email").removeClass('validado');
        }
    }
    if ($("#telefono").hasClass('error')) {
        $("#telefono").removeClass('error');
    }
    else {
        if ($("#telefono").hasClass('validado')) {
            $("#telefono").removeClass('validado');
        }
    }
    if ($("#empresa").hasClass('error')) {
        $("#empresa").removeClass('error');
    }
    else {
        if ($("#empresa").hasClass('validado')) {
            $("#empresa").removeClass('validado');
        }
    }
    if ($("#input-user").hasClass('error')) {
        $("#input-user").removeClass('error');
    }
    else {
        if ($("#input-user").hasClass('validado')) {
            $("#input-user").removeClass('validado');
        }
    }
    if ($("#provincia").hasClass('error')) {
        $("#provincia").removeClass('error');
    }
    else {
        if ($("#provincia").hasClass('validado')) {
            $("#provincia").removeClass('validado');
        }
    }
});

//provincia


$("#provincia").keyup(function () {
    console.log('holanga');
    $vacioP = false;
    $("#inputs-form-provincia").empty();
    $("#sugerencias").empty();
    if ($("#provincia").val().length < 1) {
        $vacioP = true;
    }
    if ($vacioP) {
        $('#inputs-form-provincia').append('(campo obligatorio)');
        if ($("#provincia").hasClass('form-control')) {
            $("#provincia").addClass('error');
        }
        else {
            if ($("#provincia").hasClass('validado')) {
                $("#provincia").removeClass('validado');
                $("#provincia").addClass('error');
            }
        }
    }
    else {
        valor = $("#provincia").val();
        $.ajax({
            url: './sugerencias.php',
            type: 'POST',
            data: { valor },
            success: (resp) => {
                $("#sugerencias").html(resp);
                if ($("#provincia").hasClass('error')) {
                    $("#provincia").removeClass('error');
                    $("#provincia").addClass('validado');
                }
                else {
                    if ($("#provincia").hasClass('form-control')) {
                        $("#provincia").addClass('validado');
                    }
                }
            },
            error: () => {

            }
        })
    }
});

$("#enviar").click(function (e) {
    e.preventDefault();
    if ($("#input-user").hasClass('validado') && $("#provincia").hasClass('validado') && $("#empresa").hasClass('validado') && $("#telefono").hasClass('validado') && $("#email").hasClass('validado')) {
        nombre = $("#input-user").val();
        empresa = $("#empresa").val();
        tel = $("#telefono").val();
        email = $("#email").val();
        provi = $("#provincia").val();
        comentarios = $("#comentarios").val();
        $.ajax({
            url: './ingresarUsuario.php',
            type: 'POST',
            data: { nombre, empresa, tel, email, comentarios, provi },
            success: function (resp) {
                if (resp) {
                    $("#resultado").html('<p class="correcto">Se pudo registrar el contacto</p>');
                }
                else {
                    $("#resultado").html('<p class="incorrecto">No se pudo registrar el contacto</p>');
                }
            },
            error: function () {

            }
        })

    }
});