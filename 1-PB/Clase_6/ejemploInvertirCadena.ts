import * as rls from 'readline-sync';


/*let palabra : string = rls.question("Ingrese la palabra a invertir: ");

let cantidadLetras : number = palabra.length;
let palabraInvertida: string [] = new Array (cantidadLetras)

console.log("Mostrando vector");
mostrarVector(palabra, cantidadLetras);

//console.log("Invierto los valores en el vector");
//invertirVector(palabra, cantidadLetras);

console.log("Mostrando invertido");
mostrarVectorInvertido(palabra, cantidadLetras);



function mostrarVector(palabra : string, cantidadLetras : number) {
    let indice: number;
    for (indice=0; indice<cantidadLetras; indice++) {
    console.log (palabra)
    }
  }
  function mostrarVectorInvertido(palabra : string, cantidadLetras : number) {
    let indice: number;
    for (indice=cantidadLetras-1; indice>=0; indice--) {
    console.log (palabraInvertida);
    }
  }
*/
let cadena : string = rls.question("Ingrese el texto que desee para invertir: ");

let cadenaInvertida : string = "";
let indice : number;

invertirCadena();


function invertirCadena (){
    

    for(indice = cadena.length -1; indice >=0; indice--){
        cadenaInvertida = cadenaInvertida+cadena [indice];
    }
    console.log (cadenaInvertida);
}







