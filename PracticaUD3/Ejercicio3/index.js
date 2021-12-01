// FUNCTION CONSTRUCTORA DEL USUARIO WEB
function UsuarioWeb(login, password, nombre, dni, role) {
    this.login = login;
    this.password = password;
    this.nombre = nombre;
    this.dni = dni;
    this.role = role;
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
    let login = prompt('Introduce el login:');
    let password = prompt('Introduce un password:');
    let nombre = prompt('Introduce un nombre:');
    let dni = prompt('Introduce un DNI:');
    let role = prompt('Introduce un role:');
    let altaEmpleado = prompt('Introduce un altaEmpleado:');
    let tablaEmpleado = prompt('Introduce una tablaEmpleado:');
    let reNombre = /^[a-zA-Z]+$/;
    let reDNI = /^[0-9]{8}[a-zA-Z]$/;
    // COMPROBACION DE LOS CAMPOS 
    while (!reNombre.test(login)) {
        user = prompt('Username incorrecto, introduce un username');
    }
    while (!reDNI.test(dni)) {
        dni = prompt('Dni incorrecto, introduce un dni');
    }
    // COMRPRUEBA QUE EL USUARIO ESTÉ DISPONIBLE, SI LO ESTÁ CREAR EL USUARIO
    if (check(login, dni)) {
        UsuarioAdministrador.prototype = new UsuarioWeb(login, password, nombre, dni, role);
        let admin = new UsuarioAdministrador(altaEmpleado, tablaEmpleado);
        adminUser.push(admin);
    } else {
        alert('El usuario o el DNI ya existe!');
    }
}

// FUNCTION PARA COMPROBAR SI EL USUARIO Y DNI ESTÁN YA USADOS
function check(login, dni) {
    let available = true;
    for (let i = 0; i < adminUser.length; i++) {
        if ((adminUser[i].login == login) || (adminUser[i].dni == dni)) {
            available = false;
        }
    }
    for (let i = 0; i < clientUser.length; i++) {
        if ((clientUser[i].login == login) || (clientUser[i].dni == dni)) {
            available = false;
        }
    }
    return available;
}

// FUNCTION PARA CREAR USUARIO CLIENTE
function createCliente() {
    let login = prompt('Introduce el login:');
    let password = prompt('Introduce un password:');
    let nombre = prompt('Introduce un nombre:');
    let dni = prompt('Introduce un DNI:');
    let role = prompt('Introduce un role:');
    let peso = prompt('Introduce tu peso');
    let altura = prompt('Introdu tu altura:');
    let edad = prompt('Introduce tu edad:');
    let sexo = prompt('Introduce tu sexo');
    let imc = prompt('Introduce tu IMC');
    let fcm = prompt('Introduce tu FCM');
    // COMPROBACION DE LOS CAMPOS 
    let reNombre = /^[a-zA-Z]+$/;
    let reDNI = /^[0-9]{8}[a-zA-Z]$/;
    while (!reNombre.test(login)) {
        user = prompt('Username incorrecto, introduce un username');
    }
    while (!reDNI.test(dni)) {
        dni = prompt('Dni incorrecto, introduce un dni');
    }
    // COMRPRUEBA QUE EL USUARIO ESTÉ DISPONIBLE, SI LO ESTÁ CREAR EL USUARIO
    if (check(login, dni)) {
        UsuarioCliente.prototype = new UsuarioWeb(login, password, nombre, dni, role);
        var client = new UsuarioWeb(peso, altura, edad, sexo, imc, fcm);
        clientUser.push(client);
    } else {
        alert('El usuario o el DNI ya existe!');
    }
}

// FUNCTION PARA INICIAR SESION
function auth() {
    let login = document.forms['formLogin']['login'].value;
    let password = document.forms['formLogin']['password'].value;
    let state = false;
    for (let i = 0; i < adminUser.length; i++) {
        if ((adminUser[i].login == login) && (adminUser[i].password == password)) {
            state = true;
            alert('Has iniciado sesión como Admin. Bienvenido ' + user + '!');
        }
    }
    for (let i = 0; i < clientUser.length; i++) {
        if ((clientUser[i].login == login) && (clientUser[i].password == password)) {
            state = true;
            alert('Has iniciado sesión como Cliente. Bienvenido ' + user + '!');
        }
    }
    // SI LAS CREDENCIALES SON INCORRECTAS DEVUELVE ERROR
    if (!state) {
        alert('Credenciales incorrectas!');
    }
}
