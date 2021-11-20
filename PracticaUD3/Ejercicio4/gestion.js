class Empleado {
    constructor(nombre, dni, telefono) {
        this.nombre = nombre;
        this.dni = dni;
        this.telefono = telefono;
    }
}

class Monitor extends Empleado {
    constructor(nombre, dni, telefono, actividades, sesionesSemana, sesionesSala) {
        this.nombre = nombre;
        this.dni = dni;
        this.telefono = telefono;
        this.actividades = actividades;
        this.sesionesSemana = sesionesSemana;
        this.sesionesSala = sesionesSala;
    }
}

// MÉTODO TOSTRING
Monitor.prototype.toString = function monitorToString() {
    var retorno = 'El monitor ' + this.nombre + ' con DNI: ' + this.dni + ' y telefono: ' + this.telefono + '. <br>Actividades '+this.actividades+'<br> Número de sesiones semanales  ';
    return retorno;
}