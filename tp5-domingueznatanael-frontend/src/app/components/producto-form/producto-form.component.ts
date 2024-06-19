import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './producto-form.component.html',
  styleUrl: './producto-form.component.css'
})
export class ProductoFormComponent {

  producto: Producto;

  constructor(private productoService: ProductoService){
    this.producto = new Producto();
  }

  validar(){
    if(this.producto.nombre == "" || this.producto.descripcion == "" || this.producto.imagen == "" || this.producto.precio == 0 || this.producto.stock == 0){
      alert("Debe completar todos los campos");
    }else{
      this.registrarProducto();
    }

  }

  registrarProducto(){
    this.productoService.registrarProducto(this.producto).subscribe(
      (result) => {
        if(result.status == 1){
          alert("Producto registrado correctamente");
        }
      },
      error =>{
        console.log(error);  
      }

    );
  }

}
