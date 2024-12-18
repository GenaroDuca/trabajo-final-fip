import { Cliente } from "./Cliente";
import { EntidadBase } from "./EntidadBase";

export class Paciente extends EntidadBase {
  private especie: string;
  private duenio: Cliente;

  constructor(nombre: string, especie: string, duenio: Cliente, telefonoDuenio: number) {
    super(nombre.toLowerCase(), telefonoDuenio);
    if (especie.toLowerCase() === `perro` || especie.toLowerCase() === `gato`) {
      this.especie = especie.toLowerCase();
    } else {
      this.especie = `exotica`;
    }
    this.duenio = duenio;
    this.id = duenio.getId();
  }

  public getEspecie(): string {
    return this.especie;
  }

  public setEspecie(especie: string): void {
    this.especie = especie.toLowerCase();
  }

  public getDuenio() {
    return this.duenio;
  }
}
