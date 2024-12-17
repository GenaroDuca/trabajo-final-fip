import { EntidadBase } from "./EntidadBase";

export class Proveedor extends EntidadBase {
    private suministro: string;

    constructor(nombre: string, suministro: string, telefono: number) {
        super(nombre.toLowerCase(), telefono);
        this.suministro = suministro;
    }

    public getSuministro(): string {
        return this.suministro;
    }

    public setSuministro(suministro: string): void {
        this.suministro = suministro;
    }
}