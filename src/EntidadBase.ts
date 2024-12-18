
export class EntidadBase {
    private static idsUsadas: number[] = []; //static para que sea unica independientemente de las instacias de las clases hijas de EntidadBase.ts
    protected id: number;
    protected nombre: string;
    protected telefono: number;

    constructor(nombre: string, telefono: number) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = EntidadBase.generarId()
    }


    public getTelefono(): number {
        return this.telefono;
    }

    public setTelefono(telefono: number): void {
        this.telefono = telefono;
    }

    public getId(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre.toLowerCase();
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
        let telefonoStr = telefono.toString();
        return telefonoStr.length === 10 && !isNaN(Number(telefonoStr));
    }
}