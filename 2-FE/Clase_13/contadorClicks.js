"use strict";
var btnContador = document.getElementById("btnContador");
var contador = 0;
btnContador.addEventListener("click", contar);
function contar() {
    contador++;
    console.log("Clicks realizado: ".concat(contador));
}
