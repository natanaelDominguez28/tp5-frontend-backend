import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos = Array<Producto>();

  constructor(private productoService: ProductoService){
    this.obtenerProductosDestacados();
  }

  obtenerProductosDestacados(){
    this.productoService.getProductosDestacados().subscribe(
      (result)=>{
        let producto = new Producto();
        Object.assign(producto, result);
        this.productos.push(producto);
        console.log(this.productos);
      },
      error => {
        console.log(error);
      }
    );
  }


}
