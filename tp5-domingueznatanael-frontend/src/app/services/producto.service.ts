import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private _http: HttpClient) { }

  public getProductosDestacados(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this._http.get('http://localhost:3000/api/productos',httpOptions);
  }

  public registrarProducto(producto:Producto): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    let body = JSON.stringify(producto);
    return this._http.post('http://localhost:3000/api/productos',body,httpOptions);
  }
}
