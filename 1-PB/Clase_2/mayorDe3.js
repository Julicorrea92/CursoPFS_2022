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
if (valor2 > valor1 && valor2 > valor3) {
    console.log('El numero mayor es el 2do numero:' + valor2);
}
if (valor3 > valor1 && valor3 > valor2) {
    console.log('El numero mayor es el 3er numero:' + valor3);
}
/*Pienso que en la linea 18 debería ir: else (valor3>valor1 && valor3>valor2){
                                            console.log('El numero mayor es el 3er numero:'+ valor3)}.
    
Sin embargo, la compilación encuentra un error en la llave de apertura: mayorDe3.ts:17:38 - error TS1005: ';' expected.

17 else (valor3>valor1 && valor3>valor2){
                                        ~


Found 1 error in mayorDe3.ts:17

Consultar*/
