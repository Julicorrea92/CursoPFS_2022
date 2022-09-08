"use strict";
exports.__esModule = true;
var claseConsola_1 = require("./claseConsola");
var servicioConsolas_1 = require("./servicioConsolas");
//import Accesorios from "./claseConsola"
var Sega = new claseConsola_1["default"]("Sega", "Genesis", false, "Digital");
var Play2 = new claseConsola_1["default"]("Sony", "Playstation 2", false, "Analógico");
var Switch = new claseConsola_1["default"]("Nintendo", "Switch", true, "Integrado");
Sega.encenderApagar(true);
Sega.conectarInternet(false);
Sega.iniciarVideojuego(true);
console.log("");
var miTienda = new servicioConsolas_1["default"]('Almacen de videojuegos');
miTienda.createConsola(Sega);
miTienda.createConsola(Play2);
miTienda.createConsola(Switch);
console.log(miTienda.readConsolasTxt());
//let Consolas : ConsolaDeVideojuegos [] = [Sega, Play2, Switch] //Hacer un array de lo creado
