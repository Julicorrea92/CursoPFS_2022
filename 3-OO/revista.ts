import ArticuloLectura from "./articululoLectura";

export default class Revista extends ArticuloLectura {

    private articulos: string[];

    public constructor(isbn: number, autor: string, editorial: string, titulo: string, cantidadPaginas: number, articulos: string[]) {
        super(isbn, autor, editorial, titulo, cantidadPaginas);
        this.articulos = articulos;
    }


    public setCantidadPaginas(cantidadPaginas: number): boolean {
        if (cantidadPaginas > 0 && cantidadPaginas <= 50)
            this.cantidadPaginas = cantidadPaginas;
        return true;
    }

    public createArticuloRevista(aRevista: string): void {
        if (aRevista)
        this.articulos.push(aRevista);
    } 

}