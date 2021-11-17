function comprobar() {
    // RECOGEMOS LOS DATOS DEL FORMULARIO
    let edad = document.forms['formulario']['edad'].value;
    let sexo = document.forms['formulario']['sexo'].value;

    // COMPROBAMOS SI LA EDAD INTRODUCIDA ES CORRECTA, CON UN BOOLEANO LE DAMOS EL VALOR FALSE
    let stateEdad = false;
    if (edad >= 15 && edad <= 65) {
        stateEdad = true;
    }
    // EN CASO DE SER INCORRECTA, LE PEDIREMOS QUE LA INTRODUZCA HASTA QUE SEA CORRECTA
    while (!stateEdad) {
        edad = prompt('Edad incorrecta, introduce tu edad');
        if (edad >= 15 && edad <= 65) {
            stateEdad = true;
        }
    }

    // COMPROBAMOS SI EL SEXO INTRODUCIDO ES CORRECTO, CON UN BOOLEANO LE DAMOS EL VALOR FALSE
    let stateSexo = false;
    if (isNaN(sexo) && (sexo.toUpperCase() == 'MUJER' || sexo.toUpperCase() == 'HOMBRE')) {
        stateSexo = true;
    }
    // EN CASO DE SER INCORRECTO, LE PEDIREMOS QUE LO INTRODUZCA HASTA QUE SEA CORRECTA
    while (!stateSexo) {
        sexo = prompt('Genero incorrecto, introduce tu genero');
        if (isNaN(sexo) && (sexo.toUpperCase() == 'MUJER' || sexo.toUpperCase() == 'HOMBRE')) {
            stateSexo = true;
        }
    }

    // SI AMBOS VALORES SON CORRECTOS ENTONCES CALCULAREMOS LA FCM
    if (stateEdad && stateSexo) {
        calcular(edad);
    }
}

function calcular(edad) {
    // CALCULAMOS EL FCM
    var num = 220 - edad;

    // DEPENDIENDO DEL RESULTADO CALCULAREMOS LOS PORCENTAJES MEDIANTE LAS OPERACIONES
    var li1 = document.getElementById(1);
    li1.textContent = `Zona de recuperación (60%-70%): ${Math.floor(num * 0.6)}-${Math.floor(num * 0.7)} `;

    var li2 = document.getElementById(2);
    li2.textContent = `Zona aeróbica (70%-80%): ${Math.floor(num * 0.7)}-${Math.floor(num * 0.8)}`;

    var li3 = document.getElementById(3);
    li3.textContent = `Zona anaeróbica (80%-90%): ${Math.floor(num * 0.8)}-${Math.floor(num * 0.9)}`;

    var li4 = document.getElementById(4);
    li4.textContent = `Línea roja (90%-100%): ${Math.floor(num * 0.9)}-${num}`;

    // MOSTRAMOS RESULTADO POR PANTALLA
    var calculo = document.getElementById("answer");
    calculo.textContent = `Tu frecuencia máxima es de ${num} pulsaciones`;
}