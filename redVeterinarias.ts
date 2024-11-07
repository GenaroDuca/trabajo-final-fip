import { Cliente } from "./cliente";
import { Paciente } from "./paciente";
import { Proveedor } from "./proveedor";
import { Veterinaria } from "./veterinaria";

export class RedVeterinarias {
    sucursales: Veterinaria[] = [];
    clientes: Cliente[] = [];
    proveedores: Proveedor[] = [];
    pacientes: Paciente[] = [];
    identificadores: number[] = [];

    public agregarCliente (){
    }

    public agregarProveedor (){
    }

    public agregarPaciente (){
    }
}