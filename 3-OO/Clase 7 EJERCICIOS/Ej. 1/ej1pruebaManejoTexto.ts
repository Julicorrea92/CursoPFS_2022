import ManejoTextos from './ej1Manejo';
import  Superior from './ej1ClaseSuperior';
import Inferior from './ej1ClaseInferior';


let info : Superior[] = [];
let fila : string[] = [];
let cantidadFilas : number = 0;

let MTS : ManejoTextos = new ManejoTextos('datosSuperior.txt', ';', ',');
let MTI : ManejoTextos = new ManejoTextos('datosInferior.txt', '\r\n', '|');

MTS.leerArchivo();
MTI.leerArchivo();
MTS.getCantidadFilas();

cantidadFilas = MTS.getCantidadFilas();

for (let i = 0; i < cantidadFilas; i++) {
    fila = MTS.getFila(i);
    info.push(new Superior((fila[0]=='true'?true:false),parseInt(fila[1]),parseInt(fila[2])));    
}

console.log(info);
// info = [];

cantidadFilas = MTI.getCantidadFilas();

for (let i = 0; i < cantidadFilas; i++) {
    fila = MTI.getFila(i);
    info.push(new Inferior((fila[0]=='true'?true:false),parseInt(fila[1]),parseInt(fila[2]),fila[3],parseInt(fila[4])));    
}
console.log(info);