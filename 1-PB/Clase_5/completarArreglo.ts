/*• Llenar un array de 10 posiciones con números aleatorios entre 0 y 99

• Para obtener números aleatorios crear una función
Azar, que se base en las funciones disponibles en el paquete Math: Math.random() : devuelve un nro al azar entre 0 y 1*/


import * as rls from 'readline-sync';


let diezPosiciones : number [] = new Array (10);

let i: number;

for (let i=0; i<10; i++){
    diezPosiciones[i]= numeroAlAzar(100)
}
for (let i=0; i<10; i++){
      console.log (`El número en la posición ${i} es: ${diezPosiciones[i]}`);
}
function numeroAlAzar (numero: number): number{

    return Math.floor(Math.random()*numero)

}

/*Copiado de las diapo para ver funcionamiento de math.random y math.floor*/



