import { Veterinaria } from "./veterinaria";

export class Paciente extends Veterinaria {
    private especie: string;

    constructor(nombre: string, especie: string) {
        super(nombre);
        this.especie = especie;
        this.id = this.crearId();
    }

    // Getters
    public getEspecie(): string {
        return this.especie;
    }

    // Setters
    public setEspecie(especie: string): void {
        this.especie = especie;
    }
}