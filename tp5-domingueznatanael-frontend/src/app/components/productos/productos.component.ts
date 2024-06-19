import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos = [];

  constructor(private productoService: ProductoService){
    this.obtenerProductosDestacados();
  }



  obtenerProductosDestacados(){
    this.productoService.getProductosDestacados().subscribe(
      (result)=>{
        console.log(result);
        
        this.productos = result;
      },
      error => {
        console.log(error);
      }
    );
  }


}
