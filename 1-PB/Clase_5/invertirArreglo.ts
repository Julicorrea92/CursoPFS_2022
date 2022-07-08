/*• Almacene en un arreglo de tamaño N los números ingresados por el usuario
  • La dimensión N también es ingresada por el usuario 
  • Muestre los números del arreglo pero del último al primero*/

  import * as rls from 'readline-sync';


/*let cantidadElementos: number= (rls.questionInt('Ingresar la cantidad de elementos: '));

let arregloElementos: number [] = new Array (cantidadElementos);
let contador: number;

    for (contador=0; contador < cantidadElementos; contador ++ ){

        arregloElementos [contador]= rls.questionInt("Colocar un numero al elemento "+contador+" : ");    
}
console.log(arregloElementos.reverse())*/


//_______________________________________________________________________________________________________________________



/*let cantidadElementos: number= (rls.questionInt('Ingresar la cantidad de elementos: '));

let arregloElementos: number [] = new Array (cantidadElementos);
let numerosInvertidos: number [] = new Array (cantidadElementos)


let contador: number;

    for (contador=0; contador < cantidadElementos; contador ++ ){

        arregloElementos [contador]= rls.questionInt("Colocar un numero al elemento "+contador+" : ");
        numerosInvertidos [contador]= (arregloElementos[contador] * (-1))
     
}

console.log(numerosInvertidos)*/
//____________________________________________________________________________________________________________________

/*let cantidad : number = rls.questionInt("Ingrese la cantidad de números:");
let v : number[] = new Array (cantidad);
let indice : number; 

for (indice = 0; indice < cantidad ; indice++){

  v [indice] = rls.questionInt(`Ingrese v["${indice}"]`)
}
    
for (indice = cantidad - 1; indice >= 0; indice-- ) {
  console.log(v[indice]);
}

/*Copiado de las diapo para ver funcionamiento de operación inversa de conteo, arreglada la sintaxis tambien*/


let cantidad : number = rls.questionInt("Ingrese la cantidad de números: ");
let v : number[] = new Array (cantidad);
let indice : number;

console.log("Cargando v");
cargarVector(v, cantidad);

console.log("Mostrando invertido");
mostrarVectorInvertido(v, cantidad);

console.log("Invierto los valores en el vector");
invertirVector(v, cantidad);

console.log("Mostrando vector");
mostrarVector(v, cantidad);


function cargarVector(v : number[], cantidad : number) {
  
  for (indice=0; indice<cantidad; indice++) {
  v[indice] = rls.questionInt(`Ingrese el valor de la posición ${indice}:`);
  }
}

function mostrarVector(v : number[], cantidad : number) {
  
  
  for (indice=0; indice<cantidad; indice++) {
  console.log (v[indice], '')
  }
}

function mostrarVectorInvertido(v : number[], cantidad : number) {
  
  for (indice=cantidad-1; indice>=0; indice--) {
  console.log(v[indice], " ");
  }
}

function invertirVector(v : number[], cantidad : number) {

  let indiceIzq : number = 0;
  let indiceDer : number = cantidad-1;
  let aux : number;

  while (indiceIzq < indiceDer) {

  aux = v[indiceIzq];
  v[indiceIzq] = v[indiceDer];
  v[indiceDer] = aux;
  indiceIzq++;
  indiceDer--;
  }
}
