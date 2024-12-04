import { EntidadBase } from "./EntidadBase";

export class Cliente extends EntidadBase {
    private telefono: number;
    private visitas: number;
    private isVIP: boolean;

    constructor(nombre: string, telefono: number) {
        super(nombre.toLowerCase());
        this.telefono = telefono;
        this.visitas = 0; 
        this.isVIP = false;
    }

    public getTelefono(): number {
        return this.telefono;
    }

    public setTelefono(telefono: number): void {
        this.telefono = telefono;
    }

    public incrementarVisitas(): void {
        this.visitas++;
        this.isVIP = this.visitas >= 5;
    }
}