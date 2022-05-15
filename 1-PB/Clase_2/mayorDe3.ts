/*Desarrolle un algoritmo que dados tres números determine cuál es el mayor de los tres*/

import * as rls from "readline-sync"

let valor1: number = rls.questionInt ('Ingresar 1er numero: ')
let valor2: number = rls.questionInt ('Ingresar 2do numero: ')
let valor3: number = rls.questionInt ('Ingresar 3er numero: ')


if (valor1>valor2 && valor1>valor3){
    console.log('El numero mayor es el 1er numero:'+ valor1)
} 
if (valor2>valor1 && valor2>valor3){
    console.log('El numero mayor es el 2do numero:'+ valor2)
} 
if (valor3>valor1 && valor3>valor2){ 
    console.log('El numero mayor es el 3er numero:'+ valor3)}


/*Pienso que en la linea 18 debería ir: else (valor3>valor1 && valor3>valor2){ 
                                            console.log('El numero mayor es el 3er numero:'+ valor3)}. 
    
Sin embargo, la compilación encuentra un error en la llave de apertura: mayorDe3.ts:17:38 - error TS1005: ';' expected.

17 else (valor3>valor1 && valor3>valor2){
                                        ~


Found 1 error in mayorDe3.ts:17

Consultar*/
