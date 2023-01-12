import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterEventCreateComponent } from './after-event-create.component';

describe('AfterEventCreateComponent', () => {
  let component: AfterEventCreateComponent;
  let fixture: ComponentFixture<AfterEventCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterEventCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterEventCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
