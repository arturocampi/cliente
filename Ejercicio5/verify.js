function verifyPassword() {
    // RECOGE LA CONTRASEÑA
    var password = document.getElementById('password').value;
    // COMPRUEBA QUE TENGA UNA LONGITUD MAYOR A 8
    let menor = true;
    if (password.length < 8) {
        menor = false;
        alert('Contraseña demasiado corta');
    }
    // COMPRUEBA QUE TENGA UNA LONGITUD MENOR A 16
    let mayor = true;
    if (password.length > 16) {
        mayor = false;
        alert('Contrasea demasiado larga');
    }
    // COMPRUEBA QUE NO ESTE VACÍA
    let vacia = true;
    if (password == '') {
        vacia = false;
        alert('La contraseña no puede estar vacía');
    }
    // BOOLEANO MAYÚSCULAS
    let mayus = false;
    // COMPRUEBA QUE TENGA UNA LETRA MAYÚSCULA
    for (let i = 0; i < password.length; i++) {
        if ((password.charAt(i) >= 'A' && password.charAt(i) <= 'Z')) {
            mayus = true;
            break;
        }
    }
    if (!mayus) {
        alert('La contraseña tiene que tener una letra mayúscula');
    }

    // BOOLEANO MINÚSCULAS
    let minus = false;
    // COMPRUEBA QUE TENGA UNA LETRA MINÚSCULA
    for (let i = 0; i < password.length; i++) {
        if ((password.charAt(i) >= 'a' && password.charAt(i) <= 'z')) {
            minus = true;
            break;
        }
    }
    if (!minus) {
        alert('La contraseña tiene que tener una letra minúscula');
    }

    // BOOLEANO NÚMERO
    let num = false;
    // COMPRUEBA QUE TENGA UN NÚMERO
    for (let i = 0; i < password.length; i++) {
        if ((password.charAt(i) >= '0' && password.charAt(i) <= '9')) {
            num = true;
            break;
        }
    }
    if (!num) {
        alert('La contraseña tiene que tener un número');
    }

    // COMPRUEBA QUE TENGA UN CARACTER ESPECIAL 
    let especial = false;
    for (let i = 0; i < password.length; i++) {
        if ((password.charAt(i) == '-') || (password.charAt(i) == '_') || (password.charAt(i) == '@') || (password.charAt(i) == '#') || (password.charAt(i) == '$') || (password.charAt(i) == '%') || (password.charAt(i) == '&')) {
            especial = true;
            break;
        }
    }
    if (!especial) {
        alert('La contraseña tiene que tener un caracter especial');
    }
    check(menor, mayor, vacia, minus, mayus, num, especial);
}

// ESTA FUNCIÓN RECIBE TODOS LOS BOOLEANOS
function check(menor, mayor, vacia, minus, mayus, num, especial) {
    // RECOGE LA FRASE QUE MUESTRA SI ES CORRECTO O NO
    var span = document.getElementById('correcto');
    // EN CASO DE QUE TODOS LOS BOOLEANOS SEAN TRUE LA CONTRASEÑA ES CORRECTA
    if (menor && mayor && vacia && minus && mayus && num && especial) {
        span.style.color = 'lime';
        span.innerHTML = 'Contraseña Correcta!';
    } else {
        // EN CASO CONTRARIO SI UN SOLO BOOLEANO ES FALSE LA CONTRASEÑA ES INCORRECTA
        span.style.color = 'red';
        span.innerHTML = 'Formato de contraseña incorrecta!';
    }
}