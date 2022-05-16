/*Desarrolle un algoritmo que dados tres números determine cuál es el mayor de los tres*/

import * as rls from "readline-sync"

let valor1: number = rls.questionInt ('Ingresar 1er numero: ');
let valor2: number = rls.questionInt ('Ingresar 2do numero: ');
let valor3: number = rls.questionInt ('Ingresar 3er numero: ');


if (valor1>valor2 && valor1>valor3){
    console.log('El numero mayor es el 1er numero:'+ valor1);
} 
else if (valor2>valor1 && valor2>valor3){
    console.log('El numero mayor es el 2do numero:'+ valor2);
} 
else if (valor3>valor1 && valor3>valor2){ 
    console.log('El numero mayor es el 3er numero:'+ valor3);
}



/*Corrección 16-5-2022: se agregaron los ; y se anidaron los if */
