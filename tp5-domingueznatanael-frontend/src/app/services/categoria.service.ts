import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private _http:HttpClient) { }

  public getCategorias():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this._http.get('http://localhost:3000/api/categoria',httpOptions);
  }

  public createCategoria(categoria:Categoria):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    let body = JSON.stringify(categoria);

    return this._http.post('http://localhost:3000/api/categoria',body, httpOptions);
  }

  public getCategoria(categoria:Categoria):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this._http.get('http://localhost:3000/api/categoria/'+categoria._id,httpOptions);
  }
}
