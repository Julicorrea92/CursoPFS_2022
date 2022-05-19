/*simular la espera de un colectivo*/


import * as rls from 'readline-sync'

let llegadaColectivo : string;

    console.log('Esperar colectivo');

llegadaColectivo = rls.question('Llegó el colectivo? (S/N): ');

while (llegadaColectivo == 'N'){
console.log('Seguir esperando');

llegadaColectivo = rls.question('Llegó el colectivo? (S/N): ');
}
console.log('Subir al colectivo');



/*Se va a probar commit sin los .js*/