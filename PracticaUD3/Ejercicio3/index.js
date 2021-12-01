// FUNCTION CONSTRUCTORA DEL USUARIO WEB
function UsuarioWeb(user, password, dni) {
    this.user = user;
    this.password = password;
    this.dni = dni;
}

// FUNCTION CONSTRUCTORA DEL USUARIO ADMINISTRADOR
function UsuarioAdministrador(altaEmpleado, tablaEmpleado) {
    this.altaEmpleado = altaEmpleado;
    this.tablaEmpleado = tablaEmpleado;
}

var adminUser = [];

// FUNCTION CONSTRUCTORA DEL USUARIO CLIENTE
function UsuarioCliente(peso, altura, edad, sexo, imc, fcm) {
    this.peso = peso;
    this.altura = altura;
    this.edad = edad;
    this.sexo = sexo;
    this.imc = imc;
    this.fcm = fcm;
}

var clientUser = [];

// FUNCTION PARA CREAR USUARIO ADMINISTRADOR
function createAdmin() {
    let user = prompt('Introduce el username:');
    let password = prompt('Introduce un password:');
    let dni = prompt('Introduce un DNI:');
    let altaEmpleado = prompt('Introduce un altaEmpleado:');
    let tablaEmpleado = prompt('Introduce una tablaEmpleado:');
    let reNombre = /^[a-zA-Z]+$/;
    let reDNI = /^[0-9]{8}[a-zA-Z]$/;
    // COMPROBACION DE LOS CAMPOS 
    while (!reNombre.test(user)) {
        user = prompt('Username incorrecto, introduce un username');
    }
    while (!reDNI.test(dni)) {
        dni = prompt('Dni incorrecto, introduce un dni');
    }
    // COMRPRUEBA QUE EL USUARIO ESTÉ DISPONIBLE, SI LO ESTÁ CREAR EL USUARIO
    if (check(user, dni)) {
        UsuarioAdministrador.prototype = new UsuarioWeb(user, password, dni);
        let admin = new UsuarioAdministrador(altaEmpleado, tablaEmpleado);
        adminUser.push(admin);
    } else {
        alert('El usuario o el DNI ya existe!');
    }
}

// FUNCTION PARA COMPROBAR SI EL USUARIO Y DNI ESTÁN YA USADOS
function check(user, dni) {
    let available = true;
    for (let i = 0; i < adminUser.length; i++) {
        if ((adminUser[i].user == user) || (adminUser[i].dni == dni)) {
            available = false;
        }
    }
    for (let i = 0; i < clientUser.length; i++) {
        if ((clientUser[i].user == user) || (clientUser[i].dni == dni)) {
            available = false;
        }
    }
    return available;
}

// FUNCTION PARA CREAR USUARIO CLIENTE
function createCliente() {
    let user = prompt('Introduce el username:');
    let password = prompt('Introduce un password:');
    let dni = prompt('Introduce un DNI:');
    let peso = prompt('Introduce tu peso');
    let altura = prompt('Introdu tu altura:');
    let edad = prompt('Introduce tu edad:');
    let sexo = prompt('Introduce tu sexo');
    let imc = prompt('Introduce tu IMC');
    let fcm = prompt('Introduce tu FCM');
    // COMPROBACION DE LOS CAMPOS 
    let reNombre = /^[a-zA-Z]+$/;
    let reDNI = /^[0-9]{8}[a-zA-Z]$/;
    while (!reNombre.test(user)) {
        user = prompt('Username incorrecto, introduce un username');
    }
    while (!reDNI.test(dni)) {
        dni = prompt('Dni incorrecto, introduce un dni');
    }
    // COMRPRUEBA QUE EL USUARIO ESTÉ DISPONIBLE, SI LO ESTÁ CREAR EL USUARIO
    if (check(user, dni)) {
        let client = new UsuarioCliente(peso, altura, edad, sexo, imc, fcm);
        client.prototype = new UsuarioWeb(user, password, dni);
        clientUser.push(client);
    } else {
        alert('El usuario o el DNI ya existe!');
    }
}

// FUNCTION PARA INICIAR SESION
function auth() {
    let user = document.forms['formLogin']['user'].value;
    let password = document.forms['formLogin']['password'].value;
    let login = false;
    for (let i = 0; i < adminUser.length; i++) {
        if ((adminUser[i].prototype.user == user) && (adminUser[i].prototype.password == password)) {
            login = true;
            alert('Has iniciado sesión como Admin. Bienvenido ' + user + '!');
        }
    }
    for (let i = 0; i < clientUser.length; i++) {
        if ((clientUser[i].prototype.user == user) && (clientUser[i].prototype.password == password)) {
            login = true;
            alert('Has iniciado sesión como Cliente. Bienvenido ' + user + '!');
        }
    }
    // SI LAS CREDENCIALES SON INCORRECTAS DEVUELVE ERROR
    if (!login) {
        alert('Credenciales incorrectas!');
    }
}
