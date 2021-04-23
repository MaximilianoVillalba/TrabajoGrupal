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

/* TABS */
$(".nav-link").click(function (e) {
    console.log('adasdsad');
    idSeleccionado = e.target.id;
    console.log(idSeleccionado);
    /* $.ajax({
        url: './info_tab.php',
        type: 'POST',
        data: { idSeleccionado },
        success: function (resp) {
            $("#contenido-tab").html(resp);
        },
        error: function () {
            console.log('errror');
        }
    }) */
});


/* $(function () {

}) */

$(".list-li-desc li").click(function (e) {
    idSeleccionado = e.target.id;
    $.ajax({
        url: './info_modal.php',
        type: 'POST',
        data: { idSeleccionado },
        success: function (resp) {
            console.log(resp);
            $("#modal-desc").html(resp);
        },
        error: function () {

        }
    })
})

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