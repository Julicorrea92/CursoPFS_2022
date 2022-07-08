/*• Sumar los elementos de cada una de las posiciones de dos arreglos y guardar el resultado en otro arreglo
  • El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario*/

/*import * as rls from 'readline-sync';

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
*/

//Ejemplo de Mauricio
/*

let v1 : number[] = new Array(6);
let v2 : number[] = new Array(6);
let vSuma : number[] = new Array(6);
let indice : number;

//Cargo el vector v1
for (indice = 0; indice < 6; indice++) {
v1[indice]=rls.questionInt(`Ingrese el valor de v1[ ${indice} ]`);
}

//Cargo el vector v2
for (indice = 0; indice < 6; indice++) {
v2[indice]=rls.questionInt(`Ingrese el valor de v2[ ${indice} ]`);
}

//Sumo los valores y muestro
for (indice = 0; indice < 6; indice++) {
vSuma[indice] = v1[indice] + v2[indice];
console.log (`vSuma[ ${indice} ]= ${vSuma[indice]}`);
}
*/
import * as rls from "readline-sync";
function cargarVector(v : number[], cantidad : number) {
  let indice : number;
  for (indice=0; indice<cantidad; indice++) {
  v[indice] = rls.questionInt(`Ingrese el valor de la posición ${indice}:`);
  }
}

function mostrarVector(v : number[], cantidad : number) {
  let indice : number;
  for (indice=0; indice<cantidad; indice++) {
  console.log (v[indice], '')
  }
}

function sumarVector(v1 : number[], v2 : number[], vSuma : number[], cantidad : number) {
  let indice : number;
  for (indice=0; indice<cantidad; indice++) {
  vSuma[indice] = v1[indice] + v2[indice];
  }
}

let v1 : number[] = new Array(6);
let v2 : number[] = new Array(6);
let vSuma : number[] = new Array(6);


console.log("Cargando v1");
cargarVector(v1, 6);

console.log("Cargando v2");
cargarVector(v2, 6);

sumarVector(v1, v2, vSuma, 6);
console.log("Valores de v1");

mostrarVector(v1, 6)
console.log("Valores de v2");

mostrarVector(v2, 6)
console.log("Valores de vSuma");

mostrarVector(vSuma, 6)
