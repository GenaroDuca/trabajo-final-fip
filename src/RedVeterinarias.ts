import { Veterinaria } from './Veterinaria';
import * as readlineSync from 'readline-sync';

export class redVeterinarias {
  private veterinarias: Veterinaria[] = [];

  constructor() { }

  //======= GESTION VETERINARIA =======
  public agregarVeterinaria(): Veterinaria {
    let nombre = readlineSync.question(`Nombre: `)
    let direccion = readlineSync.question(`Direccion: `)

    let telefono: number;
    let telefonoValido = false;

    while (!telefonoValido) {
      telefono = readlineSync.questionInt(`Telefono: `);

      if (this.verificarTelefono(telefono)) {
        telefonoValido = true;
      } else {
        console.error("Número de teléfono inválido. Debe tener exactamente 10 dígitos. Inténtalo de nuevo.");
      }
    }

    let veterinaria: Veterinaria = new Veterinaria(nombre, direccion, telefono)
    this.veterinarias.push(veterinaria);
    console.log(`¡Veterinaria ${veterinaria.getNombre()} agregada con exito, su ID es: ${veterinaria.getId()}!`);
    return veterinaria
  }

  public modificarVeterinaria(): void {
    console.log(`Listado de Veterinarias:`)
    this.veterinarias.forEach(vete => {
      console.log(`Veterinaria: "${vete.getNombre()}". Dirección: "${vete.getDireccion()}". Telefono: ${vete.getTelefono()}. ID: ${vete.getId()}`)
    })

    if (this.veterinarias.length == 0) {
      console.log("¡No hay veterinarias cargadas!")
      return;
    }

    let id = readlineSync.questionInt(`ID de la veterinaria que deseas modificar: `);
    let veterinaria = this.veterinarias.find(vete => vete.getId() === id);
    if (!veterinaria) {
      console.log(`¡ID no encontrada!`);
      return;
    }

    let nuevoNombre = readlineSync.question(`Nuevo nombre: `);
    let nuevaDireccion = readlineSync.question(`Nueva direccion: `);

    veterinaria.setNombre(nuevoNombre);
    veterinaria.setDireccion(nuevaDireccion);
    console.log(`¡Veterinaria ${veterinaria.getNombre()}, ID: ${veterinaria.getId()}  modificada con exito!`);
  }

  public eliminarVeterinaria(): void {
    console.log(`Listado de Veterinarias:`)
    this.veterinarias.forEach(vete => {
      console.log(`Veterinaria: "${vete.getNombre()}". Dirección: "${vete.getDireccion()}". Telefono: ${vete.getTelefono()}. ID: ${vete.getId()}`)
    })

    if (this.veterinarias.length == 0) {
      console.log("¡No hay veterinarias cargadas!")
      return;
    }

    let id = readlineSync.questionInt(`ID de la veterinaria que deseas eliminar: `)
    let veterinaria = this.veterinarias.find(vete => vete.getId() === id);
    if (!veterinaria) {
      console.log(`¡ID no encontrada!`);
      return;
    }

    this.veterinarias = this.veterinarias.filter(vete => vete.getId() !== id);
    console.log(`¡Veterinaria ${veterinaria.getNombre()} eliminada con éxito!`)
  }

  public gestionarVeterinarias(): boolean {
    console.log(`Listado de Veterinarias:`)
    this.veterinarias.forEach(vete => {
      console.log(`Veterinaria: "${vete.getNombre()}". Dirección: "${vete.getDireccion()}". ID: ${vete.getId()}\n     - Clientes: ${vete.getCantClientes()}. \n     - Pacientes: ${vete.getCantPacientes()}.\n     - Proveedores: ${vete.getCantProveedores()}.`)
    })

    if (this.veterinarias.length == 0) {
      console.log("¡No hay veterinarias cargadas!")
      return false;
    } else {
      return true;
    }
  }

  public mostrarVeterinarias(): void {
    console.log(`Listado de Veterinarias:`)
    this.veterinarias.forEach(vete => {
      console.log(`Veterinaria: "${vete.getNombre()}". Dirección: "${vete.getDireccion()}". ID: ${vete.getId()}\n   Clientes: ${vete.getCantClientes()}. Pacientes: ${vete.getCantPacientes()}. Proveedores: ${vete.getCantProveedores()}.`)
    })

    if (this.veterinarias.length == 0) {
      console.log("¡No hay veterinarias cargadas!")
      return;
    }
  }

  public seleccionarVeterinaria(id: number): Veterinaria {
    let veterinariaElegida = this.veterinarias.find(vete => vete.getId() === id);

    if (veterinariaElegida) {
      console.log(`¡Veterinaria: ${veterinariaElegida.getNombre()} elegida correctamente!`)
      return veterinariaElegida
    } else {
      console.log(`¡ID no encontrada!`);
    }
  }

  public verificarTelefono(telefono: number): boolean {
    let telefonoStr = telefono.toString();
    return telefonoStr.length === 10 && !isNaN(Number(telefonoStr));
  }
}