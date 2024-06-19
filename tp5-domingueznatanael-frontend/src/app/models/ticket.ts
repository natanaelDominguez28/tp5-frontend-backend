import { Categoria } from "./categoria";
import { Espectador } from "./espectador";

export class Ticket {
    _id!: string;
    dni!: Espectador;
    precioReal!: number;
    tipoEspectador!: Categoria;
    fechaCobro!: Date;
    precioCobrado!: number;
}
