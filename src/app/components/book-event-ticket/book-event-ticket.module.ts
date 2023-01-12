import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookEventTicketRoutingModule } from './book-event-ticket-routing.module';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { PayEventTicketComponent } from './components/pay-event-ticket/pay-event-ticket.component';
import { BookingConfirmedComponent } from './components/booking-confirmed/booking-confirmed.component';


@NgModule({
  declarations: [
    EventDetailsComponent,
    PayEventTicketComponent,
    BookingConfirmedComponent
  ],
  imports: [
    CommonModule,
    BookEventTicketRoutingModule
  ]
})
export class BookEventTicketModule { }
