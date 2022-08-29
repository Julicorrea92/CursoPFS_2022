    
    import ConsolaDeVideojuegos from "./claseConsola";

    
    export default class Tienda {
        
        private nombre: string;
        private consolas: ConsolaDeVideojuegos[];
    
        //Constructores

        constructor (nombre: string) {
            this.nombre=nombre;
            this.consolas=[];
        }
        //Setters y getters

        public getNombre(): string {return this.nombre;}
        public setNombre(nombre: string): void {this.nombre = nombre;}



//CRUDF  Create-Read-Update-Delete-Find - //ABMLC  Actualizar-Borrar-Modificar-Listar-Crear

        public createConsola (consola: ConsolaDeVideojuegos): void{

                if (consola) 
                this.consolas.push(consola);        
        }

        public findConsola (consola: ConsolaDeVideojuegos): number{

            for (let i = 0; i < this.consolas.length; i++) { 
                if (this.consolas[i] == consola)    
                    return i;   
            }
            return -1
        }

        public  updateConsola(consola: ConsolaDeVideojuegos, posicion: number): void{
            if (consola)
            this.consolas [posicion] = consola;

        }

        public deleteConsola(posicion: number): void{

            if(this.consolas[posicion])
            this.consolas.splice(posicion, 1);
        }
        public readConsola(): ConsolaDeVideojuegos[]{

            let consolas: ConsolaDeVideojuegos[]= [];

            this.consolas.forEach(consola =>{
                consolas.push(consola)
            });
            return consolas;
        
        }

        public readConsolasTxt(): string{

            let textoConsolas : string= '';
            this.consolas.forEach(consola => {
                textoConsolas += consola.imprimir() + '\n'
            });
            return textoConsolas;
        }

            
    }



