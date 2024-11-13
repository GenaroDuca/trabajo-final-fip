import { Veterinaria } from "./veterinaria";

export class Proveedor extends Veterinaria {

    constructor(nombre: string, direccion:string, telefono: number) {
        super(nombre, direccion, telefono)
        // this.id = this.crearId();
    }
    // Getters
    public getTelefono(): number {
        return this.telefono;
    }

    // Setters
    public setTelefono(telefono: number): void {
        this.telefono = telefono;
    }
}