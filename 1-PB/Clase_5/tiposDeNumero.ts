import * as rls from 'readline-sync';

/*  • Almacene en un arreglo de dimensión N números (la cantidad es ingresada por el usuario)
    • Muestre cuántos números son positivos, cuántos son negativos y cuántos ceros hay*/


let ingresarNro: number = rls.questionInt('Ingresar longitud de arreglo: ');

let i: number;
let positivos: number = 0
let negativos: number = 0
let ceros: number = 0


let tamañoArreglo: number[] = new Array (ingresarNro);

    for (let i=0; i < ingresarNro; i++){
    
        tamañoArreglo[i] = rls.questionInt(`Ingresar el valor del elemento ${i}: `); 
}
console.log(`Los numeros ingresados son: ${tamañoArreglo}`);

    for(let i=0; i < ingresarNro; i++){

        if (tamañoArreglo[i] <0) {
            negativos++
        }
        else if (tamañoArreglo[i]== 0) {
            ceros++
        }
        else positivos++
    }
console.log('Los numeros positivos son:',positivos);
console.log('Los numeros negativos son:',negativos);
console.log('Los numeros ceros son:',ceros);

/*siempre inicializar los identificadores =0 o lo que sea, sino la cuenta da undefined*/






