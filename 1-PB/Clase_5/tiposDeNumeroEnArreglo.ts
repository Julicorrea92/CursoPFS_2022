/*   Almacene en un arreglo de dimensión N números (la cantidad es ingresada por el usuario)
     Muestre cuántos números son positivos, cuántos son negativos y cuántos ceros hay*/

import * as rls from "readline-sync";

let cantidadElementos: number= (rls.questionInt('Ingresar la cantidad de elementos: '));

let positivos:number =0;
let negativos: number =0;
let cero: number = 0;

let arregloElementos: number [] = new Array (cantidadElementos);
let contador: number =0;

    for (contador; contador < cantidadElementos; contador ++ ){

       arregloElementos [contador]= rls.questionInt("Colocar un numero al elemento "+contador+" : ");

    if (arregloElementos[contador]>0){
        positivos++;   
    }   
    else if (arregloElementos[contador]<0){
        negativos++;
    }else{
        cero++;
    }
        
}
console.log('La cantidad de elementos son:', arregloElementos);
console.log('La cantidad de numeros positivos son:', positivos);
console.log('La cantidad de numeros negativos son:', negativos);
console.log('La cantidad de CEROS son:', cero);
