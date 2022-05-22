/* • Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico verdadero o falso según 
si el primer número que se indique como parámetro es múltiplo del segundo
   • Recuerde que un numero es múltiplo de otro si al dividirlo su resto es cero
   • Recuerde que la operación mod permite saber si el resto de una división es cero*/

import * as rls from 'readline-sync';

let ejecucionPrograma: string;
    
    console.log('¿Es Multiplo? herramienta para verificar múltiplos')
    console.log('')
    
ejecucionPrograma= rls.question('Oprima la tecla (i) para iniciar el programa: ')
    
while(ejecucionPrograma == 'i'){

    let numero: number = rls.questionInt('Ingresar el numero: ');
    let multiplo: number = rls.questionInt('Ingresar el numero a verificar la condicion de multiplo: ');
    
    console.log(esMultiplo(numero,multiplo));

    ejecucionPrograma= rls.question('Oprima (i) para continuar. Presione enter para finalizar. ');
    
}
function esMultiplo (numero: number, multiplo: number): boolean{
          
    if ((numero % multiplo) == 0){
            return  true;
            
        }else {
            return false
    }
}

/*Se agregó una automatización al ejercicio para no tener que ejecutar el programa cada vez que se termina de 
verificar el booleano.*/


