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

function checkSesiones() {
    resetSesiones();
    let state = false;
    var sesion1 = document.getElementById('sesion1');
    var sesion2 = document.getElementById('sesion2');
    var sesion3 = document.getElementById('sesion3');
    var sesion4 = document.getElementById('sesion4');
    var sesion5 = document.getElementById('sesion5');
    if (sesion1.checked) {
        state = true;
        markSesiones(sesion1);
    }
    if (sesion2.checked) {
        state = true;
        markSesiones(sesion2);
    }
    if (sesion3.checked) {
        state = true;
        markSesiones(sesion3);
    }
    if (sesion4.checked) {
        state = true;
        markSesiones(sesion4);
    }
    if (sesion5.checked) {
        state = true;
        markSesiones(sesion5);
    }
    if (!state) {
        alert('Por favor selecciona una sesión mínimo');
    }
}

function markSesiones(sesion) {
    var tabla1 = document.getElementById('tablaSesiones');
    var filas1 = tabla1.getElementsByTagName('td');
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= filas1.length - 1; j++) {
            if (filas1[j].innerHTML == sesion.value) {
                filas1[j].style.backgroundColor = "yellow";
            }
        }
    }
}

function resetSesiones() {
    var tabla2 = document.getElementById('tablaSesiones');
    var filas2 = tabla2.getElementsByTagName('td');
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= filas2.length - 1; j++) {
            filas2[j].style.backgroundColor = 'white';
        }
    }
}

function checkFisios() {
    resetFisios();
    let state = false;
    var fisio1 = document.getElementById('fisio1');
    var fisio2 = document.getElementById('fisio2');
    var fisio3 = document.getElementById('fisio3');
    var fisio4 = document.getElementById('fisio4');
    var fisio5 = document.getElementById('fisio5');
    if (fisio1.checked) {
        state = true;
        markFisio(fisio1);
    }
    if (fisio2.checked) {
        state = true;
        markFisio(fisio2);
    }
    if (fisio3.checked) {
        state = true;
        markFisio(fisio3);
    }
    if (fisio4.checked) {
        state = true;
        markFisio(fisio4);
    }
    if (fisio5.checked) {
        state = true;
        markFisio(fisio5);
    }
    if (!state) {
        alert('Por favor selecciona a un fisioterapeuta');
    }
}

function markFisio(fisio) {
    var table2 = document.getElementById('tablaFisios');
    var row2 = table2.getElementsByTagName('td');
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= row2.length - 1; j++) {
            if (row2[j].innerHTML == fisio.value) {
                row2[j].style.backgroundColor = "yellow";
            }
        }
    }
}

function resetFisios() {
    var table2 = document.getElementById('tablaFisios');
    var row2 = table2.getElementsByTagName('td');
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= row2.length - 1; j++) {
            row2[j].style.backgroundColor = 'white';
        }
    }
}