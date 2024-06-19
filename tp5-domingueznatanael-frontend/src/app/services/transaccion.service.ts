import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private _http:HttpClient) { }

  public getCurrencies():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'b8311b8596mshb9fc7545a5b9316p17b051jsn70957545d35c',
        'x-rapidapi-host': 'currency-converter18.p.rapidapi.com'
      })
    }
    return this._http.get('https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies',httpOptions);
  }

  public getConversion(origen:string, destino:string, monto:number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'b8311b8596mshb9fc7545a5b9316p17b051jsn70957545d35c',
        'x-rapidapi-host': 'currency-converter18.p.rapidapi.com'
      }),
      params: new HttpParams()
      .set('from',origen)
      .set('to',destino)
      .set('amount',monto)
    }
  
    return this._http.get('https://currency-converter18.p.rapidapi.com/api/v1/convert',httpOptions);
  }

  public createTransaccion(conversor:Transaccion):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    let body = JSON.stringify(conversor);
    return this._http.post('http://localhost:3000/api/transaccion',body, httpOptions);
  }

  public getTransacciones():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this._http.get('http://localhost:3000/api/transaccion',httpOptions);
  }

  public getTransaccionesPorOrigenYDestino(origen:string, destino:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this._http.get('http://localhost:3000/api/transaccion/divisas'+'?monedaOrigen='+origen+'&monedaDestino='+destino,httpOptions);
  }
}
