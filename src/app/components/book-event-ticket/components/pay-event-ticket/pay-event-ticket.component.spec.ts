import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayEventTicketComponent } from './pay-event-ticket.component';

describe('PayEventTicketComponent', () => {
  let component: PayEventTicketComponent;
  let fixture: ComponentFixture<PayEventTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayEventTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayEventTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
