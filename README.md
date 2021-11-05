# PR 2.1. Sintaxis básica con JavaScript.
El gimnasio al que acudes se ha enterado de que estás estudiando programación web y te ha preguntado si serías capaz de implementar la página web que tienen pensada. ¿Tú cómo lo ves?
Aquí tienes las funcionalidades que quieren implementar en ella.  
## 1.	(1 punto) Calculadora de IMC- Índice de masa corporal.
Crea un programa que solicite al usuario sus centímetros y el peso en kg y devuelva el Índice de Masa Corporal escrito en la pantalla (en el cuerpo de la página). 
Además de mostrar el resultado, mostrará la siguiente escala y marcará de alguna forma (negrita, cursiva, subrayado, color…) la clasificación:
*	<16.00: Infrapeso (delgadez severa)
*	16.00 – 16.99: Infrapeso (delgadez moderada)
*	17.00 - 18.49: Infrapeso (delgadez aceptable)
*	18.50 - 24.99: Peso normal
*	25.00 - 29.99: Sobrepeso
*	30.00 - 34.99: Obeso (Tipo I)
*	35.00 - 40.00: Obeso (Tipo II)
*	&gt;40.00: Obeso (Tipo III)

La calculadora también comprobará que no se introduzca ningún valor incorrecto de peso ni altura, y en caso de que así sea, volverá a solicitar los datos.
## 2.	(1 punto) Calculadora de FCM –Frecuencia Cardiaca Máxima- (fcm.js)
Crea un programa que solicite al usuario su edad y su sexo y devuelva la frecuencia cardiaca máxima por pantalla (en el cuerpo de la página).
Además, indicará los siguientes valores:
*	Zona de recuperación (60%-70%).
*	Zona aeróbica (70%-80%).
*	Zona anaeróbica (80%-90%).
*	Línea roja (90%-100%).
El programa también deberá comprobar que los valores de edad y sexo introducidos son correctos, en caso contrario deberá volver a solicitar los datos.


## 3.	(3 puntos) Horario del gimnasio (horario.js)
Crea un programa que genere dos tablas html con los horarios de la asociación.
*	La primera tabla contendrá el horario de actividades dirigidas y mostrará las franjas horarias de una en una con el formato 9:00-11:00, desde las 7:00 hasta las 21:00 y los días del lunes al sábado.
*	Por ejemplo, a partir de un array que contenga los nombres de varias actividades, el programa las distribuirá sobre la tabla, de forma que todas las actividades sean impartidas durante más de un día a la semana.
*	La segunda tabla mostrará el horario de sesiones de fisioterapeuta. Los períodos de tiempo serán de 45 minutos, desde las 10:00 a las 13:45 y desde las 17:00 hasta las 21:15 de lunes a viernes.
*	Por ejemplo, a partir de un array que contenga los nombres de los fisioterapeutas, el programa distribuirá las sesiones a lo largo de la semana.
## 4.	(4 puntos) Filtrado por actividad/fisioterapeuta.
Junto a las tablas de horarios existirá un listado con las actividades y fisioterapeutas. El usuario de la página web podrá seleccionar en nombre de una actividad o fisioterapeuta y las celdas correspondientes serán resaltadas en la tabla. En el caso de los fisioterapeutas solo podrá seleccionarse uno, en el caso de las actividades podrán seleccionarse varias.

## 5.  (1 punto) Password seguro.
Crea un programa que solicite al usuario una contraseña y compruebe si es segura teniendo en cuenta lo siguiente:
*	Que tiene entre 8 y 16 caracteres.
*	Que tiene una letra mayúscula.
*	Que tiene una letra minúscula.
*	Que tiene un número.
*	Que tiene uno de los siguientes caracteres: guión alto, guión bajo, arroba, almohadilla, dólar, tanto por ciento o ampersand.
NOTA: puedes crear una función para cada comprobación. 		


### CALIFICACIÓN

*	Entrega tanto el código en html como capturas de su correcto funcionamiento.
*	El valor de esta práctica es de un 40% de la nota de prácticas de la evaluación.
*	La práctica será calificada sobre 10 atendiendo a las puntuaciones parciales especificadas en cada apartado.
*	Fecha límite de entrega: 10 de noviembre de 2021 a las 23:59 en Aeducar.

