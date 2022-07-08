'use strict'
let boton;

boton = document.getElementById("btnSaludo");

boton.addEventListener("click", hacerSaludo);


function hacerSaludo(){
    console.log('Hola Mundo!');
    alert('Haz click para continuar')
}