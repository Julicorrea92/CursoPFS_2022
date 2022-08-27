"use strict";
let btnContador = document.getElementById("btnContador");

let contador = 0;

btnContador.addEventListener("click", contar);

function contar(){

    contador ++;

console.log(`Clicks realizado: ${contador}`);
}