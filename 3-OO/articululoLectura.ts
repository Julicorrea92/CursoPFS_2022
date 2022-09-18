export default abstract class ArticuloLectura {

    private isbn: number;
    private autor: string;
    private editorial: string;
    private titulo: string;
    protected cantidadPaginas: number;

    public constructor(isbn: number, autor: string, editorial: string, titulo: string, cantidadPaginas: number) {

        this.isbn = isbn;
        this.autor = autor;
        this.editorial = editorial;
        this.titulo = titulo;
        this.cantidadPaginas = cantidadPaginas;
    }

    abstract setCantidadPaginas(cantidadPaginas: number): boolean;
}