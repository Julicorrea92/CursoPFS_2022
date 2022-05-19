/*  • Leer valores del usuario hasta que introduzca un 0
    • El usuario puede introducir valores numéricos, tanto positivos como negativos
    • Contar la cantidad de valores introducidos que sean mayores a 0 y el porcentaje de 
    positivos respecto del total*/

import * as rls from 'readline-sync'

console.log('-Ingrese los valores que quiera evaluar. Pueden ser positivos o negativos');
console.log('-Cuando desee terminar de cargar valores ingrese 0 para obtener resultados');


let numero: number;
let total: number = 0
let numeroPositivo: number=0
/* let promedio: number = (numeroPositivo/total)/100*/


while (numero !=0){

    numero= rls.questionInt('Ingresar numero: ');

       if (numero>0){
        numeroPositivo+=1
        total+=1
    }
    else {
        total+=1
    }
   
    /* let promedio: number = (numeroPositivo/total)/100*/

}

console.log('La cantidad de numeros positivos son:', numeroPositivo, 'y el porcentaje sobre: ',total,'es de', (numeroPositivo/total)*100, '%')
    
/*-Ni declarando promedio afuera de la función ni adentro de la funcion consegui el resultado del promedio en el console.log.
Sí funciono cuando ingrese la formula directamente  -Consultar 

  - Como hago para no incluir el 0 como numero par y que la formula responda 100 % a la consigna
*/  
    

 /*Se va a probar commit sin los .js*/



