
export default class ConsolaDeVideojuegos {
    
    //Atributos
    
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

    public constructor (marca: string, modelo: string, portatil: boolean, mandos: string){

     
        //Entrada directa (venta, despacho, control stock)

        this.marca = marca;
        this.modelo = modelo;
        this.portatil = portatil;
        this.mandos = mandos;

    }
  
    //Setters y getters

    public getMarca(): string {return this.marca;}
    public setMarca(marca: string): void {this.marca = marca;}

    public getModelo(): string {return this.modelo;}
    public setModelo(modelo: string): void {this.modelo = modelo;}

    public getPortatil(): boolean {return this.portatil;}
    public setPortatil(portatil: boolean): void { this.portatil = portatil;}
    
    public getMandos(): string {return this.mandos;}
    public setMandos(mandos: string): void { this.mandos = mandos;}

    
    public imprimir() : string {
        return `La consola tiene las siguientes caracteristicas: { Marca:${this.getMarca()}, Modelo:${this.getModelo()}, Portatil:${this.getPortatil()}, Mando:${this.getMandos()}}`
    }


    //Métodos

        public encenderApagar(valor:boolean): void{

        if(valor==true){

                this.encendido = true;
                console.log("La consola está encendida")
            }
        else{
                this.encendido = false;
                console.log("La consola está apagada")
            }
        }

        public conectarInternet(valor:boolean): void{

            if(valor==true) {

                this.conexionInternet = true; 
                console.log("La consola está conectada a internet")
            }
        else {
                
                this.conexionInternet = false;
                console.log("La consola no está conectada a internet");
            }       
        }

        public iniciarVideojuego(valor:boolean): void{

            if(valor==true) {

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