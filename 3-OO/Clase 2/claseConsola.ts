export default class ConsolaDeVideojuegos {
    
    //Atributos
    
        private id: number;
        private marca: string;
        private modelo: string;
        private portatil: boolean;
        private mandos: string;
    
    //Atributo de composición
 
       private accesorio: Accesorios[];

    //Atributos de función

        private encendido: boolean;
        private conexionInternet: boolean;
        private iniciaVideojuego: boolean;
    

    //Constructores

    public constructor (id: number, marca: string, modelo: string, portatil: boolean, mandos: string){

     
        //Entrada directa (venta, despacho, control stock)

        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.portatil = portatil;

    }
  
    //Setters y getters

    public getId(): number {
        return this.id;
    }
    public setId(id: number): void {
        this.id = id;
    }

    public getMarca(): string {
        return this.marca;
    }
    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getModelo(): string {
        return this.modelo;
    }
    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getPortatil(): boolean {
        return this.portatil;
    }
    public setPortatil(portatil: boolean): void {
        this.portatil = portatil;
    }

    
    public imprimir() : string {
        return `Consola { Id:${this.getId()}, Marca:${this.getMarca()}, Modelo:${this.getModelo()}, Portatil:${this.getPortatil()}}`
    }


    //Métodos

        public encenderApagar(): void{

        if(this.encendido){

                this.encendido = true;
                console.log("La consola está encendida")
            }
        else{
                this.encendido = false;
                console.log("La consola está apagada")
            }
        }

        public conectarInternet(): void {

        if (this.conexionInternet) {

                this.conexionInternet = true; 
                console.log("La consola está conectada a internet")
            }
        else {
                
                this.conexionInternet = false;
                console.log("La consola no está conectada a internet");
            }       
        }

        public iniciarVideojuego(): void {

        if (this.iniciaVideojuego) {

                this.iniciaVideojuego = true; 
                console.log("La consola inició el videojuego")
            }
        else {
                
                this.conexionInternet = false; 
                console.log("La consola finalizó el videojuego");
            }
        }
        
    }

    //Prueba de Composición

   
      //clase p/arreglo

      class Accesorios{

        private nombreA: string;

        public constructor (nombreA: string){
            this.nombreA = nombreA;
            
        }
    
    }