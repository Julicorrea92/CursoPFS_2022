import * as rls from 'readline-sync';

let num: string []= new Array (7);

let listado:number=0

num [0]='20';
num [1]='14';
num [2]='8';
num [3]='0';
num [4]='5';
num [5]='19';
num [6]='24';

console.log ("Los valores son: "+ num);

/*Arreglo que muestra de una todos los valores dentro de un arreglo*/

let arregloMes : string[] = new Array (12) ;
arregloMes[0] = "Enero";
arregloMes[1] = "Febrero";
arregloMes[2] = "Marzo";
arregloMes[3] = "Abril";
arregloMes[4] = "Mayo";
arregloMes[5] = "Junio";
arregloMes[6] = "Julio";
arregloMes[7] = "Agosto";
arregloMes[8] = "Septiembre";
arregloMes[9] = "Octubre";
arregloMes[10] = "Noviembre"
arregloMes[11] = "Diciembre";
let nroMes : number = rls.questionInt("Indique el número de mes que le interesa: ");
let i = nroMes - 1; 
console.log("El mes es ", arregloMes[i] );

/*Arreglo por lista, más completo*/

let arregloMonth : string[] = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let nroMonth : number = rls.questionInt("Indique el número de mes que le interesa: ");
let indice = nroMonth - 1; 
console.log("El mes es ", arregloMonth[indice] );

/*Arreglo por extensión simplificado*/