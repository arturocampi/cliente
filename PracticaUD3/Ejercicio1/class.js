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
    // var colegio1 = new Colegio(nombre, numAulas, numAlumnos);
    // alert(colegio1.toString());
    
    var tabla = document.getElementById('tableColegios');
    var filas = tabla.getElementsByTagName('tr');
    for (let i = 1; i <= 6; i++) {
        // CONTROLA LAS FILAS
        for (let j = 1; j <= filas.length - 1; j++) {
            // IMPRIME DE FORMA ALEATORIA UNA ACTIVIDAD EN LA TABLA
            filas1[j].innerHTML += '<td>' + sesiones[Math.floor(Math.random() * sesiones.length)] + '</td>';
        }
    }
    // filas.innerHTML += '<th>' + nombre + '</th>' + '<th>' + numAulas + '</th>' + '<th>' + numAlumnos + '</th>';
}

Colegio.prototype.toString = function colegioToString() {
    var retorno = 'El colegio ' + this.nombre + ' con ' + this.numAulas + ' aulas. Y ' + this.numAlumnos + ' alumnos.';
    return retorno;
}