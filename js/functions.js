/* SELECTS */
$(function () {
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
        }
    }).then(() => {
        $(".nav-link").click(function (e) {
            /* Para que no se agregue la clave active cada vez que se clickea */
            $(".nav-link").removeClass("active");
            /* Para sacar el border al que este seleccionado */
            $(".nav-link").removeClass("border");
            idSeleccionado = e.target.id;
            $("#" + idSeleccionado).addClass("border");
            $.ajax({
                url: './info_tab.php',
                type: 'POST',
                data: { idSeleccionado },
                success: function (resp) {
                    $("#contenido-tab").html(resp);
                },
                error: function () {
                    console.log('errror');
                }
            })
        });
    })

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
                $(".list-li-desc").append('<li id="' + elem.id + '">' + elem.nombre + '</li>');
            })
        }
    }).then(() => {
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
            $("#select_montania").html(resp);
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

$("#input-user").change((e) => {
    valor = $("#input-user").val();
    $.ajax({
        url: './validar_usuario.php',
        type: 'POST',
        data: { valor },
        success: (resp) => {
            console.log(resp);
        },
        error: () => {

        }
    })
})

$("#formularioUsuario").submit((e) => {
    e.preventDefault();
    console.log('asdasd');
});

/* Ejercicio paginacion */

$(".boton-paginacion").click((e) => {
    paginaDestino = e.target.id; //Para saber que boton clickeo (ANT) O (SIG)
    paginaPresente = e.target.value; //Para saber en que pagina se encuentra

    if (paginaDestino == "sig") {
        paginaNueva = parseInt(paginaPresente) + 1;
    } else {
        paginaNueva = parseInt(paginaPresente) - 1;
    }
    paginacion = (parseInt(paginaNueva) - 1) * 5;
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
            $(".boton-izq").attr("value", paginaNueva);
            $(".boton-der").attr("value", paginaNueva);
        },
        error: () => {

        }
    })
})

//revisa el nombre en la base de datos
$("#input-user").change(function () {
    //revisa que no este vacio
    $vacio = false;
    $("#mensajeUser").empty();
    if ($("#input-user").val().length < 1) {
        $vacio = true;
    }
    if ($vacio) {
        $('#mensajeUser').append('(campo obligatorio)');
        if ($("#input-user").hasClass('form-control')) {
            $("#input-user").removeClass('form-control');
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
                    $('#mensajeUser').append('(nombre de usuario en uso)');
                    if ($("#input-user").hasClass('form-control')) {
                        $("#input-user").removeClass('form-control');
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
                    $('#mensajeUser').append('(nombre de usuario disponible)');
                    if ($("#input-user").hasClass('form-control')) {
                        $("#input-user").removeClass('form-control');
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
    $("#mensajeEmpresa").empty();
    if ($("#empresa").val().length < 1) {
        $vacio = true;
    }
    if ($vacio) {
        $('#mensajeEmpresa').append('(campo obligatorio)');
        if ($("#empresa").hasClass('form-control')) {
            $("#empresa").removeClass('form-control');
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
            $("#empresa").removeClass('form-control');
            $("#empresa").addClass('validado');
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
    $("#mensajeTel").empty();
    if ($("#telefono").val().length < 1) {
        $numVacio = true;
    }
    if ($numVacio) {
        $('#mensajeTel').append('(campo obligatorio)');
        if ($("#telefono").hasClass('form-control')) {
            $("#telefono").removeClass('form-control');
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
            $("#telefono").removeClass('form-control');
            $("#telefono").addClass('validado');
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
    $("#mensajeEmail").empty();
    if ($("#email").val().length < 1) {
        $emailVacio = true;
    }
    if ($emailVacio) {
        $('#mensajeEmail').append('(campo obligatorio)');
        if ($("#email").hasClass('form-control')) {
            $("#email").removeClass('form-control');
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
            $('#mensajeEmail').append('(email no valido)');
            if ($("#email").hasClass('form-control')) {
                $("#email").removeClass('form-control');
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
            $('#mensajeEmail').append('(email valido)');
            if ($("#email").hasClass('form-control')) {
                $("#email").removeClass('form-control');
                $("#email").addClass('validado');
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
    $("#mensajeEmail").empty();
    $("#mensajeTel").empty();
    $("#mensajeEmpresa").empty();
    $("#mensajeUser").empty();
    if ($("#email").hasClass('error')) {
        $("#email").removeClass('error');
        $("#email").addClass('form-control');
    }
    else {
        if ($("#email").hasClass('validado')) {
            $("#email").removeClass('validado');
            $("#email").addClass('form-control');
        }
    }
    if ($("#telefono").hasClass('error')) {
        $("#telefono").removeClass('error');
        $("#telefono").addClass('form-control');
    }
    else {
        if ($("#telefono").hasClass('validado')) {
            $("#telefono").removeClass('validado');
            $("#telefono").addClass('form-control');
        }
    }
    if ($("#empresa").hasClass('error')) {
        $("#empresa").removeClass('error');
        $("#empresa").addClass('form-control');
    }
    else {
        if ($("#empresa").hasClass('validado')) {
            $("#empresa").removeClass('validado');
            $("#empresa").addClass('form-control');
        }
    }
    if ($("#input-user").hasClass('error')) {
        $("#input-user").removeClass('error');
        $("#input-user").addClass('form-control');
    }
    else {
        if ($("#input-user").hasClass('validado')) {
            $("#input-user").removeClass('validado');
            $("#input-user").addClass('form-control');
        }
    }
});

//provincia


$("#provincia").keyup(function () {
    console.log('holanga');
    $vacioP = false;
    $("#mensajeProvincia").empty();
    $("#sugerencias").empty();
    if ($("#provincia").val().length < 1) {
        $vacioP = true;
    }
    if ($vacioP) {
        $('#mensajeProvincia').append('(campo obligatorio)');
        if ($("#provincia").hasClass('form-control')) {
            $("#provincia").removeClass('form-control');
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
                        $("#provincia").removeClass('form-control');
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