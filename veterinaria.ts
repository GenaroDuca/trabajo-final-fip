import { RedVeterinarias } from "./redVeterinarias";

export class Veterinaria {
    protected nombre: string;
    protected direccion: string;
    // protected id: number;
    protected telefono: number;

    constructor(nombre: string, direccion?: string, telefono?: number) {
        this.nombre = nombre;
        this.direccion = direccion;
        // this.id = this.crearId();
        this.telefono = telefono;
    }

    // Getters
    public getNombre(): string {
        return this.nombre;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public getTelefono (): number {
        return this.telefono;
    }
    // Setters
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    // // Métodos 
    
    // public crearId(): any {
    //     this.id = Math.floor(Math.random() *1000);
    //     this.identificadores.push (this.id)
    //     return this.id;
    // }
}