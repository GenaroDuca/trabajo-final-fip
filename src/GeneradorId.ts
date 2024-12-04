export class GeneradorId {
    private static idsUsadas: number[] = [];

    public static generarId(): number {
        let idNueva: number;
        do {
            idNueva = Math.floor(Math.random() * 1000000);

        } while (this.idsUsadas.includes(idNueva));
        this.idsUsadas.push(idNueva);
        return idNueva;
    }
}