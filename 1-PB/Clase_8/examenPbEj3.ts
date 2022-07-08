/*Codigo del ejercicio3:
//Algoritmo secreto

let elem, arr, nro, ocu;

elem = readlineSync.questionInt("Ingrese tamaño: ");
arr = new Array(elem);
cargar(arr);
nro: number = readlineSync.questionInt("Ingrese numero: ");
ocu = funcion(arr,nro);
console.log(`El numero ${nro} ... ${ocu}`);
mostrar(arr, elem)
function cargar(v) {
    for (let i = 0; i < v.length; i++)
            v[i]=Math.floor(Math.random()*100);
}
function mostrar(v,n) {
    let c="";
    for (let i = 0; i < v.length; i++)
            c+= v[i] + " ";
    console.log(c);
}
function funcion(v,n) {
    let o=0;
    for (let i = 0; i < v.length; i++)
            if (v[i] == n)
                    o+=1
}*/

//Codigo del ejercicio3:
//Algoritmo secreto

import * as rls from 'readline-sync';


let ocu;

let elem: number = rls.questionInt("Ingrese tamaño: ");
let arr: number []  = new Array(elem);
let nro: number = rls.questionInt("Ingrese numero: ");

cargar(arr);


funcion(arr,nro);
console.log(`El numero ${nro} ... ${ocu}`);


mostrar(arr, elem)



function cargar(v) {
    for (let i = 0; i < v.length; i++)
            v[i]=Math.floor(Math.random()*100);
}



function mostrar(v,n) {
    let c="";
    for (let i = 0; i < v.length; i++)
            c+= v[i] + " ";
    console.log(c);
}

function funcion(v,n) {
    let o=0;
    for (let i = 0; i < v.length; i++)
            if (v[i] == n)
                    o+=1
}