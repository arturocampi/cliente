// ESTA FUNCION RECOGE LA ARRAY DE ACTIVIDADES Y MUESTRA POR PANTALLA LA TABLA
function generarActividades(sesiones) {
    // RECOGE LA TABLA DE ACTIVIDADES
    var sesion = document.getElementById('tablaSesiones');
    // RECOGE LAS FILAS DE LA TABLA
    var filas1 = sesion.getElementsByTagName('tr');
    // CONTROLA LAS COLUMNAS
    for (let i = 1; i <= 6; i++) {
        // CONTROLA LAS FILAS
        for (let j = 1; j <= filas1.length - 1; j++) {
            // IMPRIME DE FORMA ALEATORIA UNA ACTIVIDAD EN LA TABLA
            filas1[j].innerHTML += '<td>' + sesiones[Math.floor(Math.random() * sesiones.length)] + '</td>';
        }
    }
}

// ESTA FUNCION RECOGE LA ARRAY DE FISIOS Y MUESTRA POR PANTALLA LA TABLA
function generarFisioterapeutas(fisios) {
    // RECOGE LA TABLA DE FISIOS
    var fisio = document.getElementById('tablaFisios');
    // RECOGE LAS FILAS DE LA TABLA
    var filas2 = fisio.getElementsByTagName('tr');
    // CONTROLA LAS COLUMNAS
    for (let i = 1; i <= 5; i++) {
        // CONTROLA LAS FILAS
        for (let j = 1; j <= filas2.length - 1; j++) {
            // IMPRIME DE FORMA ALEATORIA UN FISIOTERAPEUTA EN LA TABLA
            filas2[j].innerHTML += "<td>" + fisios[Math.floor(Math.random() * fisios.length)] + "</td>";
        }
    }
}
