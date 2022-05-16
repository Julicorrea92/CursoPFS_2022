"use strict";
/*Desarrolle un algoritmo que dados tres números determine cuál es el mayor de los tres*/
exports.__esModule = true;
var rls = require("readline-sync");
var valor1 = rls.questionInt('Ingresar 1er numero: ');
var valor2 = rls.questionInt('Ingresar 2do numero: ');
var valor3 = rls.questionInt('Ingresar 3er numero: ');
if (valor1 > valor2 && valor1 > valor3) {
    console.log('El numero mayor es el 1er numero:' + valor1);
}
else if (valor2 > valor1 && valor2 > valor3) {
    console.log('El numero mayor es el 2do numero:' + valor2);
}
else if (valor3 > valor1 && valor3 > valor2) {
    console.log('El numero mayor es el 3er numero:' + valor3);
}
/*Corrección 16-5-2022: se agregaron los ; y se anidaron los if */
