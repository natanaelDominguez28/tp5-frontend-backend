import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransaccionService } from '../../services/transaccion.service';
import { Transaccion } from '../../models/transaccion';

@Component({
  selector: 'app-transacciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transacciones.component.html',
  styleUrl: './transacciones.component.css'
})
export class TransaccionesComponent {
  origen!:string;
  destino!:string;

  transacciones = [];
  transaccionesFiltradas = Array<Transaccion>();

  constructor(private transaccionService:TransaccionService){
    this.transaccionesFiltradas = new Array<Transaccion>();
   }

  //get de todas las transacciones registradas
  obtenerTransacciones(){
    this.transaccionService.getTransacciones().subscribe(
      (data) => {
        this.transacciones = data;
        console.log(data);
      }
    );
  }

  //get de transacciones por moneda de origen y destino
  obtenerTransaccionesPorDivisas(){
    this.transaccionService.getTransaccionesPorOrigenYDestino(this.origen, this.destino).subscribe(
      (data) => {
        this.transaccionesFiltradas = data;
        console.log(this.transaccionesFiltradas);
      },
      error => {
        console.log(error);
      }
    );
  }

}
