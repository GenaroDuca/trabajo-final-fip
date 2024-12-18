import * as readlineSync from 'readline-sync';
import { redVeterinarias } from './RedVeterinarias';
import { Veterinaria } from './Veterinaria';

let redVeterinaria: redVeterinarias = new redVeterinarias();

function mainMenu() {
  let opcion: number;
  do {
    console.log('\n=== MENU PRINCIPAL ===');
    console.log('1. Gestionar Veterinarias');
    console.log('2. Agregar Veterinarias');
    console.log('3. Eliminar Veterinarias');
    console.log('4. Modificar Veterinarias');
    console.log('5. Mostrar Veterinarias');
    console.log('6. Salir'); 3

    opcion = readlineSync.questionInt('Seleccione una opcion: ');

    switch (opcion) {
      case 1:
        if (redVeterinaria.gestionarVeterinarias()) {
          const idVeterinaria = readlineSync.questionInt("Seleccione una veterinaria con su ID: ");
          const veterinariaGestionar = redVeterinaria.seleccionarVeterinaria(idVeterinaria);
          if (veterinariaGestionar) {
            gestionVeterinariaElegida(veterinariaGestionar);
          }
        }
        break;
      case 2:
        redVeterinaria.agregarVeterinaria();
        break;

      case 3:
        redVeterinaria.eliminarVeterinaria();
        break;

      case 4:
        redVeterinaria.modificarVeterinaria();
        break;

      case 5:
        redVeterinaria.mostrarVeterinarias();
        break;

      case 6:
        console.log('¡Hasta luego!');
        break;

      default:
        console.log('Opción inválida. Por favor intente nuevamente.');
        break;
    }
  } while (opcion !== 6);
}

function gestionVeterinariaElegida(veterinaria: Veterinaria) {
  let opcion: number;
  do {
    console.log(`=== Veterinaria: ${veterinaria.getNombre()} ===`);
    console.log('1. Gestionar Clientes');
    console.log('2. Gestionar Pacientes');
    console.log('3. Gestionar Proveedores');
    console.log('4. Volver');
    opcion = readlineSync.questionInt('Seleccione una opcion: ');

    switch (opcion) {
      case 1:
        gestionClientes(veterinaria);
        break;

      case 2:
        gestionPacientes(veterinaria);
        break;

      case 3:
        gestionProveedores(veterinaria);
        break;

      case 4:
        console.log(`Volviendo...`);
        mainMenu();
        break;

      default:
        console.log('Opción inválida. Por favor intente nuevamente.');
        break;
    }
  } while (opcion !== 4);
}

function gestionClientes(veterinaria: Veterinaria) {
  let opcion: number;
  do {
    console.log(`=== Gestión de Clientes (${veterinaria.getNombre()}) ===`);
    console.log('1. Agregar Cliente');
    console.log('2. Modificar Cliente');
    console.log('3. Eliminar Cliente');
    console.log('4. Mostrar Clientes');
    console.log('5. Volver');
    opcion = readlineSync.questionInt('Seleccione una opcion: ');
    switch (opcion) {
      case 1:
        veterinaria.agregarCliente()
        break;

      case 2:
        veterinaria.modificarCliente()
        break;

      case 3:
        veterinaria.eliminarCliente()
        break;

      case 4:
        veterinaria.mostrarClientes()
        break;

      case 5:
        console.log('Volviendo...');
        gestionVeterinariaElegida(veterinaria)
        break;

      default:
        console.log('Opción inválida. Por favor intente nuevamente.');
    }
  } while (opcion !== 5);
}

function gestionPacientes(veterinaria: Veterinaria) {
  if (veterinaria.getClientes().length == 0) {
    console.log(`¡Debe ingresar mínimo un cliente primero!`);
    return;
  } else {
    let opcion: number;
  do {
    console.log(`=== Gestión de Pacientes (${veterinaria.getNombre()}) ===`);
    console.log('1. Agregar Paciente');
    console.log('2. Modificar Paciente');
    console.log('3. Eliminar Paciente');
    console.log('4. Mostrar Paciente');
    console.log('5. Volver');
    opcion = readlineSync.questionInt('Seleccione una opcion: ');
    switch (opcion) {
      case 1:
        veterinaria.agregarPaciente()
        break;

      case 2:
        veterinaria.modificarPaciente()
        break;

      case 3:
        veterinaria.eliminarPaciente()
        break;

      case 4:
        veterinaria.mostrarPacientes()
        break;

      case 5:
        console.log('Volviendo...');
        gestionVeterinariaElegida(veterinaria)
        break;

      default:
        console.log('Opción inválida. Por favor intente nuevamente.');
    }
  } while (opcion !== 5);
  }
  
}

function gestionProveedores(veterinaria: Veterinaria) {
  let opcion: number;
  do {
    console.log(`=== Gestión de Proveedores (${veterinaria.getNombre()}) ===`);
    console.log('1. Agregar Proveedores');
    console.log('2. Modificar Proveedores');
    console.log('3. Eliminar Proveedores');
    console.log('4. Mostrar Proveedores');
    console.log('5. Volver');
    opcion = readlineSync.questionInt('Seleccione una opcion: ');
    switch (opcion) {
      case 1:
        veterinaria.agregarProveedor()
        break;

      case 2:
        veterinaria.modificarProveedor()
        break;

      case 3:
        veterinaria.eliminarProveedor()
        break;

      case 4:
        veterinaria.mostrarProveedores()
        break;

      case 5:
        console.log('Volviendo...');
        gestionVeterinariaElegida(veterinaria)
        break;

      default:
        console.log('Opción inválida. Por favor intente nuevamente.');
    }
  } while (opcion !== 5);
}

mainMenu();
