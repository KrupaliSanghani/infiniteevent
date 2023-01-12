import { TestBed } from '@angular/core/testing';

import { BookEventTicketService } from './book-event-ticket.service';

describe('BookEventTicketService', () => {
  let service: BookEventTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookEventTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
