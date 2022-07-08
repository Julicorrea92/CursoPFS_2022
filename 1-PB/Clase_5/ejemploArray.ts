
import * as rls from "readline-sync";

let num :  number [] = new Array (5);
num [0]= rls.questionInt("Ingrese un numero: ");
num [1]= rls.questionInt("Ingrese un numero: ");
num [2]= rls.questionInt("Ingrese un numero: ");
num [3]= rls.questionInt("Ingrese un numero: ");
num [4]= rls.questionInt("Ingrese un numero: ");

console.log ("Los valores son: "+ num);

/*
let nroMes : number = rls.questionInt("Indique el número de mes que le interesa: ");
switch (nroMes) {
case 1: console.log("El mes es Enero"); break;
case 2: console.log("El mes es Febrero"); break;
case 3: console.log("El mes es Marzo"); break;
case 4: console.log("El mes es Abril"); break;
case 5: console.log("El mes es Mayo"); break;
case 6: console.log("El mes es Junio"); break;
case 7: console.log("El mes es Julio"); break;
case 8: console.log("El mes es Agosto"); break;
case 9: console.log("El mes es Septiembre"); break;
case 10: console.log("El mes es Octubre"); break;
case 11: console.log("El mes es Noviembre"); break;
case 12: console.log("El mes es Diciembre"); break;
default: console.log("Ud no ha escrito un número de mes válido");
}
*/

let nroDeseadoArreglo : number[] = new Array (5);
let nro : number, i: number;
for (i =0; i < 5; i++) {
nro = rls.questionInt(`Indique el número que desea incorporar en la posición ${i}: `);
nroDeseadoArreglo[i] = nro;
}
for (i = 1; i <= 5; i++) {
console.log(`El número en la posición ${i} es ${nroDeseadoArreglo[i]}`);
}


let dimensionArreglo : number = rls.questionInt(`Ingrese la dimensión del arreglo: `);
let nombrePersonas : string[] = new Array (dimensionArreglo);
let indice : number;

for (indice = 1; indice <= dimensionArreglo; indice++) {
nombrePersonas[indice] = rls.question(`Ingrese el nombre que quiere poner en el lugar ${indice}: `);
}
for (indice = 1; indice <= dimensionArreglo; indice++) {
console.log(`La persona que ingresó en la posición ${indice} es: ${nombrePersonas[indice]}`);
}

/*Para esta forma de ejercicio donde solicito valores a partir de variables dinámicas, si quiero, puedo manejar desde que
punto inicia mi conteo, puedo cambiar el numero del indice a 1 y hacer que haga el recorrido
hasta el numero menor o igual al definido en la variante (ya sea un numero fijo o un numero que ingrese el usuario). 

Igualmente, esta forma no podría usarse en ejercicios donde solicitemos el valor de un dato almacenado en un arreglo. Por
ejemplo, el ejercicio de ver a que mes corresponde el numero ingresado.*/