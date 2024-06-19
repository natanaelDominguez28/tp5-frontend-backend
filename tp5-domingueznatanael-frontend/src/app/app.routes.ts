import { Routes } from '@angular/router';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { ProductosComponent } from './components/productos/productos.component';
import { TransaccionFormComponent } from './components/transaccion-form/transaccion-form.component';
import { TicketsComponent } from './components/tickets/tickets.component';

export const routes: Routes = [
    {path: 'productos', component:ProductosComponent},
    {path: 'producto-form', component:ProductoFormComponent},
    {path: 'transaccion-form', component:TransaccionFormComponent},
    {path: 'transacciones', component:TransaccionesComponent},
    {path: 'ticket', component:TicketsComponent},
    {path: 'ticket-form/:id', component:TicketFormComponent},
];