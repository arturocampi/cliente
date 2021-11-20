function Colegio(nombre, numAulas, numAlumnos) {
    this.nombre = nombre;
    this.numAulas = numAulas;
    this.numAlumnos = numAlumnos;
    this.variacion = function modificarAlumnos(variacion) {
        this.numAlumnos = this.numAlumnos + variacion;
    }
    //método para modificar el número de alumnos
}

function Alumno(dni, nombre, notaMedia) {
    this.dni = dni;
    this.nombre = nombre;
    this.notaMedia = notaMedia;
    this.variacion = function modificarNotaMedia(variacion) {
        this.notaMedia = this.notaMedia + variacion;
    }
    //método para modificar la nota media
}

function comprobarColegio() {
    var nombre = document.forms['colegio']['nombre'].value;
    var numAulas = document.forms['colegio']['numAulas'].value;
    var numAlumnos = document.forms['colegio']['numAlumnos'].value;
    if ((nombre != '') || (numAulas != '') || (numAlumnos != '')) {
        while (!isNaN(nombre)) {
            nombre = prompt('Nombre incorrecto, introduce un nombre');
        }
        while (isNaN(numAulas)) {
            numAulas = prompt('Número de aulas incorrecto, introduce un número de aulas');
        }
        while (isNaN(numAlumnos)) {
            numAlumnos = prompt('Número de alumnos incorrecto, introduce un número de alumnos');
        }
        var colegio = new Colegio(nombre, numAulas, numAlumnos, 0);
        addColegio(colegio);
    }
}

function addColegio(colegio) {
    var tabla = document.getElementById('tableColegios');
    var filaColegio = document.createElement('tr');
    var cadenaBoton = "<input type='button' value ='Variar Alumnos' id='boton' onclick='modificar(this)'>";
    filaColegio.innerHTML += "<td>" + colegio.nombre + "</td>";
    tabla.innerHTML += '<tr><td>' + colegio.nombre + '</td><td>' + colegio.numAulas + '</td><td>' + colegio.numAlumnos + '</td><td>' + cadenaBoton + '</td></tr>';
}

function comprobarAlumno() {
    var dni = document.forms['alumno']['dni'].value;
    var nombre = document.forms['alumno']['nombre'].value;
    var notaMedia = document.forms['alumno']['notaMedia'].value;
    if ((dni != '') || (nombre != '') || (notaMedia != '')) {
        var re = /^[0-9]{8}[a-zA-Z]$/;
        while (!re.test(dni)) {
            dni = prompt('Dni incorrecto, introduce un dni');
        }
        while (!isNaN(nombre)) {
            nombre = prompt('Nombre incorrecto, introduce un número nombre');
        }
        while (isNaN(notaMedia)) {
            notaMedia = prompt('Nota media incorrecta, introduce una nota media');
        }
        var alumno = new Alumno(dni, nombre, notaMedia, 0);
        addAlumno(alumno);
    }
}

// FUNCIÓN QUE CREA AL ALUMNO EN LA TABLA
function addAlumno(alumno) {
    var tabla = document.getElementById('tableAlumnos');
    var filaAlumno = document.createElement('tr');
    var cadenaBoton = "<input type='button' value ='Variar Nota Media' id='boton' onclick='modificar(this)'>";
    filaAlumno.innerHTML += "<td>" + alumno.notaMedia + "</td>";
    tabla.innerHTML += '<tr><td>' + alumno.dni + '</td><td>' + alumno.nombre + '</td><td>' + alumno.notaMedia + '</td><td>' + cadenaBoton + '</td></tr>';
}

// MODIFICA EL PARAMETRO PASADO
function modificar(numero) {
    let num = prompt('Introduce el número de alumnos');
    while (isNaN(num)) {
        num = prompt('Número incorrecto, introduce el número de alumnos');
    }
    numero.parentNode.previousSibling.textContent = num;
}