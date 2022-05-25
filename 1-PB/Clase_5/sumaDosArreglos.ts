/*• Sumar los elementos de cada una de las posiciones de dos arreglos y guardar el resultado en otro arreglo
  • El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario*/

import * as rls from 'readline-sync';

let arregloA: number []= new Array (6);
let arregloB: number []= new Array (6);

let arregloDestino: number []= new Array (6);

let contador: number;

    for (let contador=0; contador <6; contador ++){

         arregloA [contador] = rls.questionInt("Colocar un numero al arreglo A- " +contador+" : ");
         arregloB [contador] = rls.questionInt("Colocar un numero al arreglo B- " +contador+" : ");

         arregloDestino [contador] =  arregloA [contador] + arregloB [contador];
}

console.log('En el arreglo de destino se obtuvieron las siguientes operaciones:' + arregloDestino)




