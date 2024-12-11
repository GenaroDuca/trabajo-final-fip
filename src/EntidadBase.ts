
export class EntidadBase {
    private static idsUsadas: number[] = []; //static para que sea unica independientemente de las instacias de las clases hijas de EntidadBase.ts
    protected id: number;
    protected nombre: string;
    

    constructor(nombre: string) {
        this.nombre = nombre;
        this.id = EntidadBase.generarId()
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

    public static generarId(): number {
        let idNueva: number;
        do {
            idNueva = Math.floor(Math.random() * 1000000);

        } while (this.idsUsadas.includes(idNueva));
        this.idsUsadas.push(idNueva);
        return idNueva;
    }

    public verificarTelefono(telefono: number): boolean {
        const telefonoStr = telefono.toString();
        return telefonoStr.length === 10 && !isNaN(Number(telefonoStr));
    }
}