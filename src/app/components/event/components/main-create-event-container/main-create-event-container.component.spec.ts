import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCreateEventContainerComponent } from './main-create-event-container.component';

describe('MainCreateEventContainerComponent', () => {
  let component: MainCreateEventContainerComponent;
  let fixture: ComponentFixture<MainCreateEventContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCreateEventContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCreateEventContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
