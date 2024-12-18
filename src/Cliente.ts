import { EntidadBase } from "./EntidadBase";
import { Paciente } from "./Paciente";

export class Cliente extends EntidadBase {
    private visitas: number;
    private esVIP: boolean;
    private mascotas: Paciente[] = [];

    constructor(nombre: string, telefono: number) {
        super(nombre.toLowerCase(), telefono);
        this.telefono = telefono;
        this.visitas = 0; 
        this.esVIP = false;
    }
    
    public getEsVip() : boolean {
        return this.esVIP 
    }
    
    public incrementarVisitas(): void {
        this.visitas++;
        this.esVIP = this.visitas >= 5;
    }

    public agregarMascota(mascota: Paciente): void {
        this.mascotas.push(mascota);
    }

    public eliminarMascota(mascotaEliminar: Paciente): void {
        this.mascotas = this.mascotas.filter((mascota: Paciente) => mascota !== mascotaEliminar);
    }

    public getMascotas(): Paciente[] {
        return this.mascotas;
    }

}
