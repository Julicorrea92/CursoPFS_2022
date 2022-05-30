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

let resultado:number;

    while (exponente>0){
    
calcularPotencia(base, exponente);

}
    if (exponente<0){
        
        console.log("El exponente ingresado es invalido, por favor ingrese un numero igual o mayor a cero");
        exponente =rls.questionInt ('Ingresar el exponente: ');

    }

    else calcularPotencia (base,exponente);

        console.log('El resultado es: ', resultado);
    

function calcularPotencia (base: number, exponente: number): number {
    
    return (base**exponente);

}
/*Ejercicio corregido, el control de exponente mayor a cero se realiza en el programa ppal.*/