/* • Solicite al usuario que ingrese un texto y retornelo convertido en un nombre de variable/función con las
reglas camelCase
• Por ejemplo, si el usuario ingresa: convertir texto segun camel case, el programa lo debe convertir en:
convertirTextoSegunCamelCase*/



import * as rls from 'readline-sync'

console.log('Convertidor de textos en regla camelCase.')

let textoIngresado: string= rls.question('Ingresar texto: ');
let tamañoIngresado: number= textoIngresado.length
let i: number;
let caracter: string=''
let modificado: string= ''




reemplazo();



function reemplazo (){

    for (let i=0; i<tamañoIngresado; i++){
        if (textoIngresado[i]== " "){
            i= i+1;
            caracter= textoIngresado[i];
            modificado= modificado+ caracter.toUpperCase()

        }
        else {
            (textoIngresado[i]!= ' '); {
            caracter= textoIngresado[i];
            modificado= modificado+ caracter.toUpperCase()
            }
        }


    }

console.log(`El texto ingresado se leera en camelCase: ${modificado} `);






    


}
