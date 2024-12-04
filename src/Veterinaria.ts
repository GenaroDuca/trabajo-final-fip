import { EntidadBase } from "./EntidadBase";

export class Veterinaria extends EntidadBase {
    private direccion: string;

    constructor(nombre: string, direccion: string) {
        super(nombre);
        this.direccion = direccion.toLowerCase();
    }

    public getDireccion() : string {
        return this.direccion
    }

    public setDireccion(direccion:string) : void  {
        this.direccion = direccion;
    }
    
}