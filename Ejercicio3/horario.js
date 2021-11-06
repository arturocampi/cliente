function generarActividades(sesiones) {
    var tabla1 = document.getElementById('tablaSesiones');
    var filas1 = tabla1.getElementsByTagName('tr');
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= filas1.length - 1; j++) {
            filas1[j].innerHTML += '<td>' + sesiones[Math.floor(Math.random() * sesiones.length)] + '</td>';
        }
    }
}

function generarFisioterapeutas(fisios) {
    var tabla2 = document.getElementById('tablaFisios');
    var filas2 = tabla2.getElementsByTagName('tr');
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= filas2.length - 1; j++) {
            filas2[j].innerHTML += "<td>" + fisios[Math.floor(Math.random() * fisios.length)] + "</td>";
        }
    }
}
