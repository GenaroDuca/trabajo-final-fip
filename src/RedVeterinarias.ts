import { Cliente } from './Cliente';
import { Paciente } from './Paciente';
import { Proveedor } from './Proveedor';
import { Veterinaria } from './Veterinaria';
import * as readlineSync from 'readline-sync';

export class redVeterinarias {
  private veterinarias: Veterinaria[] = [];
  private clientes: Cliente[] = [];
  private pacientes: Paciente[] = [];
  private proveedores: Proveedor[] = [];

  constructor() { }

  //======= GESTION VETERINARIA =======
  public agregarVeterinaria(): void {
    const nombre = readlineSync.question(`Nombre: `)
    const direccion = readlineSync.question(`Direccion: `)
    const veterinaria: Veterinaria = new Veterinaria(nombre, direccion)
    this.veterinarias.push(veterinaria);
    console.log(`¡Veterinaria ${veterinaria.getNombre()} agregada con exito, su ID es: ${veterinaria.getId()}!`)

  }

  public modificarVeterinaria(): void {
    const id = readlineSync.questionInt(`ID de la veterinaria que deseas modificar (Opcion 4 -> Mostrar Veterinarias): `);
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
    const id = readlineSync.questionInt(`ID de la veterinaria que deseas eliminar (Opcion 4 -> Mostrar Veterinarias): `)
    const veterinaria = this.veterinarias.find(vete => vete.getId() === id);
    if (!veterinaria) {
      console.log(`¡ID no encontrada!`);
      return;
    }

    this.veterinarias = this.veterinarias.filter(vete => vete.getId() !== id);
    console.log(`¡Veterinaria ${veterinaria.getNombre()} eliminada con éxito!`)
  }

  public mostrarVeterinarias(): void {
    console.log(this.veterinarias);
    return;
  }

  //======= GESTION CLIENTES =======
  public agregarCliente(): void {
    const nombre = readlineSync.question(`Nombre: `);
    const telefono = readlineSync.questionInt(`Telefono: `);
    const cliente: Cliente = new Cliente(nombre, telefono);
    this.clientes.push(cliente);
    console.log(`¡Cliente ${cliente.getId()} agregado con exito, su ID es: ${cliente.getId()}!`);
  }

  public modificarCliente(): void {
    const id = readlineSync.questionInt(`ID del cliente que deseas modificar (Opcion 4 -> Mostrar Clientes): `);
    const cliente = this.clientes.find(cliente => cliente.getId() === id);
    if (!cliente) {
      console.log(`¡ID no encontrada!`);
      return;
    }
    const nuevoNombre = readlineSync.question(`Nuevo nombre: `);
    const nuevoTelefono = readlineSync.questionInt(`Nuevo Telefono: `);
    cliente.setNombre(nuevoNombre);
    cliente.setTelefono(nuevoTelefono);
    console.log(`¡Cliente ${cliente.getNombre()}, ID: ${cliente.getId()} modificado con exito!`);
  }

  public eliminarCliente(): void {
    const id = readlineSync.questionInt(`ID de la veterinaria que deseas eliminar (Opcion 4 -> Mostrar Veterinarias): `)
    const cliente = this.veterinarias.find(cliente => cliente.getId() === id);
    if (!cliente) {
      console.log(`¡ID no encontrada!`);
      return;
    }

    this.clientes = this.clientes.filter(v => v.getId() !== id);
    console.log(`¡Cliente ${cliente.getNombre()}, ID: ${cliente.getId()} eliminada con éxito!`);
  }

  public mostrarClientes(): void {
    console.log(this.clientes);
    return;
  }

  //======= GESTION PACIENTES =======
  public agregarPaciente(): void {
    const nombre = readlineSync.question(`Nombre: `);
    const especie = readlineSync.question("Especie: ")
    const idDuenio = readlineSync.questionInt(`ID del duenio: `);

    const duenio = this.clientes.find(cliente => cliente.getId() === idDuenio);
    if (!duenio) {
      console.log(`¡ID no encontrada!`);
      return;
    }
    duenio.incrementarVisitas();
    const paciente: Paciente = new Paciente(nombre, especie, idDuenio);
    this.pacientes.push(paciente);
    console.log(`¡Paciente ${paciente.getNombre()}, especie ${paciente.getEspecie()} agregado con exito, la ID de su duenio es: ${duenio.getId()}!`);
  }

  public modificarPaciente(): void {
    const idDuenio = readlineSync.questionInt(`ID del duenio: `);
    const duenio = this.clientes.find(cliente => cliente.getId() === idDuenio);
    if (!duenio) {
      console.log(`¡ID de duenio no encontrada!`);
      return;
    }

    const paciente = this.pacientes.find(paciente => paciente.getId() === idDuenio);

    const nuevoNombre = readlineSync.question(`Nuevo nombre: `);
    const nuevaEspecie = readlineSync.question(`Nueva Especie: `);
    paciente.setNombre(nuevoNombre);
    paciente.setEspecie(nuevaEspecie);
    console.log(`¡Paciente ${paciente.getNombre()},${paciente.getEspecie()}, ID: ${duenio.getId()} modificado con exito!`);
  }

  public eliminarPaciente(): void {
    const idDuenio = readlineSync.questionInt(`ID del duenio: `);
    const duenio = this.clientes.find(cliente => cliente.getId() === idDuenio);
    if (!duenio) {
      console.log(`¡ID de duenio no encontrada!`);
      return;
    }

    const paciente = this.pacientes.find(paciente => paciente.getId() === idDuenio);

    this.pacientes = this.pacientes.filter(paciente => paciente.getId() !== idDuenio);
    console.log(`¡Paciente ${paciente.getNombre()}, ${paciente.getEspecie()}, ID: ${paciente.getId()} eliminada con éxito!`);
  }

  public mostrarPacientes(): void {
    console.log(this.pacientes)
    return;
  }

  //======= GESTION PROVEEDORES =======
  public agregarProveedor(): void {
    const nombre = readlineSync.question(`Nombre: `);
    const telefono = readlineSync.questionInt(`Telefono: `);
    const proveedor: Proveedor = new Proveedor(nombre, telefono);
    this.proveedores.push(proveedor);
    console.log(`¡Proveedor ${proveedor.getNombre()} agregado con exito, su ID es: ${proveedor.getId()}!`);
  }

  public modificarProveedor(): void {
    const id = readlineSync.questionInt(`ID del proveedor que deseas modificar (Opcion 4 -> Mostrar Proveedores): `);
    const proveedor = this.proveedores.find(proveedor => proveedor.getId() === id);
    if (!proveedor) {
      console.log(`¡ID no encontrada!`);
      return;
    }
    const nuevoNombre = readlineSync.question(`Nuevo nombre: `);
    const nuevoTelefono = readlineSync.questionInt(`Nuevo Telefono: `);
    proveedor.setNombre(nuevoNombre);
    proveedor.setTelefono(nuevoTelefono);
    console.log(`¡Proveedor ${proveedor.getNombre()}, ID: ${proveedor.getId()} modificado con exito!`);
  }

  public eliminarProveedor(): void {
    const id = readlineSync.questionInt(`ID de la veterinaria que deseas eliminar (Opcion 4 -> Mostrar Veterinarias): `)
    const proveedor = this.proveedores.find(proveedor => proveedor.getId() === id);
    if (!proveedor) {
      console.log(`¡ID no encontrada!`);
      return;
    }

    this.clientes = this.clientes.filter(v => v.getId() !== id);
    console.log(`¡Proveedor ${proveedor.getNombre()}, ID: ${proveedor.getId()} eliminado con éxito!`)
  }

  public mostrarProveedor(): void {
    console.log(this.proveedores);
    return;
  }
}