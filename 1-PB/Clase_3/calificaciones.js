"use strict";
/*Calcular las calificaciones de un grupo de alumnos, donde la nota final de cada alumno se calcula según el
siguiente criterio:

• la parte práctica vale el 10%
• la parte de ejercicios vale el 50%
• la parte teórica el 40%

Se debe ingresar el nombre del alumno y sus tres notas (práctica, ejercicios y teórica), se escribirá el resultado
y se volverá a pedir los datos del siguiente alumno hasta que el nombre sea una cadena vacía.

Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las notas, mostrará un mensaje de error
y continuará con otro alumno)
___________________________________________________________________________________________________________*/
exports.__esModule = true;
var rls = require("readline-sync");
var practica, ejercicios, teoria;
var nombreAlumno;
console.log('Instruccion: Ingresar el nombre del alumno y sus notas con un numero del 0 al 10');
console.log('En caso de finalizar el listado, dejar el campo vacio y presionar enter para salir del programa');
console.log(' ');
nombreAlumno = rls.question('Ingresar el nombre del alumno: ');
while (nombreAlumno != '') {
    console.log(' ');
    practica = rls.questionInt('Ingresar nota de Practicas (0/10): ');
    ejercicios = rls.questionInt('Ingresar nota de Ejercicios (0/10): ');
    teoria = rls.questionInt('Ingresar nota de Teoricas (0/10): ');
    console.log(' ');
    var total = ((practica * .1) + (ejercicios * .5) + (teoria * .4));
    if (practica > 10 || ejercicios > 10 || teoria > 10) {
        console.log('Una o mas notas ingresadas no son validas, se volveran a pedir los datos del alumno');
    }
    else {
        console.log('El alumno' + ' ' + nombreAlumno + ' ' + 'tiene una calificación de: ' + total);
    }
    nombreAlumno = rls.question('Ingresar el nombre del alumno: ');
}
console.log('La carga de datos ha finalizado');
