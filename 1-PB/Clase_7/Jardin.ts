import * as readline from 'readline-sync';
​
function salasJardin (){
    let numeroAlumnos : number = readline.questionInt("Ingrese el numero de alumnos que ingresaran: ");
​
    if(numeroAlumnos === 40 || numeroAlumnos > 35){
        console.log ("Ingresan a la sala azul")
    }else if (numeroAlumnos === 35 || numeroAlumnos > 30 ){
        console.log("Ingresan a la sala verde")
    }else {
        console.log("Ingresan a la sala Amarilla")
    }
}
​
salasJardin();