import { Veterinaria } from "./veterinaria"
import { Cliente } from "./cliente";
import { Paciente } from "./paciente";
import { Proveedor } from "./proveedor";
import { RedVeterinarias } from "./redVeterinarias";

const redVeterinarias = new RedVeterinarias();

const rinconPeludo = new Veterinaria("Rincon Peludo", 2284762333, "Lavalle 2456");
console.log(rinconPeludo);

const cliente = new Cliente("Mario", 2284234567);
console.log(cliente);

const paciente = new Paciente("Coco", "exótica");
console.log(paciente);

const proveedor = new Proveedor("Jorge", 2284567423);
console.log(proveedor);
