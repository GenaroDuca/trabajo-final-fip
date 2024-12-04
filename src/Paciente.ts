import { EntidadBase } from "./EntidadBase";

export class Paciente extends EntidadBase {
  private especie: string;
  
  constructor(nombre: string, especie: string, idDueno: number) {
    super(nombre.toLowerCase());
    if (especie.toLowerCase() === `perro` || especie.toLowerCase() === `gato`) {
      this.especie = especie.toLowerCase();
    } else {
      this.especie = `exotica`;
    }
    this.id = idDueno;
  }

  public getEspecie () :string {
    return this.especie;
  }

  public setEspecie (especie: string) :void {
    this.especie = especie;
  }
}
