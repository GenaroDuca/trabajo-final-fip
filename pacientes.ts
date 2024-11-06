export class Paciente {
    private nombre : string;
    private especie: string;  
    private id: number; 

constructor (nombre:string,especie: string){
    this.nombre = nombre;
    this.especie = especie;
    this.id = 0;
}   

}