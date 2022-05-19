"use strict";
/*
• Diseñar un algoritmo que muestre por pantalla la tabla de multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de multiplicación, el usuario también deberá
 ingresar un valor
 */
exports.__esModule = true;
var rls = require("readline-sync");
console.log('- Ingresar el numero que se desea multiplicar');
console.log('- Ingresar el numero hasta el que se desea saber los resultados');
console.log('');
var numeroX, numeroY;
var contador = 1;
numeroX = rls.questionInt('Numero que se desea multiplicar: ');
numeroY = rls.questionInt('Numero hasta donde llegamos con la multiplicacion: ');
for (contador; contador <= numeroY; contador += 1) {
    var resultado = numeroX * contador;
    console.log(numeroX, '', 'X', '', contador, '=', (resultado));
}
