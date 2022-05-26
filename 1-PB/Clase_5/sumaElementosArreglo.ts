/*
•Construya un algoritmo que sume todos los elementos de un arreglo de tamaño N
•La dimensión del arreglo es ingresada por el usuario
•Los elementos (números) del arreglo son ingresados por el usuario
*/
import * as rls from 'readline-sync';

let cantidadElementos: number= (rls.questionInt('Ingresar la cantidad de elementos: '));

let arregloElementos: number [] = new Array (cantidadElementos);
let contador: number;

    for (contador=0; contador < cantidadElementos; contador ++ ){

        arregloElementos [contador]= rls.questionInt("Colocar un numero al elemento "+contador+" : ");
    
}
let sumatoria =0;

    for (let contador=0; contador < cantidadElementos; contador ++ ){

        sumatoria += arregloElementos[contador];
}
console.log(sumatoria)