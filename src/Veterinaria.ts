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

    constructor(nombre: string, direccion: string, telefono: number) {
        super(nombre.toLowerCase(), telefono);
        this.direccion = direccion.toLowerCase();
    }

    public getDireccion(): string {
        return this.direccion
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    public getClientes (): Cliente[] {
        return this.clientes;
    }

    //======= GESTION CLIENTES =======
    public agregarCliente(): void {
        let nombre = readlineSync.question(`Nombre: `);

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

        let cliente: Cliente = new Cliente(nombre, telefono);
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

        let id = readlineSync.questionInt(`ID del cliente que deseas modificar: `);
        let cliente = this.clientes.find(cliente => cliente.getId() === id);
        if (!cliente) {
            console.log(`¡ID no encontrada!`);
            return;
        }

        let nuevoNombre = readlineSync.question(`Nuevo nombre: `);

        let nuevoTelefono: number;
        let telefonoValido = false; 
        
        while (!telefonoValido) {
            nuevoTelefono = readlineSync.questionInt(`Nuevo Telefono: `);
            
            if (this.verificarTelefono(nuevoTelefono)) {
                telefonoValido = true;
            } else {
                console.error("Número de teléfono inválido. Debe tener exactamente 10 dígitos. Inténtalo de nuevo.");
            }
        }

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

        let id = readlineSync.questionInt(`ID del cliente que deseas eliminar: `)
        let cliente = this.clientes.find(cliente => cliente.getId() === id);
        if (!cliente) {
            console.log(`¡ID no encontrada!`);
            return;
        }

        this.clientes = this.clientes.filter(cliente => cliente.getId() !== id);
        console.log(`¡Cliente ${cliente.getNombre()}, ID: ${cliente.getId()} eliminada con éxito!`);
    }

    public mostrarClientes(): void {
        console.log(`Listado de Clientes`)
        this.clientes.forEach(cliente => {
            let mascotas = cliente.getMascotas().map(mascota => mascota.getNombre()).join(', ');
            console.log(`Cliente: "${cliente.getNombre()}". VIP: "${cliente.getEsVip()}". Telefono: ${cliente.getTelefono()} ID: ${cliente.getId()}. Mascotas: ${mascotas}`);
        });
    
        if (this.clientes.length == 0) {
            console.log("¡No hay clientes cargados!");
        }
    }

    public getCantClientes(): number {
        return this.clientes.length;
    }

    //======= GESTION PACIENTES =======
    public agregarPaciente(): void {
        let nombre = readlineSync.question(`Nombre: `);
        let especie = readlineSync.question("Especie: ");
        let idDuenio = readlineSync.questionInt(`ID del duenio: `);
    
        let duenio = this.clientes.find(cliente => cliente.getId() === idDuenio);
        if (!duenio) {
            console.log(`¡ID no encontrada!`);
            return;
        }
        duenio.incrementarVisitas();
        let paciente: Paciente = new Paciente(nombre, especie, duenio, duenio.getTelefono());
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

        let idDuenio = readlineSync.questionInt(`ID del dueño: `);
        let duenio = this.clientes.find(cliente => cliente.getId() === idDuenio);
        if (!duenio) {
            console.log(`¡ID de dueño no encontrada!`);
            return;
        }

        let pacientesDuenio = this.pacientes.filter(paciente => paciente.getId() === idDuenio);
        if (pacientesDuenio.length === 0) {
            console.log(`El dueño no tiene pacientes registrados.`);
            return;
        }

        console.log(`Pacientes del dueño (ID: ${idDuenio}):`);
        pacientesDuenio.forEach(paciente => console.log(`ID: ${paciente.getId()} - Nombre: ${paciente.getNombre()}`));

        let nombrePaciente = readlineSync.question(`Nombre del paciente a modificar: `);
        let paciente = pacientesDuenio.find(paciente => paciente.getNombre() === nombrePaciente.toLowerCase());
        if (!paciente) {
            console.log(`¡Nombre del paciente no encontrado!`);
            return;
        }

        let nuevoNombre = readlineSync.question(`Nuevo nombre: `);
        let nuevaEspecie = readlineSync.question(`Nueva Especie: `);
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
        
        let idDuenio = readlineSync.questionInt(`ID del duenio: `);
        let duenio = this.clientes.find(cliente => cliente.getId() === idDuenio);
        if (!duenio) {
            console.log(`¡ID de duenio no encontrada!`);
            return;
        }

        let pacientesDuenio = this.pacientes.filter(paciente => paciente.getId() === idDuenio);
        if (pacientesDuenio.length === 0) {
            console.log(`El duenio no tiene pacientes registrados.`);
            return;
        }

        console.log(`Pacientes del dueño (ID: ${idDuenio}):`);
        pacientesDuenio.forEach(paciente => console.log(`ID: ${paciente.getId()} - Nombre: ${paciente.getNombre()}`));

        let nombrePaciente = readlineSync.question(`Nombre del paciente a eliminar: `);
        let paciente = pacientesDuenio.find(paciente => paciente.getNombre() === nombrePaciente.toLowerCase());
        if (!paciente) {
            console.log(`¡Nombre del paciente no encontrado!`);
            return;
        }

        duenio.eliminarMascota(paciente);
        this.pacientes = this.pacientes.filter(paciente => paciente.getNombre() !== nombrePaciente);
        console.log(`¡Paciente ${paciente.getNombre()}, ${paciente.getEspecie()}, ID: ${paciente.getId()} eliminada con éxito!`);
    }

    public mostrarPacientes(): void {
        console.log(`Listado de Pacientes`);
        this.pacientes.forEach(paciente => {
            let duenio = paciente.getDuenio().getNombre();
            console.log(`Paciente: "${paciente.getNombre()}". Especie: ${paciente.getEspecie()} ID de dueño: ${paciente.getId()} Dueño: ${duenio}`);
        });
    
        if (this.pacientes.length == 0) {
            console.log("¡No hay pacientes cargados!");
        }
    }

    public getCantPacientes(): number {
        return this.pacientes.length;
    }

    //======= GESTION PROVEEDORES =======
    public agregarProveedor(): void {
        let nombre = readlineSync.question(`Nombre: `);
        let suministro = readlineSync.question(`Suministro que provee: `);

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

        let proveedor: Proveedor = new Proveedor(nombre, suministro, telefono);
        this.proveedores.push(proveedor);
        console.log(`¡Proveedor ${proveedor.getNombre()} agregado con exito, su ID es: ${proveedor.getId()}!`);
    }

    public modificarProveedor(): void {
        console.log(`Listado de Proveedores`); 
        this.proveedores.forEach(proveedor => {
            console.log(`Proveedor: "${proveedor.getNombre()}". Telefono: ${proveedor.getTelefono()}. Suministro: ${proveedor.getSuministro()}. ID: ${proveedor.getId()}`)
        })

        if (this.proveedores.length == 0) {
            console.log("¡No hay proveedores cargados!")
            return;
        }

        let id = readlineSync.questionInt(`ID del proveedor que deseas modificar: `);
        let proveedor = this.proveedores.find(proveedor => proveedor.getId() === id);
        if (!proveedor) {
            console.log(`¡ID no encontrada!`);
            return;
        }
        let nuevoNombre = readlineSync.question(`Nuevo nombre: `);
        let nuevoSuministro = readlineSync.question(`Nuevo suministro que provee: `);

        let nuevoTelefono: number;
        let telefonoValido = false; 
        
        while (!telefonoValido) {
            nuevoTelefono = readlineSync.questionInt(`Nuevo Telefono: `);
            
            if (this.verificarTelefono(nuevoTelefono)) {
                telefonoValido = true;
            } else {
                console.error("Número de teléfono inválido. Debe tener exactamente 10 dígitos. Inténtalo de nuevo.");
            }
        }

        proveedor.setNombre(nuevoNombre);
        proveedor.setTelefono(nuevoTelefono);
        proveedor.setSuministro(nuevoSuministro)
        console.log(`¡Proveedor ${proveedor.getNombre()}, ID: ${proveedor.getId()} modificado con exito!`);
    }

    public eliminarProveedor(): void {
        console.log(`Listado de Proveedores`);
        this.proveedores.forEach(proveedor => {
            console.log(`Proveedor: "${proveedor.getNombre()}". Telefono: ${proveedor.getTelefono()}. Suministro: ${proveedor.getSuministro()}. ID: ${proveedor.getId()}`)
        })

        if (this.proveedores.length == 0) {
            console.log("¡No hay proveedores cargados!")
            return;
        }

        let id = readlineSync.questionInt(`ID de la veterinaria que deseas eliminar: `)
        let proveedor = this.proveedores.find(proveedor => proveedor.getId() === id);
        if (!proveedor) {
            console.log(`¡ID no encontrada!`);
            return;
        }

        this.proveedores = this.proveedores.filter(proveedor => proveedor.getId() !== id);
        console.log(`¡Proveedor ${proveedor.getNombre()}, ID: ${proveedor.getId()} eliminado con éxito!`)
    }

    public mostrarProveedores(): void {
        console.log(`Listado de Proveedores`);
        this.proveedores.forEach(proveedor => {
            console.log(`Proveedor: "${proveedor.getNombre()}". Telefono: ${proveedor.getTelefono()}. Suministro: ${proveedor.getSuministro()}. ID: ${proveedor.getId()}`)
        })

        if (this.proveedores.length == 0) {
            console.log("¡No hay proveedores cargados!")
            return;
        }
    }

    public getCantProveedores(): number {
        return this.proveedores.length;
    }
}