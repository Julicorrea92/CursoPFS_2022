import * as rls from 'readline-sync';
let producto : number= 0;
let productoEscalar : number =0;
let i : number = 0;
let n : number = rls.questionInt("Ingrese la dimension del arreglo: ");
let v1 : number[] = new Array(n);
let v2 : number[] = new Array(n);
for (i=0; i<n; i++) {
    v1[i] = rls.questionInt("Ingrese un numero para el arreglo v1: ");
    v2[i] = rls.questionInt("Ingrese un numero para el arreglo v2: ");
    producto = v1[i]*v2[i];
    productoEscalar = productoEscalar + producto;
}
console.log("El producto escalar es: ", productoEscalar);