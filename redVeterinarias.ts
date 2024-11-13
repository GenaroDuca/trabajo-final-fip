import { Cliente } from "./cliente";
import { Paciente } from "./paciente";
import { Proveedor } from "./proveedor";
import { Veterinaria } from "./veterinaria";

export class RedVeterinarias {
    private sucursales: Veterinaria[] = [];
    private clientes: Cliente[] = [];
    private proveedores: Proveedor[] = [];
    private pacientes: Paciente[] = [];
    private identificadores: number[] = [];

    // MËTODOS
    public agregarCliente(nombre: string, direccion: string, telefono: number) {
        let nuevoCliente: Cliente = new Cliente(nombre, direccion, telefono);
        this.clientes.push(nuevoCliente);
    }

    public mostrarClientes() {
        if (this.clientes.length == 0) {
            console.log(`-----------------------------\n¡No hay clientes cargadas!\n-----------------------------`)
        } else {
            let index = 1;
            this.clientes.forEach(dato => {
                console.log(`-----------------------------\nCliente ${index}\nNombre: ${dato.getNombre()}\nDireccion: ${dato.getDireccion()}\nTelefono: ${dato.getTelefono()}\n-----------------------------`)
                index++;
            });
        }
    }

    public agregarProveedores(nombre: string, direccion: string, telefono: number) {
        let nuevoProvedor: Proveedor = new Proveedor(nombre, direccion, telefono);
        this.proveedores.push(nuevoProvedor);
    }

    public mostrarProveedores() {
        if (this.proveedores.length == 0) {
            console.log(`-----------------------------\n¡No hay proveedores cargadas!\n-----------------------------`)
        } else {
            let index = 1;
            this.proveedores.forEach(dato => {
                console.log(`-----------------------------\Proveedor ${index}\nNombre: ${dato.getNombre()}\nDireccion: ${dato.getDireccion()}\nTelefono: ${dato.getTelefono()}\n-----------------------------`)
                index++;
            });
        }
    }

    public agregarPaciente(nombre: string, especie: string) {
        let nuevoCliente: Paciente = new Paciente (nombre, especie);
        this.clientes.push(nuevoCliente);
    }

    public mostrarPaciente() {
        if (this.pacientes.length == 0) {
            console.log(`-----------------------------\n¡No hay pacientes cargadas!\n-----------------------------`)
        } else {
            let index = 1;
            this.pacientes.forEach(dato => {
                console.log(`-----------------------------\nPaciente ${index}\nNombre: ${dato.getNombre()}\nEspecie: ${dato.getEspecie()}\n-----------------------------`)
                index++;
            });
        }
    }

    public agregarSucursal(nombre: string, direccion: string, telefono: number) {
        let nuevaSucursal: Veterinaria = new Veterinaria(nombre, direccion, telefono);
        this.sucursales.push(nuevaSucursal);
    }

    public mostrarSucursales() {
        if (this.sucursales.length == 0) {
            console.log(`-----------------------------\n¡No hay sucursales cargadas!\n-----------------------------`)
        } else {
            let index = 1;
            this.sucursales.forEach(dato => {
                console.log(`-----------------------------\nSucursal ${index}\nDireccion: ${dato.getDireccion()}\nTelefono: ${dato.getTelefono()}\n-----------------------------`)
                index++;
            });
        }
    }
}