import * as readlineSync from 'readline-sync';
import { EntidadBase } from "./EntidadBase";
import { Cliente } from './Cliente';
import { Paciente } from './Paciente';
import { Proveedor } from './Proveedor';

export class Veterinaria extends EntidadBase {
    private direccion: string;
    private clientes: Cliente[] = [];
    private pacientes: Paciente[] = [];
    private proveedores: Proveedor[] = [];

    constructor(nombre: string, direccion: string) {
        super(nombre);
        this.direccion = direccion.toLowerCase();
    }

    public getDireccion(): string {
        return this.direccion
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    //======= GESTION CLIENTES =======
    public agregarCliente(): void {
        const nombre = readlineSync.question(`Nombre: `);
        const telefono = readlineSync.questionInt(`Telefono: `);
        const cliente: Cliente = new Cliente(nombre, telefono);
        this.clientes.push(cliente);
        console.log(`¡Cliente ${cliente.getNombre()} agregado con exito, su ID es: ${cliente.getId()}!`);
    }

    public modificarCliente(): void {
        console.log(`Listado de Clientes`)
        this.clientes.forEach(cliente => {
            console.log(`Cliente: "${cliente.getNombre()}". VIP: "${cliente.getEsVip()}". Telefono: ${cliente.getTelefono()} ID: ${cliente.getId()}`)
        })

        if (this.clientes.length == 0) {
            console.log("¡No hay clientes cargados!")
            return;
        }

        const id = readlineSync.questionInt(`ID del cliente que deseas modificar: `);
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
        console.log(`Listado de Clientes`)
        this.clientes.forEach(cliente => {
            console.log(`Cliente: "${cliente.getNombre()}". VIP: "${cliente.getEsVip()}". Telefono: ${cliente.getTelefono()} ID: ${cliente.getId()}`)
        })

        if (this.clientes.length == 0) {
            console.log("¡No hay clientes cargados!")
            return;
        }

        const id = readlineSync.questionInt(`ID del cliente que deseas eliminar: `)
        const cliente = this.clientes.find(cliente => cliente.getId() === id);
        if (!cliente) {
            console.log(`¡ID no encontrada!`);
            return;
        }

        this.clientes = this.clientes.filter(v => v.getId() !== id);
        console.log(`¡Cliente ${cliente.getNombre()}, ID: ${cliente.getId()} eliminada con éxito!`);
    }

    public mostrarClientes(): void {
        console.log(`Listado de Clientes`)
        this.clientes.forEach(cliente => {
            const mascotas = cliente.getMascotas().map(mascota => mascota.getNombre()).join(', ');
            console.log(`Cliente: "${cliente.getNombre()}". VIP: "${cliente.getEsVip()}". Telefono: ${cliente.getTelefono()} ID: ${cliente.getId()}. Mascotas: ${mascotas}`);
        });
    
        if (this.clientes.length == 0) {
            console.log("¡No hay clientes cargados!");
        }
    }

    //======= GESTION PACIENTES =======
    public agregarPaciente(): void {
        const nombre = readlineSync.question(`Nombre: `);
        const especie = readlineSync.question("Especie: ");
        const idDuenio = readlineSync.questionInt(`ID del duenio: `);
    
        const duenio = this.clientes.find(cliente => cliente.getId() === idDuenio);
        if (!duenio) {
            console.log(`¡ID no encontrada!`);
            return;
        }
        duenio.incrementarVisitas();
        const paciente: Paciente = new Paciente(nombre, especie, duenio);
        duenio.agregarMascota(paciente);
        this.pacientes.push(paciente);
        console.log(`¡Paciente ${paciente.getNombre()}, especie ${paciente.getEspecie()} agregado con exito, la ID de su duenio es: ${duenio.getId()}!`);
    }

    public modificarPaciente(): void {
        console.log(`Listado de Pacientes`);
        this.pacientes.forEach(paciente => {
            console.log(`Paciente: "${paciente.getNombre()}". Especie: ${paciente.getEspecie()} ID de dueño: ${paciente.getId()}`)
        })

        if (this.pacientes.length == 0) {
            console.log("¡No hay pacientes cargados!")
            return;
        }

        const idDuenio = readlineSync.questionInt(`ID del dueño: `);
        const duenio = this.clientes.find(cliente => cliente.getId() === idDuenio);
        if (!duenio) {
            console.log(`¡ID de dueño no encontrada!`);
            return;
        }

        const pacientesDuenio = this.pacientes.filter(paciente => paciente.getId() === idDuenio);
        if (pacientesDuenio.length === 0) {
            console.log(`El dueño no tiene pacientes registrados.`);
            return;
        }

        console.log(`Pacientes del dueño (ID: ${idDuenio}):`);
        pacientesDuenio.forEach(paciente => console.log(`ID: ${paciente.getId()} - Nombre: ${paciente.getNombre()}`));

        const nombrePaciente = readlineSync.question(`Nombre del paciente a modificar: `);
        const paciente = pacientesDuenio.find(paciente => paciente.getNombre() === nombrePaciente.toLowerCase());
        if (!paciente) {
            console.log(`¡Nombre del paciente no encontrado!`);
            return;
        }

        const nuevoNombre = readlineSync.question(`Nuevo nombre: `);
        const nuevaEspecie = readlineSync.question(`Nueva Especie: `);
        paciente.setNombre(nuevoNombre);
        paciente.setEspecie(nuevaEspecie);
        console.log(`¡Paciente ${paciente.getNombre()}, ${paciente.getEspecie()}, ID: ${paciente.getId()} modificado con exito!`);
    }

    public eliminarPaciente(): void {
        console.log(`Listado de Pacientes`);
        this.pacientes.forEach(paciente => {
            console.log(`Paciente: "${paciente.getNombre()}". Especie: ${paciente.getEspecie()} ID de dueño: ${paciente.getId()}`)
        })

        if (this.pacientes.length == 0) {
            console.log("¡No hay pacientes cargados!")
            return;
        }
        
        const idDuenio = readlineSync.questionInt(`ID del dueño: `);
        const duenio = this.clientes.find(cliente => cliente.getId() === idDuenio);
        if (!duenio) {
            console.log(`¡ID de duenio no encontrada!`);
            return;
        }

        const pacientesDuenio = this.pacientes.filter(paciente => paciente.getId() === idDuenio);
        if (pacientesDuenio.length === 0) {
            console.log(`El dueño no tiene pacientes registrados.`);
            return;
        }

        console.log(`Pacientes del dueño (ID: ${idDuenio}):`);
        pacientesDuenio.forEach(paciente => console.log(`ID: ${paciente.getId()} - Nombre: ${paciente.getNombre()}`));

        const nombrePaciente = readlineSync.question(`Nombre del paciente a eliminar: `);
        const paciente = pacientesDuenio.find(paciente => paciente.getNombre() === nombrePaciente.toLowerCase());
        if (!paciente) {
            console.log(`¡Nombre del paciente no encontrado!`);
            return;
        }

        this.pacientes = this.pacientes.filter(paciente => paciente.getNombre() !== nombrePaciente);
        console.log(`¡Paciente ${paciente.getNombre()}, ${paciente.getEspecie()}, ID: ${paciente.getId()} eliminada con éxito!`);
    }

    public mostrarPacientes(): void {
        console.log(`Listado de Pacientes`);
        this.pacientes.forEach(paciente => {
            const duenio = paciente.getDuenio().getNombre();
            console.log(`Paciente: "${paciente.getNombre()}". Especie: ${paciente.getEspecie()} ID de dueño: ${paciente.getId()} Dueño: ${duenio}`);
        });
    
        if (this.pacientes.length == 0) {
            console.log("¡No hay pacientes cargados!");
        }
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
        console.log(`Listado de Proveedores`); 
        this.proveedores.forEach(proveedor => {
            console.log(`Proveedor: "${proveedor.getNombre()}". Telefono: ${proveedor.getTelefono()}. ID: ${proveedor.getId()}`)
        })

        if (this.proveedores.length == 0) {
            console.log("¡No hay proveedores cargados!")
            return;
        }

        const id = readlineSync.questionInt(`ID del proveedor que deseas modificar: `);
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
        console.log(`Listado de Proveedores`);
        this.proveedores.forEach(proveedor => {
            console.log(`Proveedor: "${proveedor.getNombre()}". Telefono: ${proveedor.getTelefono()}. ID: ${proveedor.getId()}`)
        })

        if (this.proveedores.length == 0) {
            console.log("¡No hay proveedores cargados!")
            return;
        }

        const id = readlineSync.questionInt(`ID de la veterinaria que deseas eliminar: `)
        const proveedor = this.proveedores.find(proveedor => proveedor.getId() === id);
        if (!proveedor) {
            console.log(`¡ID no encontrada!`);
            return;
        }

        this.clientes = this.clientes.filter(v => v.getId() !== id);
        console.log(`¡Proveedor ${proveedor.getNombre()}, ID: ${proveedor.getId()} eliminado con éxito!`)
    }

    public mostrarProveedores(): void {
        console.log(`Listado de Proveedores`);
        this.proveedores.forEach(proveedor => {
            console.log(`Proveedor: "${proveedor.getNombre()}". Telefono: ${proveedor.getTelefono()}. ID: ${proveedor.getId()}`)
        })

        if (this.proveedores.length == 0) {
            console.log("¡No hay proveedores cargados!")
            return;
        }
    }
}