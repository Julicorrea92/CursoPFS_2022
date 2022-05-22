/*  • Realice un programa que devuelva la potencia de un número. 
    • La base y el exponente deben ser ingresados por teclado. 
    • Sólo deben admitirse exponentes mayores o iguales a cero. 
    • Recuerde que el resultado de un numero elevado a 0 es 1.
    • Separe la lógica de calcular la potencia utilizando métodos.*/
    
import * as rls from 'readline-sync';

console.log('Calculador de potencias')
console.log('')

let base: number = rls.questionInt ('Ingresar el numero que quiera calcular: ');
let exponente: number = rls.questionInt ('Ingresar el exponente: '); 


let resultado:number = calcularPotencia(base, exponente);
console.log('El resultado es: ', resultado);
    
function calcularPotencia (base: number, exponente: number): number {
    
    if (exponente>0){
        return (base**exponente);
}    
    else if (exponente == 0){
        return 1
} 
let menorDeCero: boolean= true;
    while (menorDeCero =true){

        (exponente<0);{
        console.log("El exponente ingresado es invalido, por favor ingrese un numero igual o mayor a cero");
        exponente =rls.questionInt ('Ingresar el exponente: ');
        }
        return calcularPotencia (base,exponente);
    }
}
    
/*Hice un agregado a la consigna y ante el error de ingresar un numero menor a cero un booleano te pide que rectifiques.
Hecha la correción se hace el cálculo correspondiente.*/


