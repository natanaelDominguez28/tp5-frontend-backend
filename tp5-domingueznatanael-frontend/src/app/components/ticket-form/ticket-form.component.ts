import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '../../models/ticket';
import { TicketService } from '../../services/ticket.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent {
  ticket:Ticket;
  accion:string = 'new';

  constructor(private activatedRoute: ActivatedRoute, 
    private ticketService:TicketService,
    private router:Router) {
    this.ticket = new Ticket();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.activatedRoute.params.subscribe((params) => {
      if (params['id'] == '0') {
        this.accion = 'new';
      } else {
        this.accion = 'update';
        this.cargarTicket(params['id']);
      }
    });
  }

  registrarTicket(){
    //this.ticketService.addTicket(this.ticket);
    this.ticketService.createTicket(this.ticket).subscribe(
      (result)=>{
        if(result.status == 1){
          alert("Ticket registrado correctamente");
        }
        else{
          alert("No se pudo registrar el ticket");
        }
      }
    );
    this.router.navigate(['ticket']);    
    //this.ticket.precioCobrado= this.cambio();
}
cargarTicket(id: string) {
  //this.ticket = this.ticketService.getTicketById(id);
  this.ticketService.getTickets().subscribe(
    (result)=>{
      this.ticket = result;
      console.log(this.ticket);
    }
  );
}
modificarTicket(ticket:Ticket){
  //this.ticketService.updateTicket(ticket);
  this.ticketService.actualizarTicket(ticket).subscribe(
    (result)=>{
      if(result.status == 1){
        alert("Ticket modificado correctamente");
      }
      else{
        alert("No se pudo modificar el ticket");
      }
    }
  );
  this.router.navigate(['ticket']);
}

volverAtras(){
  this.router.navigate(['ticket']);
}

/*cambio():number{
  let aux = 0;
  let pc: number;

  if (this.ticket.tipoEspectador == "l") {
    aux = (this.ticket.precioReal * 20) / 100;
    pc = this.ticket.precioReal - aux;
  }
  else {
    pc = this.ticket.precioReal;
  }
  return pc;
}*/

}
