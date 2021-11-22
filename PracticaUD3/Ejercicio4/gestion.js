// CLASE EMPLEADO CON 3 PARAMETROS
class Empleado {
    constructor(nombre, dni, telefono) {
        this.nombre = nombre;
        this.dni = dni;
        this.telefono = telefono;
    }
}

// CLASDE MONITOR QUE EXTENDIENDE DE EMPLEADO
class Monitor extends Empleado {
    constructor(nombre, dni, telefono, actividades, sesionesSemana, sesionesSala) {
        super(nombre, dni, telefono);
        this.actividades = actividades;
        this.sesionesSemana = sesionesSemana;
        this.sesionesSala = sesionesSala;
    }
}

// FUNCION QUE AÑADE AL MONITOR, COMPROBANDO PRIMERO LOS CAMPOS
function addMonitor(nombre, dni, telefono, actividades, sesionesSemana, sesionesSala) {
    var monitor = new Monitor(nombre, dni, telefono, actividades, sesionesSemana, sesionesSala);
    monitor.toString();
}

// FUNCION QUE VALIDA LOS CAMPOS 
function validateMonitor() {
    // PARAMETROS MONITOR
    let nombre = document.forms['formulario']['nombre'].value;
    let dni = document.forms['formulario']['dni'].value;
    let telefono = document.forms['formulario']['telefono'].value;
    let actividades = document.forms['formulario']['actividades'].value;
    let sesionesSemana = document.forms['formulario']['sesionesSemana'].value;
    let sesionesSala = document.forms['formulario']['sesionesSala'].value;
    // EXPRESIONES REGULARES
    let reNombre = /^[a-zA-Z]+$/;
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

// MÉTODO TOSTRING
Monitor.prototype.toString = function monitorToString() {
    var lista = document.getElementById('list');
    lista.innerHTML += '<li><strong>Nombre: </strong>' + this.nombre + '</li><li><strong>DNI: </strong>' + this.dni + '</li><li><strong>Telefono: </strong>' + this.telefono + '</li><li><strong>Actividades: </strong>' + this.actividades + '</li><li><strong>Sesiones Semanales: </strong>' + this.sesionesSemana + '</li><li><strong>Sesiones en sala: </strong>' + this.sesionesSala + '</li><br>';
}