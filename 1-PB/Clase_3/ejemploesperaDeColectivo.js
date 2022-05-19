"use strict";
/*simular la espera de un colectivo*/
exports.__esModule = true;
var rls = require("readline-sync");
var llegadaColectivo;
console.log('Esperar colectivo');
llegadaColectivo = rls.question('Llegó el colectivo? (S/N): ');
while (llegadaColectivo == 'N') {
    console.log('Seguir esperando');
    llegadaColectivo = rls.question('Llegó el colectivo? (S/N): ');
}
console.log('Subir al colectivo');
