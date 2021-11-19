function Colegio(nombre, numAulas, numAlumnos) {
    this.nombre = nombre;
    this.numAulas = numAulas;
    this.numAlumnos = numAlumnos;
    //método para modificar el número de alumnos
}

function Alumno(nombre, dni, notaMedia) {
    this.nombre = nombre;
    this.dni = dni;
    this.notaMedia = notaMedia;
    //método para modificar la nota media
}

function crearColegio() {
    let nombre = document.forms['colegio']['nombre'].value;
    let numAulas = document.forms['colegio']['numAulas'].value;
    let numAlumnos = document.forms['colegio']['numAlumnos'].value;
    var colegio = new Colegio(nombre, numAulas, numAlumnos);
    // let colegios = [];
    // let colegios = colegios.push(colegio);
    addColegio(colegio);
}

function addColegio(colegio) {
    // let colegioTabla = colegios[colegios.length];
    var tabla = document.getElementById('tableColegios');
    tabla.innerHTML += '<tr><td>' + colegio.nombre + '</td><td>' + colegio.numAulas + '</td><td>' + colegio.numAlumnos + '</td></tr>';
}

Colegio.prototype.toString = function colegioToString() {
    var retorno = 'El colegio ' + this.nombre + ' con ' + this.numAulas + ' aulas. Y ' + this.numAlumnos + ' alumnos.';
    return retorno;
}