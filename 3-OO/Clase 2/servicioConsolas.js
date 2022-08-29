"use strict";
exports.__esModule = true;
var Tienda = /** @class */ (function () {
    //Constructores
    function Tienda(nombre) {
        this.nombre = nombre;
        this.consolas = [];
    }
    //Setters y getters
    Tienda.prototype.getNombre = function () { return this.nombre; };
    Tienda.prototype.setNombre = function (nombre) { this.nombre = nombre; };
    //CRUDF  Create-Read-Update-Delete-Find - ABMLC
    Tienda.prototype.createConsola = function (consola) {
        if (consola)
            this.consolas.push(consola);
    };
    Tienda.prototype.findConsola = function (consola) {
        for (var i = 0; i < this.consolas.length; i++) {
            if (this.consolas[i] == consola)
                return i;
        }
        return -1;
    };
    Tienda.prototype.updateConsola = function (consola, posicion) {
        if (consola)
            this.consolas[posicion] = consola;
    };
    Tienda.prototype.deleteConsola = function (posicion) {
        if (this.consolas[posicion])
            this.consolas.splice(posicion, 1);
    };
    Tienda.prototype.readConsola = function () {
        var consolas = [];
        this.consolas.forEach(function (consola) {
            consolas.push(consola);
        });
        return consolas;
    };
    Tienda.prototype.readConsolasTxt = function () {
        var textoConsolas = '';
        this.consolas.forEach(function (consola) {
            textoConsolas += consola.imprimir() + '\n';
        });
        return textoConsolas;
    };
    return Tienda;
}());
exports["default"] = Tienda;
