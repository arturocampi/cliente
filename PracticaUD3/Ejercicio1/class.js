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

function addColegio() {
    let nombre = document.forms['colegio']['nombre'].value;
    let numAulas = document.forms['colegio']['numAulas'].value;
    let numAlumnos = document.forms['colegio']['numAlumnos'].value;
    var colegio1 = new Colegio(nombre, numAulas, numAlumnos);
    // alert(colegio1.toString());
}

Colegio.prototype.toString = function colegioToString() {
    var retorno = 'El colegio ' + this.nombre + ' con ' + this.numAulas + ' aulas. Y ' + this.numAlumnos + ' alumnos.';
    return retorno;
}