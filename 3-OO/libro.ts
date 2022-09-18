import ArticuloLectura from "./articululoLectura";

export default class Libro extends ArticuloLectura {

    public constructor(isbn: number, autor: string, editorial: string, titulo: string, cantidadPaginas: number) {
        super(isbn, autor, editorial, titulo, cantidadPaginas);
    }

    public setCantidadPaginas(cantidadPaginas: number): boolean {
        if (cantidadPaginas != 0)
            this.cantidadPaginas = cantidadPaginas
        return true;
    }

    
}






