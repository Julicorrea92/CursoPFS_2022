import ArticuloLectura from "./articululoLectura";



export default class Biblioteca {

    private nombre: string;
    private domicilio: string;
    private elementos: ArticuloLectura[];


    public constructor(nombre: string, domicilio: string) {

        this.nombre = nombre;
        this.domicilio = domicilio;
        this.elementos = [];
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public setDomicilio(domicilio: string): void {
        this.domicilio = domicilio;
    }
    public getApellido(): string {
        return this.domicilio;
    }
    /*   public setElemento(elementos: []): void {
            this.elementos = elementos;
        }
        public getElemento() {
            return this.elementos;
        } */


    //CRUD

    public insertarArticulo(elemento: ArticuloLectura): void {

        try {
        if (elemento)
            this.elementos.push(elemento);
        else throw new Error("El elemento ya fue agregado")
        }catch (error){
            console.log(`Error en inserción ${error.message}`);
            
        }

    }

    public buscarArticulo(elemento: ArticuloLectura): number {
       
        for (let i = 0; i < this.elementos.length; i++) { 
            if (this.elementos[i] == elemento)    
                return i;
    }
 return -1 
}

}

//Quedan pendientes armar 3 puntos del crud, prueba en main y armado del package Json del NPM