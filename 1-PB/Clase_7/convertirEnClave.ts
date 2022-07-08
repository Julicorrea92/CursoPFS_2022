import * as rls from 'readline-sync';
let cadena1 : string = "MauriCio2781";      //FALTA HACER QUE LO INGRESE EL USUARIO
let cadena2 : string = "";
let i: number=0;
let letra : string = "";
for (i = 0 ; i <= cadena1.length ; i ++) {         
    letra = cadena1[i];                                         //no me sale
    cadena2 = cadena2 + letra.toUpperCase();
    if (cadena2[i] == cadena1[i]) {
        letra = cadena1[i];
            cadena2= cadena2 + letra.toLowerCase();
        }   
    if (cadena2[i] == cadena1[i]) {
        switch (cadena1[i]) {
            case ("a") : cadena2 = cadena2 +"."; break; 
            case ("e") : cadena2 = cadena2 +","; break;
            case ("i") : cadena2 = cadena2 +";"; break;
            case ("o") : cadena2 = cadena2 +":"; break;
            case ("u") : cadena2 = cadena2 +"!"; break;
            case ("+") : cadena2 = cadena2 +"+"; break;
            case ("-") : cadena2 = cadena2 +"-"; break;
            case ("*") : cadena2 = cadena2 +"*"; break;
            case ("/") : cadena2 = cadena2 +"/"; break;
            case ("0") : cadena2 = cadena2 +"0"; break;
            case ("1") : cadena2 = cadena2 +"1"; break;
            case ("2") : cadena2 = cadena2 +"2"; break;
            case ("3") : cadena2 = cadena2 +"3"; break;
            case ("4") : cadena2 = cadena2 +"4"; break;
            case ("5") : cadena2 = cadena2 +"5"; break;
            case ("6") : cadena2 = cadena2 +"6"; break;
            case ("7") : cadena2 = cadena2 +"7"; break;
            case ("8") : cadena2 = cadena2 +"8"; break;
            case ("9") : cadena2 = cadena2 +"9"; break;            
            default:
        }
    }
console.log(cadena1,cadena2);