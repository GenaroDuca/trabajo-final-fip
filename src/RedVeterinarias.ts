import { Veterinaria } from './Veterinaria';
import * as readlineSync from 'readline-sync';

export class redVeterinarias {
  private veterinarias: Veterinaria[] = [];

  constructor() { }

  //======= GESTION VETERINARIA =======
  public agregarVeterinaria(): Veterinaria {
    const nombre = readlineSync.question(`Nombre: `)
    const direccion = readlineSync.question(`Direccion: `)
    const veterinaria: Veterinaria = new Veterinaria(nombre, direccion)
    this.veterinarias.push(veterinaria);
    console.log(`¡Veterinaria ${veterinaria.getNombre()} agregada con exito, su ID es: ${veterinaria.getId()}!`);
    return veterinaria
  }

  public modificarVeterinaria(): void {
    console.log (`Listado de Veterinarias:`)
    this.veterinarias.forEach(vete => {
      console.log(`Veterinaria: "${vete.getNombre()}". Dirección: "${vete.getDireccion()}". ID: ${vete.getId()}`)
    })

    if (this.veterinarias.length == 0) {
      console.log("¡No hay veterinarias cargadas!")
      return;
    }

    const id = readlineSync.questionInt(`ID de la veterinaria que deseas modificar: `);
    const veterinaria = this.veterinarias.find(vete => vete.getId() === id);
    if (!veterinaria) {
      console.log(`¡ID no encontrada!`);
      return;
    }

    const nuevoNombre = readlineSync.question(`Nuevo nombre: `);
    const nuevaDireccion = readlineSync.question(`Nueva direccion: `);

    veterinaria.setNombre(nuevoNombre);
    veterinaria.setDireccion(nuevaDireccion);
    console.log(`¡Veterinaria ${veterinaria.getNombre()}, ID: ${veterinaria.getId()}  modificada con exito!`);
  }

  public eliminarVeterinaria(): void {
    console.log (`Listado de Veterinarias:`)
    this.veterinarias.forEach(vete => {
      console.log(`Veterinaria: "${vete.getNombre()}". Dirección: "${vete.getDireccion()}". ID: ${vete.getId()}`)
    })

    if (this.veterinarias.length == 0) {
      console.log("¡No hay veterinarias cargadas!")
      return;
    }

    const id = readlineSync.questionInt(`ID de la veterinaria que deseas eliminar: `)
    const veterinaria = this.veterinarias.find(vete => vete.getId() === id);
    if (!veterinaria) {
      console.log(`¡ID no encontrada!`);
      return;
    }

    this.veterinarias = this.veterinarias.filter(vete => vete.getId() !== id);
    console.log(`¡Veterinaria ${veterinaria.getNombre()} eliminada con éxito!`)
  }

  public mostrarVeterinarias(): boolean {
    console.log (`Listado de Veterinarias:`)
    this.veterinarias.forEach(vete => {
      console.log(`Veterinaria: "${vete.getNombre()}". Dirección: "${vete.getDireccion()}". ID: ${vete.getId()}`)
    })

    if (this.veterinarias.length == 0) {
      console.log("¡No hay veterinarias cargadas!")
      return false;
    } else {
      return true;
    }
  }

  public seleccionarVeterinaria(id: number): Veterinaria {
    const veterinariaElegida = this.veterinarias.find(vete => vete.getId() === id);

    if (veterinariaElegida) {
      console.log(`¡Veterinaria: ${veterinariaElegida.getNombre()} elegida correctamente!`)
      return veterinariaElegida
    } else {
      console.log(`¡ID no encontrada!`);
    }
  }
}