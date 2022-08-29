import Superior from "./ej1ClaseSuperior";

//let elementos : any =[ [12, "Construido", true, "sin datos", 0, "Tema 1"],  [15, "En obra", false, "sin datos", 1, "Tema 2"], [20, "Proyectado", true, "sin datos", 2, "Tema 1"]] 


export default class Inferior extends Superior{

    //estado
    private d : string;
    private e : number;
    //funcionalidad
    public constructor(a : boolean, b : number, c : number, d : string, e : number) {
        super(a,b,c);
        this.d = d;
        this.e = e;
    }
}
   