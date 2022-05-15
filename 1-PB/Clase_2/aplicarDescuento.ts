/* */

import * as rls from "readline-sync"

let precioProducto : number = rls.questionInt ("Completar precio de producto: ");
let cantidadProducto : number = rls.questionInt ("Completar cantidad de productos: ");

let precioCompra : number = (precioProducto * cantidadProducto);


if (precioCompra>1000) {
    console.log('Precio de compra con descuento: ' + (precioCompra-precioCompra*0.1));
}
else {
    console.log('Precio de compra: '+ precioCompra);
} 