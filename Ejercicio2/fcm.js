function comprobar() {
    let edad = document.forms['formulario']['edad'].value;
    let edad = document.forms['formulario']['edad'].value;
    let state = true;
    if (edad < 15 || edad > 65) {
        alert('Edad introducida incorrecta');
        state = false;
    }
    if (sexo != 'mujer' || sexo != 'hombre') {
        alert('Sexo introducido incorrecto');
        state = false;
    }
    if (state) {
        calcular(edad);
    }
}

function calcular(edad) {
    var num = 220 - edad;

    var li1 = document.getElementById(1);
    li1.textContent = `Zona de recuperación (60%-70%): ${num * 0.6}-${num * 0.7} `;

    var li2 = document.getElementById(2);
    li2.textContent = `Zona aeróbica (70%-80%): ${num * 0.7}-${num * 0.8}`;

    var li3 = document.getElementById(3);
    li3.textContent = `Zona anaeróbica (80%-90%): ${num * 0.8}-${num * 0.9}`;

    var li4 = document.getElementById(4);
    li4.textContent = `Línea roja (90%-100%): ${num * 0.9}-${num * 1}`;

    var calculo = document.getElementById("answer");
    calculo.textContent = `Tu frecuencia máxima es de ${num} pulsaciones`;
}