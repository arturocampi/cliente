class Aeropuerto {
  constructor(nombre, ciudad, numVuelos) {
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.numVuelos = numVuelos;
  }
  setNumVuelos(vuelos) {
    this.numVuelos = vuelos;
  }
}

var aeropuertos = [];

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
  getLlegada() {
    return this.llegada;
  }
  getSalida() {
    return this.salida;
  }
}

var vuelos = [];

function printAeropuerto() {
  var table = document.getElementById("tableAeropuerto");
  table.innerHTML = "<tr><th>Nombre</th><th>Ciudad</th><th>Número de vuelos</th><th>Cambiar número de vuelos</th><tr>";
  for (let i = 0; i < aeropuertos.length; i++) {
    var cadenaBoton = "<input type='button' value ='Modificar vuelos' id='boton' onclick='modVuelos(this)'>";
    table.innerHTML += "<tr><td>" + aeropuertos[i].nombre + "</td><td>" + aeropuertos[i].ciudad + "</td><td>" + aeropuertos[i].numVuelos + "</td><td>" + cadenaBoton + "</td></tr>";
  }
}

function addAeropuerto() {
  let nombre = document.forms["formAeropuerto"]["nombre"].value;
  let ciudad = document.forms["formAeropuerto"]["ciudad"].value;
  let numVuelos = document.forms["formAeropuerto"]["numVuelos"].value;
  let empty = true;
  let nombreBoolean = true;
  let ciudadBoolean = true;
  let numVuelosBoolean = true;
  if (nombre == "" || ciudad == "" || numVuelos == "") {
    empty = false;
    alert("Algún campo está vacío!!");
  }
  if (!isNaN(nombre)) {
    nombreBoolean = false;
    alert("Nombre incorrecto");
  }
  if (!isNaN(ciudad)) {
    ciudadBoolean = false;
    alert("Ciudad incorrecta");
  }
  if (isNaN(numVuelos)) {
    numVuelosBoolean = false;
    alert("Número de vuelos incorrecto");
  }
  if (empty && nombreBoolean && ciudadBoolean && numVuelosBoolean) {
    var aeropuerto = new Aeropuerto(nombre, ciudad, numVuelos);
    aeropuertos.push(aeropuerto);
    printAeropuerto();
  }
}

function addVuelo() {
  let codigo = document.forms["formVuelo"]["codigo"].value;
  let horaLlegada = document.forms["formVuelo"]["horaLlegada"].value;
  let minLlegada = document.forms["formVuelo"]["minLlegada"].value;
  let horaSalida = document.forms["formVuelo"]["horaSalida"].value;
  let minSalida = document.forms["formVuelo"]["minSalida"].value;
  var vuelo = new Vuelo(codigo, horaLlegada, minLlegada, horaSalida, minSalida);
  let empty = true;
  let greater = true;
  if (codigo == "" || horaLlegada == "" || minLlegada == "" || horaSalida == "" || minSalida == "") {
    empty = false;
    alert("Algún campo está vacío!!");
  }
  if (vuelo.getLlegada() > vuelo.getSalida()) {
    greater = false;
    alert("Error, la hora de llegada es mayor a la hora de salida");
  }
  if (empty && greater) {
    var vuelo = new Vuelo(codigo, horaLlegada, minLlegada, horaSalida, minSalida);
    vuelos.push(vuelo);
    printVuelo();
  }
}

function printVuelo() {
  var table = document.getElementById("tableVuelo");
  table.innerHTML = "<tr><th>Código</th><th>Hora de llegada</th><th>Hora de salida</th><th>Cambiar hora de llegada</th><th>Cambiar hora de salida</th></tr>";
  for (let i = 0; i < vuelos.length; i++) {
    var horaLlegada = "<input type='button' value ='Modificar hora de llegada' id='boton' onclick='modLlegada(this)'>";
    var horaSalida = "<input type='button' value ='Modificar hora de salida' id='boton' onclick='modSalida(this)'>";
    table.innerHTML += "<tr><td>" + vuelos[i].codigo + "</td><td>" + vuelos[i].llegada + "</td><td>" + vuelos[i].salida + "</td><td>" + horaLlegada + "</td><td>" + horaSalida + "</td></tr>";
  }
}

function modLlegada(codigo) {
  var codigoVuelo =
    codigo.parentNode.previousSibling.previousSibling.previousSibling
      .textContent;
  let hora = prompt("Introduce hora");
  let min = prompt("Introduce minutos");
  let comprobarDate = new Date(hora, min);
  for (let i = 0; i < vuelos.length; i++) {
    if (vuelos[i].codigo == codigoVuelo) {
      if (comprobarDate > vuelos[i].salida) {
        alert("Error, la hora de llegada es mayor a la hora de salida");
      } else {
        vuelos[i].setLlegada(hora, min);
        printVuelo();
      }
    }
  }
}

function modSalida(codigo) {
  var codigoVuelo =
    codigo.parentNode.previousSibling.previousSibling.previousSibling
      .previousSibling.textContent;
  let hora = prompt("Introduce hora");
  let min = prompt("Introduce minutos");
  let comprobarDate = new Date(hora, min);
  for (let i = 0; i < vuelos.length; i++) {
    if (vuelos[i].codigo == codigoVuelo) {
      if (vuelos[i].llegada > comprobarDate) {
        alert("Error, la hora de llegada es mayor a la hora de salida");
      } else {
        vuelos[i].setSalida(hora, min);
        printVuelo();
      }
    }
  }
  printVuelo();
}

function modVuelos(boton) {
  let num = prompt("Introduce el número de vuelos");
  while (isNaN(num)) {
    num = prompt("Número de vuelos incorreto, introduce un número de vuelos");
  }
  var nombre = boton.parentNode.previousSibling.previousSibling.previousSibling.textContent;
  for (let i = 0; i < aeropuertos.length; i++) {
    if (aeropuertos[i].nombre == nombre) {
      aeropuertos[i].setNumVuelos(num);
    }
  }
  printAeropuerto();
}
