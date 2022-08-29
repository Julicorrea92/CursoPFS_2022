"use strict";
exports.__esModule = true;
var ConsolaDeVideojuegos = /** @class */ (function () {
    //Constructores
    function ConsolaDeVideojuegos(id, marca, modelo, portatil, encendido, conexionInternet, iniciaVideojuego) {
        //Entrada directa (venta, despacho, control stock)
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.portatil = portatil;
        //Entradas opcionales (servicio técnico?)
        if (encendido == undefined) {
            this.encendido = false;
        }
        else {
            this.encendido = encendido;
        }
        if (conexionInternet == undefined) {
            this.conexionInternet = false;
        }
        else {
            this.conexionInternet = conexionInternet;
        }
        if (encendido == undefined) {
            this.encendido = false;
        }
        else {
            this.encendido = encendido;
        }
        if (iniciaVideojuego == undefined) {
            this.iniciaVideojuego = false;
        }
        else {
            this.iniciaVideojuego = iniciaVideojuego;
        }
    }
    //Setters y getters
    ConsolaDeVideojuegos.prototype.getId = function () {
        return this.id;
    };
    ConsolaDeVideojuegos.prototype.setId = function (id) {
        this.id = id;
    };
    ConsolaDeVideojuegos.prototype.getMarca = function () {
        return this.marca;
    };
    ConsolaDeVideojuegos.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    ConsolaDeVideojuegos.prototype.getModelo = function () {
        return this.modelo;
    };
    ConsolaDeVideojuegos.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    ConsolaDeVideojuegos.prototype.getPortatil = function () {
        return this.portatil;
    };
    ConsolaDeVideojuegos.prototype.setPortatil = function (portatil) {
        this.portatil = portatil;
    };
    ConsolaDeVideojuegos.prototype.getEncendido = function () {
        return this.encendido;
    };
    ConsolaDeVideojuegos.prototype.setEncendido = function (encendido) {
        this.encendido = encendido;
    };
    ConsolaDeVideojuegos.prototype.getTieneInternet = function () {
        return this.conexionInternet;
    };
    ConsolaDeVideojuegos.prototype.setTieneInternet = function (conexionInternet) {
        this.conexionInternet = conexionInternet;
    };
    ConsolaDeVideojuegos.prototype.getIniciaVideojuego = function () {
        return this.iniciaVideojuego;
    };
    ConsolaDeVideojuegos.prototype.setIniciaVideojuego = function (iniciaVideojuego) {
        this.iniciaVideojuego = iniciaVideojuego;
    };
    ConsolaDeVideojuegos.prototype.imprimir = function () {
        return "Consola { Id:".concat(this.getId(), ", Marca:").concat(this.getMarca(), ", Modelo:").concat(this.getModelo(), ", Portatil:").concat(this.getPortatil(), ", Encendido:").concat(this.getEncendido(), ", Tiene internet:").concat(this.getTieneInternet(), ", Inicia Videojuego:").concat(this.getIniciaVideojuego(), ",  }");
    };
    return ConsolaDeVideojuegos;
}());
exports["default"] = ConsolaDeVideojuegos;
//Prueba de Encapsulamiento
var Mando = /** @class */ (function () {
    function Mando() {
    }
    return Mando;
}());
