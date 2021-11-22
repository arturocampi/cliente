class Aeropuerto {
    constructor(nombre, ciudad, numVuelos) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.numVuelos = numVuelos;
    }
}

class Vuelo {
    constructor(codigo, horaLlegada, minLlegada, horaSalida, minSalida) {
        this.codigo = codigo;

        this.llegada = new Date();
        this.llegada.setHours(horaLlegada);
        this.llegada.setMinutes(minLlegada);

        this.salida = new Date();
        this.salida.setHours(horaSalida);
        this.salida.setMinutes(minSalida);
    }
    setLlegada(horaLlegada, minLlegada) {
        this.llegada.setHours(horaLlegada);
        this.llegada.setMinutes(minLlegada);
    }

    setSalida(horaSalida, minSalida) {
        this.salida.setHours(horaSalida);
        this.salida.setMinutes(minSalida);
    }
}

function addAeropuerto(nombre, ciudad, numVuelos) {
    var aeropuerto = new Aeropuerto(nombre, ciudad, numVuelos);
    var table = document.getElementById('tableAeropuerto');
    var cadenaBoton = "<input type='button' value ='Modificar vuelos' id='boton' onclick='modificar(this)'>";
    table.innerHTML += '<tr><td>' + aeropuerto.nombre + '</td><td>' + aeropuerto.ciudad + '</td><td>' + aeropuerto.numVuelos + '</td><td>' + cadenaBoton + '</td></tr>';
}

function validateAeropuerto() {
    let nombre = document.forms['formAeropuerto']['nombre'].value;
    let ciudad = document.forms['formAeropuerto']['ciudad'].value;
    let numVuelos = document.forms['formAeropuerto']['numVuelos'].value;
    while (!isNaN(nombre)) {
        nombre = prompt('Nombre incorrecto, introduce un nombre');
    }
    while (!isNaN(ciudad)) {
        ciudad = prompt('Ciudad incorrecta, introduce una ciudad');
    }
    while (isNaN(numVuelos)) {
        numVuelos = prompt('Número de vuelos incorrecto, introduce un número de vuelos');
    }
    addAeropuerto(nombre, ciudad, numVuelos);
}

function addVuelo(codigo, horaLlegada, minLlegada, horaSalida, minSalida) {
    var vuelo = new Vuelo(codigo, horaLlegada, minLlegada, horaSalida, minSalida);
    var table = document.getElementById('tableVuelo');
    var horaLlegada = "<input type='button' value ='Modificar hora de llegada' id='boton' onclick='mod(this.vuelo)'>";
    var horaSalida = "<input type='button' value ='Modificar hora de salida' id='boton' onclick='modSalida(this)'>";
    table.innerHTML += '<tr><td>' + vuelo.codigo + '</td><td>' + vuelo.llegada + '</td><td>' + vuelo.salida + '</td><td>' + horaLlegada + '</td><td>' + horaSalida + '</td></tr>';
}

function mod(Vuelo) {
    let hora = prompt('Introduce hora');
    let min = prompt('Introduce minutos');
    Vuelo.setLlegada(hora, min);
}

function validateVuelo() {
    let codigo = document.forms['formVuelo']['codigo'].value;
    let horaLlegada = document.forms['formVuelo']['horaLlegada'].value;
    let minLlegada = document.forms['formVuelo']['minLlegada'].value;
    let horaSalida = document.forms['formVuelo']['horaSalida'].value;
    let minSalida = document.forms['formVuelo']['minSalida'].value;
    addVuelo(codigo, horaLlegada, minLlegada, horaSalida, minSalida);
}

function modificar(numero) {
    let num = prompt('Introduce el número de vuelos');
    while (isNaN(num)) {
        num = prompt('Número de vuelos incorreto, introduce un número de vuelos');
    }
    numero.parentNode.previousSibling.textContent = num;
}

// function modLlegada(numero) {
//     let hora = prompt('Introduce hora');
//     let min = prompt('Introduce minutos');
//     while (isNaN(hora)) {
//         hora = prompt('Número  incorreto, introduce un número');
//     }
//     while (isNaN(min)) {
//         min = prompt('Número  incorreto, introduce un número');
//     }
//     newDate = new Date();
//     newDate.setHours(hora);
//     newDate.setMinutes(min);
//     numero.parentNode.previousSibling.previousSibling.textContent = newDate;
// }

// function modSalida(numero) {
//     let hora = prompt('Introduce hora');
//     let min = prompt('Introduce minutos');
//     while (isNaN(hora)) {
//         hora = prompt('Número  incorreto, introduce un número');
//     }
//     while (isNaN(min)) {
//         min = prompt('Número  incorreto, introduce un número');
//     }
//     newDate = new Date();
//     newDate.setHours(hora);
//     newDate.setMinutes(min);
//     numero.parentNode.previousSibling.textContent = newDate;
// }