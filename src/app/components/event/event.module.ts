import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.moule';
import { EventTypeComponent } from './components/event-type/event-type.component';
import { MainCreateEventContainerComponent } from './components/main-create-event-container/main-create-event-container.component';
import { EventTicketComponent } from './components/event-ticket/event-ticket.component';
import { OrganizerInfoComponent } from './components/organizer-info/organizer-info.component';
import { SettingComponent } from './components/setting/setting.component';
import { AfterEventCreateComponent } from './components/after-event-create/after-event-create.component';
import { TicketPreviewComponent } from './components/ticket-preview/ticket-preview.component';
import { TrackMyEventComponent } from './components/track-my-event/track-my-event.component';
import { ListEventComponent } from './components/list-event/list-event.component';


@NgModule({
  declarations: [EventTypeComponent,
    MainCreateEventContainerComponent,
    EventTicketComponent,
    OrganizerInfoComponent,
    SettingComponent,
    AfterEventCreateComponent,
    TicketPreviewComponent,
    TrackMyEventComponent,
    ListEventComponent],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule { }
