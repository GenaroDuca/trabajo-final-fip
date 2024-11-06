export class Cliente {
    private nombre : string;
    private telefono: number;
    private vip: boolean;
    private visitas: number;
    private id: number; 

    constructor(nombre: string, telefono: number){
        this.nombre = nombre;
        this.telefono = telefono;
        this.vip = false;
        this.visitas = 0;
        this.id = 0;
    }

    public incrementarVisitas (): void {
        this.visitas++;
        if (this.visitas >= 5){
            this.vip = true;
        }

    }
}