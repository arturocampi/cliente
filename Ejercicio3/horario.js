//crear una tabla con Javascript con cabeceras Nombre  ytelefono y dos filas de datos
function cargaTabla()
{
    var tabla = document.createElement('table');
    var fila = document.createElement('tr');
    var celda = document.createElement('td');
    var textoCelda = document.createTextNode('Nombre');
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
    tabla.appendChild(fila);
    document.getElementById('body').appendChild(tabla);
}