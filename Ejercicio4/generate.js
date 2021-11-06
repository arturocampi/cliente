function generarActividades(array) {
    var tabla = document.getElementById('tabla1');
    var filas = tabla.getElementsByTagName('tr');
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= filas.length - 1; j++) {
            filas[j].innerHTML += '<td>' + array[Math.floor(Math.random() * array.length)] + '</td>';
        }
    }
}

function generarFisioterapeutas(array2) {
    var tabla2 = document.getElementById('tabla2');
    var filas2 = tabla2.getElementsByTagName('tr');
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= filas2.length - 1; j++) {
            filas2[j].innerHTML += "<td>" + array2[Math.floor(Math.random() * array2.length)] + "</td>";
        }
    }
}