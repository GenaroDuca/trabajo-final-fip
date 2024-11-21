import { Entidad } from "./Entidad";

export abstract class EntidadBase implements Entidad {
    id: number;
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
        this.id = this.generateId();
    }

    public getId(): number {
        return this.id;
    }

    public getNombre(): string {    
        return this.nombre;
    }

    public setNombre (nombre: string) : void {
        this.nombre = nombre;
    }

    public generateId(): number {
        let id = Math.floor(Math.random() * 1000000);
        return id;
    }
}