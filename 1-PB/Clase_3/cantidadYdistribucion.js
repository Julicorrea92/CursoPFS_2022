"use strict";
/*  • Leer valores del usuario hasta que introduzca un 0
    • El usuario puede introducir valores numéricos, tanto positivos como negativos
    • Contar la cantidad de valores introducidos que sean mayores a 0 y el porcentaje de
    positivos respecto del total*/
exports.__esModule = true;
var rls = require("readline-sync");
console.log('-Ingrese los valores que quiera evaluar. Pueden ser positivos o negativos');
console.log('-Cuando desee terminar de cargar valores ingrese 0 para obtener resultados');
var numero;
var total = 0;
var numeroPositivo = 0;
/* let promedio: number = (numeroPositivo/total)/100*/
while (numero != 0) {
    numero = rls.questionFloat('Ingresar numero: ');
    if (numero > 0) {
        numeroPositivo += 1;
        total += 1;
    }
    else {
        total += 1;
    }
    /* let promedio: number = (total/numeroPositivo)/100*/
}
console.log('La cantidad de numeros positivos son:', numeroPositivo, 'y el porcentaje sobre: ', total, 'es de', (numeroPositivo / total) * 100, '%');
/*Ni declarando promedio afuera de la función ni adentro de la funcion consegui el resultado en el console.log.
Si funciono cuando ingrese la formula directamente en el console.log -Consultar  */
