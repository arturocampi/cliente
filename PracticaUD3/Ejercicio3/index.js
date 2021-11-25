class UsuarioWeb {
    constructor(user, password, dni,) {
        this.user = user;
        this.password = password;
        this.dni = dni;
    }
}

class UsuarioAdministrador extends UsuarioWeb {
    constructor(user, password, dni) {
        super(user, password, dni);
    }
    altaEmpleados(){

    }
    crearTabla(){
        
    }
}

class UsuarioCliente extends UsuarioWeb {
    constructor(user, password, dni) {
        super(user, password, dni);
    }
}