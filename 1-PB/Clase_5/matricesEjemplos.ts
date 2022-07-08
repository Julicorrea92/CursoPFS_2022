//Crear una matriz

import * as rls from "readline-sync";

let filas : number = rls.questionInt("Indique la cantidad de filas: ");
let columnas : number = rls.questionInt("Indique la cantidad de columnas: ");
let matriz : string[][] = crearMatriz(filas, columnas);



function crearMatriz(filas: number, columnas: number) : string[][] {

let matriz : string[][] = new Array(filas);
let fila : string[];

    for (let index = 0; index < matriz.length; index++) {

        fila = new Array(columnas);
    
        matriz[index] = fila;
}
return matriz;
}
let fila : number, columna : number;
for (fila = 0 ; fila < filas ; fila++) {
for (columna = 0 ; columna < columnas ; columna++) {
matriz[fila][columna] = " ";
}
}