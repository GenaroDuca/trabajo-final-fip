import { EntidadBase } from "./EntidadBase";

export class Proveedor extends EntidadBase {
    private telefono: number;

    constructor(nombre: string, telefono: number) {
        super(nombre.toLowerCase());
        this.telefono = telefono;
    }

    public getTelefono(): number {
        return this.telefono;
    }

    public setTelefono(telefono: number): void {
            this.telefono = telefono;
    }
}