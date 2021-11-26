function UsuarioWeb(user, password, dni) {
    this.user = user;
    this.password = password;
    this.dni = dni;
}

UsuarioAdministrador.prototype = new UsuarioWeb('a','b','c');
UsuarioAdministrador.prototype = new UsuarioWeb('1','2','3');

function UsuarioAdministrador(altaEmpleado,tablaEmpleado){
    this.altaEmpleado = altaEmpleado;
    this.tablaEmpleado = tablaEmpleado;
}

function UsuarioCliente(peso,altura,edad,sexo,imc,fcm){
    this.peso = peso;
    this.altura = altura;
    this.edad = edad;
    this.sexo = sexo;
    this.imc = imc;
    this.fcm = fcm;
}
