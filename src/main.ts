import * as readlineSync from 'readline-sync';
import { redVeterinarias } from './RedVeterinarias';

const redVeterinaria: redVeterinarias = new redVeterinarias();

let opcion: number;
do {
  console.log('\n=== MENU PRINCIPAL ===');
  console.log('1. Gestionar Veterinarias');
  console.log('2. Gestionar Clientes');
  console.log('3. Gestionar Pacientes');
  console.log('4. Gestionar Proveedores');
  console.log('5. Salir');

  opcion = readlineSync.questionInt('Seleccione una opcion: ');
  switch (opcion) {
    case 1:
      let opcionUno: number;
      do {
        console.log('\n=== GESTIÓN DE VETERINARIAS ===');
        console.log('1. Agregar Veterinaria');
        console.log('2. Modificar Veterinaria');
        console.log('3. Eliminar Veterinaria');
        console.log('4. Mostrar Veterinarias');
        console.log('5. Volver');
        opcionUno = readlineSync.questionInt('Seleccione una opcion: ');
        switch (opcionUno) {          
          case 1:
            redVeterinaria.agregarVeterinaria();
            break;

          case 2:
            redVeterinaria.modificarVeterinaria()
            break;

          case 3:
            redVeterinaria.eliminarVeterinaria();
            break;

          case 4:
            redVeterinaria.mostrarVeterinarias()
            break;

          case 5:
            console.log('Volviendo...');
            break;

          default:
            console.log('Opción inválida. Por favor intente nuevamente.');
        }
      } while (opcionUno !== 5);
      break;
    case 2:
      let opcionDos: number;
      do {
        console.log('\n=== GESTIÓN DE CLIENTES ===');
        console.log('1. Agregar Cliente');
        console.log('2. Modificar Cliente');
        console.log('3. Eliminar Cliente');
        console.log('4. Mostrar Clientes');
        console.log('5. Volver');
        opcionDos = readlineSync.questionInt('Seleccione una opcion: ');
        switch (opcionDos) {
          case 1:
            redVeterinaria.agregarCliente();
            break;

          case 2:
            redVeterinaria.modificarCliente()
            break;

          case 3:
            redVeterinaria.eliminarCliente();
            break;

          case 4:
            redVeterinaria.mostrarClientes()
            break;

          case 5:
            console.log('Volviendo...');
            break;

          default:
            console.log('Opción inválida. Por favor intente nuevamente.');
        }
      } while (opcionDos !== 5);
      break;
    case 3:
      let opcionTres: number;
      do {
        console.log('\n=== GESTIÓN DE PACIENTES ===');
        console.log('1. Agregar Paciente');
        console.log('2. Modificar Paciente');
        console.log('3. Eliminar Paciente');
        console.log('4. Mostrar Pacientes');
        console.log('5. Volver');
        opcionTres = readlineSync.questionInt('Seleccione una opcion: ');
        switch (opcionTres) {
          case 1:
            redVeterinaria.agregarPaciente();
            break;

          case 2:
            redVeterinaria.modificarPaciente()
            break;

          case 3:
            redVeterinaria.eliminarPaciente();
            break;

          case 4:
            redVeterinaria.mostrarPacientes()
            break;

          case 5:
            console.log('Volviendo...');
            break;

          default:
            console.log('Opción inválida. Por favor intente nuevamente.');
        }
      } while (opcionTres !== 5);
      break;
    case 4:
      let opcionCuatro: number;
      do {
        console.log('\n=== GESTIÓN DE PROVEEDORES ===');
        console.log('1. Agregar Proveedor');
        console.log('2. Modificar Proveedor');
        console.log('3. Eliminar Proveedor');
        console.log('4. Mostrar Proveedor');
        console.log('5. Volver');
        opcionCuatro = readlineSync.questionInt('Seleccione una opcion: ');
        switch (opcionCuatro) {
          case 1:
            redVeterinaria.agregarProveedor();
            break;

          case 2:
            redVeterinaria.modificarProveedor()
            break;

          case 3:
            redVeterinaria.eliminarProveedor();
            break;

          case 4:
            redVeterinaria.mostrarProveedor()
            break;

          case 5:
            console.log('Volviendo...');
            break;

          default:
            console.log('Opción inválida. Por favor intente nuevamente.');
        }
      } while (opcionCuatro !== 5);
    case 5:
      console.log('Saliendo del sistema...');
      break;
    default:
      console.log('Opción invalida. Por favor intente nuevamente.');
  }
} while (opcion !== 5);
