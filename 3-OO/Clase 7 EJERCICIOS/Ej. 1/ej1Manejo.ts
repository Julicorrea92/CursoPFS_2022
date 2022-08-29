import * as fs from "fs";


    export class ManejoDatos{

        private nombreElemento: string;
        private separadorFilas: string;
        private separadorColumnas: string;
        private datos: string[][] = [];



        public constructor (nombreElemento: string, saparadorFil: string, separadorCol: string){

            this.nombreElemento= nombreElemento;
            this.separadorFilas= saparadorFil;
            this.separadorColumnas= separadorCol;
        }


        //Métodos

        public leerElemento(){
            let elemento :string = fs.readFileSync(this.nombreElemento, "utf-8");
            //separamos las palabras en un arreglo usando el espacio como delimitador

            if(elemento){
                let filas: string []= elemento.split(this.separadorFilas);

                filas.forEach(filas =>
                    this.datos.push(filas.split(this.separadorColumnas)));





            }



        }

    }


