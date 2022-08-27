import ConsolaDeVideojuegos from "./claseConsola";
import Tienda from "./servicioConsolas";
//import Accesorios from "./claseConsola"


let Sega = new ConsolaDeVideojuegos(1, "Sega", "Genesis", false,"Digital");
let Play2 = new ConsolaDeVideojuegos(2, "Sony", "Playstation 2", false, "Analógico");
let Switch = new ConsolaDeVideojuegos(12, "Nintendo", "Switch", true, "Integrado");



let Consolas : ConsolaDeVideojuegos [] = [Sega, Play2, Switch] //Hacer un array de lo creado


