/*• Implemente un método llamado cantidadDeDivisores que reciba un número entero y devuelva la cantidad de sus
divisores
• Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 16, por lo que la respuesta debería ser 5
• Re-utilice el método esMultiplo implementado para el ejercicio anterior*/


import * as rls from 'readline-sync';

let ejecucionPrograma: string;
let multiplo, contador, divisor : number;
   

    console.log('Herramienta para contar divisores de un numero.');
    console.log('');
    
        ejecucionPrograma= rls.question('Oprima la tecla (i) para iniciar el programa: ');

    while(ejecucionPrograma == 'i'){

let numero: number = rls.questionInt('Ingresar el numero: ');
    
        console.log('El conteo de divisores de', numero, 'es de', cantDivisores(numero));

        ejecucionPrograma= rls.question('Oprima (i) para continuar. Presione enter para finalizar. ');
}
    
function esMultiplo (numero: number, multiplo: number): boolean{
          
    if ((numero % multiplo) == 0){
            return  true;   

    }

    else {
            return false
            
    }
}

function cantDivisores(numero:number){

contador=0

for(divisor = 1; divisor <= numero; divisor+=1){
        if (esMultiplo(numero,multiplo)){
            contador+=1;
        }
    }
    return contador;
}
        
/*El metodo me daba undefined constantemente. No salía porque ponia cruzado el valor de divisor con el contador. Poner atencion 
en el for. 
Se heredo la automatización generada en el ejercicio de multiplos
Ejercicio corregido
*/