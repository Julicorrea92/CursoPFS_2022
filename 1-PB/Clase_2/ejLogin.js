"use strict";
/* Desarrolle un algoritmo que permita loguearse a un sistema, ingresando un nombre de usuario y la
contraseña adecuada. Considerar que tanto el usuario como la contraseña están formados sólo por letras.

El sistema deberá validar que el usuario y la contraseña sean correctas, comparándolas con lo que es sistema tiene
registrado para ese usuario. Tenga en cuenta que el sistema tiene registrado el usuario: Juan y la clave claveJuan*/
exports.__esModule = true;
var rls = require("readline-sync");
var usuario = rls.question('Ingrese su Usuario: ');
var contraseña = rls.question('Ingrese su Contraseña:');
if (usuario == 'Juan' && contraseña == 'claveJuan') {
    console.log('Bienvenido al sistema');
}
else {
    console.log('Por favor ingrese usuario y contraseña correctos');
}
/*Ver como incluir la Ñ como caracter especial en la consola*/
