/* Diseñar un algoritmo que muestre por pantalla la tabla de multiplicación del número ingresado por el usuario
   Para definir hasta qué número desea que muestre la tabla de multiplicación, el usuario también deberá
 ingresar un valor
 */

import * as rls from 'readline-sync'

console.log('- Ingresar el numero que se desea multiplicar');
console.log('- Ingresar el numero hasta el que se desea saber los resultados');
console.log('');

let numeroX, numeroY: number;
let contador: number = 1;


numeroX= rls.questionInt('Numero que se desea multiplicar: ');
numeroY= rls.questionInt('Numero hasta donde llegamos con la multiplicacion: ');

for (contador; contador <= numeroY; contador+=1){

let resultado: number = numeroX*contador;
    
console.log(numeroX,'','X','',contador,'=', (resultado));
}

/*Probe con console.log(numeroX+''+'X'+''+contador+'='+ (resultado)) (similar al console.log de calificaciones.ts)
pero los resultados se pegaban, poniendo comas queda mas prolijo el programa*/

/*Se va a probar commit sin los .js*/
