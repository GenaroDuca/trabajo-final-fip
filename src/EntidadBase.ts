import { GeneradorId } from "./GeneradorId";

export class EntidadBase extends GeneradorId {
    protected id: number;
    protected nombre: string;

    constructor(nombre: string) {
        super ()
        this.nombre = nombre;
        this.id = GeneradorId.generarId()
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
}