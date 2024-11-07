import { RedVeterinarias } from "./redVeterinarias";

export class Veterinaria extends RedVeterinarias {
    protected nombre: string;
    private direccion: string;
    protected id: number;
    protected telefono: number;

    constructor(nombre: string, telefono?: number, direccion?: string) {
        super()
        this.nombre = nombre;
        this.direccion = direccion;
        this.id = this.crearId();
        this.telefono = telefono;
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

    // Métodos 
    public crearId(): any {
        this.id = Math.floor(Math.random() *1000);
        this.identificadores.push (this.id)
        return this.id;
    }
}