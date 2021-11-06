function comprobar() {
    let edad = document.forms['formulario']['edad'].value;
    let sexo = document.forms['formulario']['sexo'].value;
    let stateEdad = false;
    let stateSexo = false;
    if (edad >= 15 && edad <= 65) {
        stateEdad = true;
    }
    if (isNaN(sexo) && (sexo.toUpperCase() == 'MUJER' || sexo.toUpperCase() == 'HOMBRE')) {
        stateSexo = true;
    }
    if (stateEdad && stateSexo) {
        calcular(edad);
    } else if (!stateSexo) {
        alert('Sexo introducido incorrecto');
    } else if (!stateEdad) {
        alert('Edad introducida incorrecta');
    }
}

function calcular(edad) {
    var num = 220 - edad;

    var li1 = document.getElementById(1);
    li1.textContent = `Zona de recuperación (60%-70%): ${Math.floor(num * 0.6)}-${Math.floor(num * 0.7)} `;

    var li2 = document.getElementById(2);
    li2.textContent = `Zona aeróbica (70%-80%): ${Math.floor(num * 0.7)}-${Math.floor(num * 0.8)}`;

    var li3 = document.getElementById(3);
    li3.textContent = `Zona anaeróbica (80%-90%): ${Math.floor(num * 0.8)}-${Math.floor(num * 0.9)}`;

    var li4 = document.getElementById(4);
    li4.textContent = `Línea roja (90%-100%): ${Math.floor(num * 0.9)}-${num}`;

    var calculo = document.getElementById("answer");
    calculo.textContent = `Tu frecuencia máxima es de ${num} pulsaciones`;
}