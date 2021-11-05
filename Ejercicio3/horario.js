function generarActividades(array) {
    var tabla = document.getElementById('tabla1');
    var filas = tabla.getElementByTagName('tr');
    for (let i = 0; i <= 6; i++) {
        for (let j = 0; j < filas.length - 1; j++) {
            filas[j].innerHTML += '<td>' + array[j - 1] + '</td>'
        }
    }
}

function generarFisioterapeutas(array2) {
    var tabla2 = document.getElementById('tabla2');
    var filas2 = tabla2.getElementByTagName('tr');
    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j < filas2.length - 1; j++) {
            filas2[j].innerHTML += '<td>' + array2[j - 1] + '</td>'
        }
    }
}