function UsuarioWeb(user, password, dni) {
    this.user = user;
    this.password = password;
    this.dni = dni;
}

function UsuarioAdministrador(altaEmpleado, tablaEmpleado) {
    this.altaEmpleado = altaEmpleado;
    this.tablaEmpleado = tablaEmpleado;
}

var adminUser = [];

function UsuarioCliente(peso, altura, edad, sexo, imc, fcm) {
    this.peso = peso;
    this.altura = altura;
    this.edad = edad;
    this.sexo = sexo;
    this.imc = imc;
    this.fcm = fcm;
}

var clientUser = [];

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
    if (checkClient(user, dni)) {
        let admin = new UsuarioAdministrador(altaEmpleado, tablaEmpleado);
        admin.prototype = new UsuarioWeb(user, password, dni);
        adminUser.push(admin);
    }
}

function checkClient(user, dni) {
    let available = true;
    for (let i = 0; i < clientUser.length; i++) {
        if ((clientUser[i].prototype.user == user) || (clientUser[i].prototype.dni == dni)) {
            available = false;
            alert('El usuario o el DNI ya existe!');
        }
    }
    return available;
}

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
    let reNombre = /^[a-zA-Z]+$/;
    let reDNI = /^[0-9]{8}[a-zA-Z]$/;
    // COMPROBACION DE LOS CAMPOS 
    while (!reNombre.test(user)) {
        user = prompt('Username incorrecto, introduce un username');
    }
    while (!reDNI.test(dni)) {
        dni = prompt('Dni incorrecto, introduce un dni');
    }
    if (checkAdmin(user, dni)) {
        let client = new UsuarioCliente(peso, altura, edad, sexo, imc, fcm);
        client.prototype = new UsuarioWeb(user, password, dni);
        clientUser.push(client);
    }
}

function checkAdmin(user, dni) {
    let available = true;
    for (let i = 0; i < adminUser.length; i++) {
        if ((adminUser[i].prototype.user == user) || (adminUser[i].prototype.dni == dni)) {
            available = false;
            alert('El usuario o el DNI ya existe!');
        }
    }
    return available;
}

function auth() {
    let user = document.forms['formLogin']['user'].value;
    let password = document.forms['formLogin']['password'].value;
    let credentials = false;
    for (let i = 0; i < adminUser.length; i++) {
        if ((adminUser[i].prototype.user == user) && (adminUser[i].prototype.password == password)) {
            credentials = true;
            alert('Has iniciado sesión como Admin. Bienvenido ' + user + '!');
        }
    }
    for (let i = 0; i < clientUser.length; i++) {
        if ((clientUser[i].prototype.user == user) && (clientUser[i].prototype.password == password)) {
            credentials = true;
            alert('Has iniciado sesión como Cliente. Bienvenido ' + user + '!');
        }
    }
    if (credentials == false) {
        alert('Credenciales incorrectas!');
    }
}
