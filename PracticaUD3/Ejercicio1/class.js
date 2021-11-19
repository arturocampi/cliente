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

function addColegio() {
    var nombre = document.forms['colegio']['nombre'].value;
    var numAulas = document.forms['colegio']['numAulas'].value;
    var numAlumnos = document.forms['colegio']['numAlumnos'].value;
    if ((nombre != '') || (numAulas != '') || (numAlumnos != '')) {

        var colegio = new Colegio(nombre, numAulas, numAlumnos, 0);
        var tabla = document.getElementById('tableColegios');
        var filaColegio = document.createElement('tr');
        var cadenaBoton = "<input type='button' value ='Variar Alumnos' id='boton' onclick='modificar(this)'>";
        filaColegio.innerHTML += "<td>" + colegio.nombre + "</td>";
        tabla.innerHTML += '<tr><td>' + colegio.nombre + '</td><td>' + colegio.numAulas + '</td><td>' + colegio.numAlumnos + '</td><td>' + cadenaBoton + '</td></tr>';

    }
}

function comprobarColegio(){
    while((nombre<=1)&&(nombre>=9)){
        let nombre = prompt('Nombre incorrecto, introduce un nombre');
    }
}

function modificar(numero) {
    let num = prompt('Introduce el número de alumnos');
    numero.parentNode.previousSibling.textContent = num;
}


function addAlumno() {
    var dni = document.forms['alumno']['dni'].value;
    var nombre = document.forms['alumno']['nombre'].value;
    var notaMedia = document.forms['alumno']['notaMedia'].value;
    if ((nombre != '') || (numAulas != '') || (numAlumnos != '')) {
        var alumno = new Alumno(dni, nombre, notaMedia, 0);
        var tabla = document.getElementById('tableAlumnos');
        var filaAlumno = document.createElement('tr');
        var cadenaBoton = "<input type='button' value ='Variar Nota Media' id='boton' onclick='modificar(this)'>";
        filaAlumno.innerHTML += "<td>" + alumno.notaMedia + "</td>";
        tabla.innerHTML += '<tr><td>' + alumno.dni + '</td><td>' + alumno.nombre + '</td><td>' + alumno.notaMedia + '</td><td>' + cadenaBoton + '</td></tr>';

    }
}

Colegio.prototype.toString = function colegioToString() {
    var retorno = 'El colegio ' + this.nombre + ' con ' + this.numAulas + ' aulas. Y ' + this.numAlumnos + ' alumnos.';
    return retorno;
}