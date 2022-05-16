/*  Desarrolle un algoritmo que, de acuerdo a la altura de una persona, decida si puede entrar a
un juego en un parque de diversiones

 Para poder subirse a la montaña rusa la persona debe medir 1.30 mts. o más */

 import * as rls from "readline-sync"

 let alturaPersona: number = rls.questionFloat( 'Ingrese la altura a verificar: ');

 if (alturaPersona >= 1.30){
    console.log('Tu altura es la permitida para subir a la montaña rusa.');
 } 
else{
    console.log('Tu altura NO es la permitida para subir a la montaña rusa.');
}


 /*Aclarada la diferencia entre Int y Float y se profundizo sobre los distintos casos*/
    
