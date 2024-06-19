import { Component } from '@angular/core';
import { Transaccion } from '../../models/transaccion';
import { TransaccionService } from '../../services/transaccion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaccion-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaccion-form.component.html',
  styleUrl: './transaccion-form.component.css'
})
export class TransaccionFormComponent {
  conversor!: Transaccion;
  origen!:string;
  destino!:string;
  monto!:number;
  resultado!:number;

  monedas = [{
    symbol: '',
    name: ''
  }];

  constructor(private conversorService: TransaccionService) { 
    
  }


  obtenerMonedas(){
    this.conversorService.getCurrencies().subscribe(
      (data) => {
        this.monedas = data;
        console.log(this.monedas);
      },
      error => {
        console.log(error);
      }
    );
  }

  convertir(){
    this.conversorService.getConversion(this.origen,
      this.destino,
      this.monto).subscribe(
        (result) => {
          console.log(result);
          this.resultado = result.result.convertedAmount;
          this.conversor = new Transaccion();
          Object.assign(this.conversor,result);
          this.crearTransaccion(this.conversor);
        }
      );
  }

  crearTransaccion(conversor:Transaccion) {
    this.conversorService.createTransaccion(conversor).subscribe(
      (result) => {
        if(result.status == 1){
          alert("Transacción registrada correctamente");
        }
      },
      error =>{
        console.log(error);
        
      }
    );
  }

}
