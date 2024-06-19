import { Component } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TicketService } from '../../services/ticket.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  ticket!:Ticket;
  tickets!:Array<Ticket>;
  mod:boolean=true;
  contl=0;
  montl=0;
  conte=0;
  monte=0;
  montoTotal=0;

  constructor(private ticketService:TicketService, private router:Router) {
    this.tickets = new Array<Ticket>();
    this.cargarTickets();
    this.sumarMonto();
  }

  cargarTickets(){
    //this.tickets = this.ticketService.getTickets();
    this.ticketService.getTickets().subscribe(
      (data) => {
        this.tickets = data;
        console.log(this.tickets);
      },
      error => {
        console.log(error);
      }
    );
  }

  agregarTicket(){
    this.router.navigate(['ticket-form', 0]);
  }

  modificarTicket(ticket:Ticket){
    this.router.navigate(['ticket-form' , ticket._id])
  }

  eliminarTicket(ticket:Ticket){
    //this.ticketService.deleteTicket(ticket);
    this.router.navigate(['ticket']);
  }

  public sumarMonto() {
    this.contl=0;
    this.montl=0;
    this.conte=0;
    this.monte=0;
    this.montoTotal=0;
    /*for(let i=0;i<this.ticketService.getTickets().length;i++)
    {
      if (this.ticketService.getTickets()[i].tipoEspectador == "l") {
        this.contl++;
        this.montl = this.montl + this.ticketService.getTickets()[i].precioCobrado;
      }
      else if (this.ticketService.getTickets()[i].tipoEspectador == "e") {
        this.conte++;
        this.monte = this.monte + this.ticketService.getTickets()[i].precioCobrado;
      }
      
    }*/
    this.montoTotal = this.montoTotal + this.montl + this.monte;
}

}
