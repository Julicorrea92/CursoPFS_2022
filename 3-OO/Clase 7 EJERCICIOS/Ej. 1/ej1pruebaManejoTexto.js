"use strict";
exports.__esModule = true;
var ej1Manejo_1 = require("./ej1Manejo");
var ej1ClaseSuperior_1 = require("./ej1ClaseSuperior");
var ej1ClaseInferior_1 = require("./ej1ClaseInferior");
var info = [];
var fila = [];
var cantidadFilas = 0;
var MTS = new ej1Manejo_1["default"]('datosSuperior.txt', ';', ',');
var MTI = new ej1Manejo_1["default"]('datosInferior.txt', '\r\n', '|');
MTS.leerArchivo();
MTI.leerArchivo();
MTS.getCantidadFilas();
cantidadFilas = MTS.getCantidadFilas();
for (var i = 0; i < cantidadFilas; i++) {
    fila = MTS.getFila(i);
    info.push(new ej1ClaseSuperior_1["default"]((fila[0] == 'true' ? true : false), parseInt(fila[1]), parseInt(fila[2])));
}
console.log(info);
// info = [];
cantidadFilas = MTI.getCantidadFilas();
for (var i = 0; i < cantidadFilas; i++) {
    fila = MTI.getFila(i);
    info.push(new ej1ClaseInferior_1["default"]((fila[0] == 'true' ? true : false), parseInt(fila[1]), parseInt(fila[2]), fila[3], parseInt(fila[4])));
}
console.log(info);
