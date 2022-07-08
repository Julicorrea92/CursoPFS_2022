import * as rls from 'readline-sync';
let convertido : string = "";
let textoOriginal : string = rls.question("Ingrese un texto para convertir segun camel case: ");
let letra : string = "";
let i: number = 0;
for (i=0; i < textoOriginal.length ; i++) {
    if (textoOriginal[i] ==" ") {
        i = i+1;
        letra = textoOriginal[i];
        convertido= convertido + letra.toUpperCase();
    } else {
        (textoOriginal[i] !=" ") 
        letra = textoOriginal[i];
        convertido= convertido + letra.toLowerCase();
    }   
}
console.log(convertido);