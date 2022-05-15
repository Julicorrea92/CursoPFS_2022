"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var precioProducto = rls.questionInt("Completar precio de producto: ");
var cantidadProducto = rls.questionInt("Completar cantidad de productos: ");
var precioCompra = (precioProducto * cantidadProducto);
if (precioCompra > 1000) {
    console.log('Precio de compra con descuento: ' + (precioCompra - precioCompra * 0.1));
}
else {
    console.log('Precio de compra: ' + precioCompra);
}
