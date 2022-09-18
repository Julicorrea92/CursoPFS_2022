/*• Se dispone de información referida a pistas de audio. 
Esta contiene un identificador, un título, la duración y el intérprete de diversas canciones.

• Se requiere implementar un sistema de administración de las mismas que permita armar 
listas de reproducción, teniendo que informar tanto la cantidad de pistas como la duración total de cada 
una de estas, como uno de sus servicios.

• Se deben realizar diagramas de clases y codificar utilizando los conceptos de POO. Considerar la utilizacion de una interface.*/

export default class PistasAudio {

    private id: number;
    private titulo: string;
    private duracion: number;
    private interprete: string;

    public constructor(id: number, titulo: string, duracion: number, interprete: string) {

        this.id = id;
        this.titulo = titulo;
        this.duracion = duracion;
        this.interprete = interprete;

    }
    public setId(id: number) {
        this.id = id;
    }
    public getId():number {
        return this.id;
    }
    public setTitulo(titulo: string) {
        this.titulo = titulo;
    }
    public getTitulo(): string {
        return this.titulo;
    }
    public setDuracion(duracion: number) {
        this.duracion = duracion;
    }
    public getDuracion(): number {
        return this.duracion;
    }
    public setInterprete(interprete: string) {
        this.interprete = interprete;
    }
    public getInterprete(): string {
        return this.interprete;
    }
}


