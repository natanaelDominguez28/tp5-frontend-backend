import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private _http:HttpClient) { }

  public createTicket(ticket: Ticket):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    let body = JSON.stringify(ticket);

    return this._http.post('http://localhost:3000/api/ticket',body, httpOptions);
  }

  public getTickets():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this._http.get('http://localhost:3000/api/ticket',httpOptions);
  }

  public getTicketCategoria(categoria:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this._http.get('http://localhost:3000/api/ticket'+categoria,httpOptions);
  }

  public actualizarTicket(ticket: Ticket):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    let body = JSON.stringify(ticket);
    return this._http.put('http://localhost:3000/api/ticket/'+ticket._id,body, httpOptions);
  }

  public deleteTicket(id:string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this._http.delete('http://127.0.0.1:3000/api/ticket/'+id, httpOption);
  }

}
