import { Veterinaria } from "./veterinaria"
import { RedVeterinarias } from "./redVeterinarias";
import * as rls from "readline-sync";


//CREAMOS RED DE VETERINARIAS
const redVeterinarias: RedVeterinarias = new RedVeterinarias

let menuPrincipal = true
while (menuPrincipal) {
    let opcion: number;

    console.log("¡Bienvenido Rincon Peludo!");
    console.log("   1.Ver clientes");
    console.log("   2.Ver pacientes");
    console.log("   3.Ver sucursales");
    console.log("   4.Ver proveedores")
    console.log("Centro de gestión");
    console.log("   5.Agregar cliente");
    console.log("   6.Agregar paciente");
    console.log("   7.Agregar sucursal");
    console.log("   8.Agregar proveedor");
    console.log("   9.Salir")

    opcion = rls.questionInt("Selecciones una opcion: ");
    switch (opcion) {
        case 1:
            redVeterinarias.mostrarClientes();
            break;
        case 2:
            redVeterinarias.mostrarPaciente();
            break;
        case 3:
            redVeterinarias.mostrarSucursales();
            break;
        case 4:
            redVeterinarias.mostrarProveedores();
            break;
        case 5:
            let nombreCliente = rls.question("Nombre: ");
            let direccionCliente = rls.question("Ingrese domicilio: ");
            let telefonoCliente = rls.questionInt("Telefono: ");
            redVeterinarias.agregarCliente(nombreCliente, direccionCliente, telefonoCliente);
            console.log(`-----------------------------\n¡Cliente cargada con exito!\n-----------------------------`);
            break;
        case 6:
            let nombrePaciente = rls.question("Nombre: ");
            let especiePaciente = rls.question("Especie: ");
            redVeterinarias.agregarPaciente(nombrePaciente, especiePaciente);
            console.log(`-----------------------------\n¡Paciente cargada con exito!\n-----------------------------`);

            break;
        case 7:
            let direccionSucursal = rls.question("Direccion: ");
            let telefonoSucursal = rls.questionInt("Telefono: ");
            redVeterinarias.agregarSucursal("Rincon Peludo", direccionSucursal, telefonoSucursal);
            console.log(`-----------------------------\n¡Sucursal cargada con exito!\n-----------------------------`);
            break;
        case 8:
            let nombreProveedor = rls.question ("Nombre: ");
            let direccionProveedor = rls.question ("Direccion: ");
            let telefonoProveedor = rls.questionInt ("Telefono: ");
            redVeterinarias.agregarProveedores(nombreProveedor, direccionProveedor, telefonoProveedor);
            console.log(`-----------------------------\n¡Proveedorcargada con exito!\n-----------------------------`);
            break;
        case 9:
            console.log(`¡Adios!`);
            menuPrincipal = false;
            break;
    }
}