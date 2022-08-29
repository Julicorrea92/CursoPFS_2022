import ConsolaDeVideojuegos from "./claseConsola";
import Tienda from "./servicioConsolas";
//import Accesorios from "./claseConsola"


let Sega = new ConsolaDeVideojuegos("Sega", "Genesis", false,"Digital");
let Play2 = new ConsolaDeVideojuegos("Sony", "Playstation 2", false, "Analógico");
let Switch = new ConsolaDeVideojuegos("Nintendo", "Switch", true, "Integrado");

Sega.encenderApagar(true);
Sega.conectarInternet(false);
Sega.iniciarVideojuego(true);

console.log("");


let miTienda : Tienda = new Tienda ('Almacen de videojuegos');

miTienda.createConsola(Sega);
miTienda.createConsola(Play2);
miTienda.createConsola(Switch);
console.log(miTienda.readConsolasTxt());



//let Consolas : ConsolaDeVideojuegos [] = [Sega, Play2, Switch] //Hacer un array de lo creado

