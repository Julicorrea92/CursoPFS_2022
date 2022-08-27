     import ConsolaDeVideojuegos from "./claseConsola";

    
     export default class Tienda {
        
        //Atributos

        private nombre: string;
        private consolas: ConsolaDeVideojuegos[];
    
        //Constructores

        constructor (nombre: string) {
            this.nombre=nombre;
            this.consolas=[];
        }
        //Setters y getters

        public getNombre(): string {
            return this.nombre;
        }
    
        public setNombre(nombre: string): void {
            this.nombre = nombre;
        }



//CRUDF  Create-Read-Update-Delete-Find - ABMLC

        public createConsola (consola: ConsolaDeVideojuegos): void{

                if (consola) 
                this.consolas.push(consola);        
        }


        }