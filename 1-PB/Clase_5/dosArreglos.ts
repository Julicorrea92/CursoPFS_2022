/*• Construya un algoritmo que tenga dos arreglos, uno que almacene 2 nombres y otro que
almacene 3 números ambos ingresados por el usuario.

• Al final debe imprimir los valores por consola.*/


import * as rls from 'readline-sync';

let guardarNombre : string []= new Array (2)
let guardarNumero : number []= new Array (3)
let i: number;

for (let i=0; i<2; i++){
    guardarNombre [i]= rls.question('Ingresar dos nombres: ')
}
for (let i=0; i<3; i++){
    guardarNumero [i]= rls.questionInt('Ingresar tres numeros: ')
}

for (let i=0; i<2; i++){
    console.log(`El nombre en la posición ${i} es: ${guardarNombre[i]}`);
}

for (let i=0; i<3; i++){
    console.log(`El numero en la posición ${i} es: ${guardarNumero[i]}`);
}