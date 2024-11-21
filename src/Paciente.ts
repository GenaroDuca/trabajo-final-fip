import { EntidadBase } from "./EntidadBase";

export class Paciente extends EntidadBase {
  private especie: string;
  private idDuenio: number;

  constructor(nombre: string, especie: string, idDueno: number) {
    super(nombre);
    if (especie.toLowerCase() === `perro` || especie.toLowerCase() === `gato`) {
      this.especie = especie;
    } else {
      this.especie = `exotica`;
    }
    this.idDuenio = idDueno;
  }

  public getEspecie () :string {
    return this.especie;
  }

  public setEspecie (especie: string) :void {
    this.especie = especie;
  }
}
