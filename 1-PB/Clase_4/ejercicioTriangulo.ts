/*Realice un programa que devuelva el area del triángulo usando los siguientes pares de base-altura
(1,2) (2.4) (3.6) (4.8) (5.10) (6.12) (7.14)

Implementar un metodo llamado calcularAreaTriangulo que reciba dos numeros por parámetro (uno llamado base y el otro altura)*/

import * as rls from 'readline-sync';

console.log('Ingresar un valor para la base y un valor para la altura de los siguientes pares: (1,2) (2.4) (3.6) (4.8) (5.10) (6.12) (7.14)')

let i:number;

for (i=1; i<=50; i++)
console.log ('El area es =', calcularAreaTriangulo(i,i*2))

function calcularAreaTriangulo (base:number, altura:number): number{
    return (base*altura/2);

}/*commit clase 4*/