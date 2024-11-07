import { Veterinaria } from "./veterinaria";

export class Cliente extends Veterinaria {
    private vip: boolean;
    private visitas: number;

    constructor(nombre: string, telefono: number) {
        super(nombre, telefono)
        this.vip = false;
        this.visitas = 0;
        this.id = this.crearId();
    }

    public incrementarVisitas(): void {
        this.visitas++;
        if (this.visitas >= 5) {
            this.vip = true;
        }
    }

    // Getters
    public getVip(): boolean {
        return this.vip;
    }

    public getVisitas(): number {
        return this.visitas;
    }

    // Setters
    public setVip(vip: boolean): void {
        this.vip = vip;
    }

    public setVisitas(visitas: number): void {
        this.visitas = visitas;
    }
}