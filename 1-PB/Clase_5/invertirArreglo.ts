/*• Almacene en un arreglo de tamaño N los números ingresados por el usuario
  • La dimensión N también es ingresada por el usuario 
  • Muestre los números del arreglo pero del último al primero*/

  import * as rls from 'readline-sync';


let cantidadElementos: number= (rls.questionInt('Ingresar la cantidad de elementos: '));

let arregloElementos: number [] = new Array (cantidadElementos);
let contador: number;

    for (contador=0; contador < cantidadElementos; contador ++ ){

        arregloElementos [contador]= rls.questionInt("Colocar un numero al elemento "+contador+" : ");    
}
console.log(arregloElementos.reverse())
















/*let cantidadElementos: number= (rls.questionInt('Ingresar la cantidad de elementos: '));

let arregloElementos: number [] = new Array (cantidadElementos);
let numerosInvertidos: number [] = new Array (cantidadElementos)


let contador: number;

    for (contador=0; contador < cantidadElementos; contador ++ ){

        arregloElementos [contador]= rls.questionInt("Colocar un numero al elemento "+contador+" : ");
        numerosInvertidos [contador]= (arregloElementos[contador] * (-1))
     
}

console.log(numerosInvertidos)*/