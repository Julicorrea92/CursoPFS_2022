"use strict";
exports.__esModule = true;
var ConsolaDeVideojuegos = /** @class */ (function () {
    //Constructores
    function ConsolaDeVideojuegos(marca, modelo, portatil, mandos) {
        //Entrada directa (venta, despacho, control stock)
        this.marca = marca;
        this.modelo = modelo;
        this.portatil = portatil;
        this.mandos = mandos;
    }
    //Setters y getters
    ConsolaDeVideojuegos.prototype.getMarca = function () { return this.marca; };
    ConsolaDeVideojuegos.prototype.setMarca = function (marca) { this.marca = marca; };
    ConsolaDeVideojuegos.prototype.getModelo = function () { return this.modelo; };
    ConsolaDeVideojuegos.prototype.setModelo = function (modelo) { this.modelo = modelo; };
    ConsolaDeVideojuegos.prototype.getPortatil = function () { return this.portatil; };
    ConsolaDeVideojuegos.prototype.setPortatil = function (portatil) { this.portatil = portatil; };
    ConsolaDeVideojuegos.prototype.getMandos = function () { return this.mandos; };
    ConsolaDeVideojuegos.prototype.setMandos = function (mandos) { this.mandos = mandos; };
    ConsolaDeVideojuegos.prototype.imprimir = function () {
        return "La consola tiene las siguientes caracteristicas: { Marca:".concat(this.getMarca(), ", Modelo:").concat(this.getModelo(), ", Portatil:").concat(this.getPortatil(), ", Mando:").concat(this.getMandos(), "}");
    };
    //Métodos
    ConsolaDeVideojuegos.prototype.encenderApagar = function (valor) {
        if (valor == true) {
            this.encendido = true;
            console.log("La consola está encendida");
        }
        else {
            this.encendido = false;
            console.log("La consola está apagada");
        }
    };
    ConsolaDeVideojuegos.prototype.conectarInternet = function (valor) {
        if (valor == true) {
            this.conexionInternet = true;
            console.log("La consola está conectada a internet");
        }
        else {
            this.conexionInternet = false;
            console.log("La consola no está conectada a internet");
        }
    };
    ConsolaDeVideojuegos.prototype.iniciarVideojuego = function (valor) {
        if (valor == true) {
            this.iniciaVideojuego = true;
            console.log("La consola inició el videojuego");
        }
        else {
            this.conexionInternet = false;
            console.log("La consola finalizó el videojuego");
        }
    };
    return ConsolaDeVideojuegos;
}());
exports["default"] = ConsolaDeVideojuegos;
//Prueba de Composición
//clase p/arreglo
var Accesorios = /** @class */ (function () {
    function Accesorios(nombreA) {
        this.nombreA = nombreA;
    }
    return Accesorios;
}());
