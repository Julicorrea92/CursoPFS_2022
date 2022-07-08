/*• Realice una calculadora que suma o resta según el pedido del usuario.
• El usuario deberá ingresar 2 números por teclado
• Luego ingresará una opción:
• Si ingresa 1 los números se sumaran
• Si ingresa 2 los números se restaran
• Si ingresa cualquier otra tecla termina el programa
• Para informar el resultado de la operación debe usar el
siguiente formato (40 ‘-’):



import * as rls from 'readline-sync';

console.log('Calculadora');

let numero1 : number = rls.questionInt("Ingrese un número: ");
let numero2 : number = rls.questionInt("Ingrese un número: ");

let opcionMenu : number = rls.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir"); 

let i : number;
let linea: string;
let resultado : number = 0;


if (opcionMenu == 1) {
   
    resultado = (numero1 + numero2);
}
else if (opcionMenu == 2) {

    resultado = (numero1 - numero2);
}


console.log('El resultado es: ', resultado);






function dibujar(numero: number):  {

   let linea = simbolo.toString();

    for (i = 0; i <= numero; i++) {
        linea = linea + simbolo;
    };
return linea 
}*/



import * as rls from 'readline-sync';

function dibujar(numero: number, simbolo: string) {
let linea : string = simbolo;
for (i = 0; i <= numero; i++) {
linea = linea + simbolo;
};
console.log(linea);
}
let i : number, linea : string;
let numero1 : number = rls.questionInt("Ingrese un número: "); ;
let numero2 : number = rls.questionInt("Ingrese un número: "); ;
let opcionMenu : number = rls.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ");

if (opcionMenu==1) {
dibujar(40,'+');
console.log("el resultado es: ", numero1 + numero2);
dibujar(40,'+');
} else {
dibujar(30,'-');
console.log("el resultado es: ", numero1 - numero2);
dibujar(30,'-');
}

// Revisar como armar el ejemplo