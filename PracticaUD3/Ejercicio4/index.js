// CLASE EMPLEADO CON 3 PARAMETROS
class Empleado {
    constructor(nombre, dni, telefono) {
        this.nombre = nombre;
        this.dni = dni;
        this.telefono = telefono;
    }
}

var empleados = [];

// CLASE MONITOR QUE EXTENDIENDE DE EMPLEADO
class Monitor extends Empleado {
    constructor(nombre, dni, telefono, actividades, sesionesSemana, sesionesSala) {
        super(nombre, dni, telefono);
        this.actividades = actividades;
        this.sesionesSemana = sesionesSemana;
        this.sesionesSala = sesionesSala;
    }
}

var monitores = [];

// FUNCION QUE VALIDA LOS CAMPOS 
function validateEmpleado() {
    // PARAMETROS MONITOR
    let nombre = document.forms['empleado']['nombre'].value;
    let dni = document.forms['empleado']['dni'].value;
    let telefono = document.forms['empleado']['telefono'].value;
    // EXPRESIONES REGULARES
    let reNombre = /(?![\s.]+$)[a-zA-Z\s.]*/;
    let reDNI = /^[0-9]{8}[a-zA-Z]$/;
    let reTel = /^[0-9]{9}$/;
    // COMPROBACION DE LOS CAMPOS 
    while (!reNombre.test(nombre)) {
        nombre = prompt('Nombre incorrecto, introduce un nombre');
    }
    while (!reDNI.test(dni)) {
        dni = prompt('Dni incorrecto, introduce un dni');
    }
    while (!reTel.test(telefono)) {
        telefono = prompt('Telefono incorrecto, introduce un telefono');
    }
    addEmpleado(nombre, dni, telefono);
}

// FUNCTION PARA AÑADIR EMPLEADOS
function addEmpleado(nombre, dni, telefono) {
    var empleado = new Empleado(nombre, dni, telefono);
    empleados.push(empleado);
    alert('Has añadido un empleado!');
}

// FUNCTION PARA IMPRIMIR LA TABLA DE EMPLEADOS
function printEmpleado() {
    let tablaEmpleado = document.getElementById('empleados');
    tablaEmpleado.innerHTML = '';
    for (let i = 0; i < empleados.length; i++) {
        tablaEmpleado.innerHTML += '<li><strong>Nombre: </strong>' + empleados[i].nombre + '</li><li><strong>DNI: </strong>' + empleados[i].dni + '</li><li><strong>Telefono: </strong>' + empleados[i].telefono + '</li><br>';
    }
}

// FUNCION QUE AÑADE AL MONITOR, COMPROBANDO PRIMERO LOS CAMPOS
function addMonitor(nombre, dni, telefono, actividades, sesionesSemana, sesionesSala) {
    var monitor = new Monitor(nombre, dni, telefono, actividades, sesionesSemana, sesionesSala);
    monitores.push(monitor);
    alert('Has añadido un monitor!');
    // monitor.toString();
}

// FUNCION QUE VALIDA LOS CAMPOS 
function validateMonitor() {
    // PARAMETROS MONITOR
    let nombre = document.forms['monitor']['nombre'].value;
    let dni = document.forms['monitor']['dni'].value;
    let telefono = document.forms['monitor']['telefono'].value;
    let actividades = document.forms['monitor']['actividades'].value;
    let sesionesSemana = document.forms['monitor']['sesionesSemana'].value;
    let sesionesSala = document.forms['monitor']['sesionesSala'].value;
    // EXPRESIONES REGULARES
    let reNombre = /(?![\s.]+$)[a-zA-Z\s.]*/;
    let reDNI = /^[0-9]{8}[a-zA-Z]$/;
    let reTel = /^[0-9]{9}$/;
    // COMPROBACION DE LOS CAMPOS 
    while (!reNombre.test(nombre)) {
        nombre = prompt('Nombre incorrecto, introduce un nombre');
    }
    while (!reDNI.test(dni)) {
        dni = prompt('Dni incorrecto, introduce un dni');
    }
    while (!reTel.test(telefono)) {
        telefono = prompt('Telefono incorrecto, introduce un telefono');
    }
    while (isNaN(actividades)) {
        actividades = prompt('Actividades incorrectas, introduce actividades');
    }
    while (isNaN(sesionesSemana)) {
        sesionesSemana = prompt('Sesiones en la semana incorrectas, introduce las sesiones en la semana')
    }
    while (isNaN(sesionesSala)) {
        sesionesSala = prompt('Sesiones en sala incorrectas, introduce las sesiones en sala');
    }
    addMonitor(nombre, dni, telefono, actividades, sesionesSemana, sesionesSala);
}

// FUNCTION PARA IMPRIMIR LA TABLA DE MONITORES
function printMonitor() {
    let tablaMonitor = document.getElementById('monitores');
    tablaMonitor.innerHTML = '';
    for (let i = 0; i < monitores.length; i++) {
        tablaMonitor.innerHTML += '<li><strong>Nombre: </strong>' + monitores[i].nombre + '</li><li><strong>DNI: </strong>' + monitores[i].dni + '</li><li><strong>Telefono: </strong>' + monitores[i].telefono + '</li><li><strong>Actividades: </strong>' + monitores[i].actividades + '</li><li><strong>Sesiones Semanales: </strong>' + monitores[i].sesionesSemana + '</li><li><strong>Sesiones en sala: </strong>' + monitores[i].sesionesSala + '</li><br>';
    }
}