export class Veterinaria {
    private nombre : string;
    private direccion: string;  
    private id: number; 

constructor (nombre:string,direccion:string){
    this.nombre = nombre;
    this.direccion = direccion;
    this.id = 0;
}   

    // Getters
    public getNombre(): string {
        return this.nombre;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    // Setters
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

  
}