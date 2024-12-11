import { EntidadBase } from "./EntidadBase";
import { Paciente } from "./Paciente";

export class Cliente extends EntidadBase {
    private telefono: number;
    private visitas: number;
    private esVIP: boolean;
    private mascotas: Paciente[] = [];

    constructor(nombre: string, telefono: number) {
        super(nombre.toLowerCase());
        this.telefono = telefono;
        this.visitas = 0; 
        this.esVIP = false;
    }

    public getTelefono(): number {
        return this.telefono;
    }

    public setTelefono(telefono: number): void {
        this.telefono = telefono;
      
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

    public getMascotas(): Paciente[] {
        return this.mascotas;
    }

}
