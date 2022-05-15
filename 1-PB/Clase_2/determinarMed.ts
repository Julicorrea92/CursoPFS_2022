/* Desarrolle un algoritmo que, dada una posición en una carrera se determine el tipo de medalla a entregar.

Tenga en cuenta que para el primer puesto se entrega medalla de oro, segundo puesto medalla de plata y tercer puesto
medalla de bronce. En caso que quede en otra posición se entrega certificado de participación*/

import * as rls from 'readline-sync'

let posicion : number = rls.questionInt('Ingresar la posición de llegada: ')

if (posicion=== 1) {
    console.log('¡Felicitaciones! Conseguiste la medalla de Oro')
}
if (posicion=== 2) {
    console.log('¡Felicitaciones! Conseguiste la medalla de Plata')
}
if (posicion=== 3) {
    console.log('¡Felicitaciones! Conseguiste la medalla de Bronce')
}
if (posicion>=4) {
    console.log('¡Felicitaciones! Conseguiste llegar al final, este es tu certificado de participación, te esperamos el año que viene.')
}