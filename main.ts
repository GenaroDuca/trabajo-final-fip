import { Veterinaria } from "./veterinarias"
import { Cliente } from "./clientes";
import { Paciente } from "./pacientes";
import { Proveedor } from "./proveedores";

const rinconPeludo = new Veterinaria("Rincon Peludo","Lavalle 2456");
console.log(rinconPeludo);

const cliente = new Cliente("Mario",2284234567);
console.log(cliente);

const paciente = new Paciente ("Coco","exótica");
console.log(paciente);

const proveedor = new Proveedor ("Jorge",2284567423);
console.log(proveedor);
