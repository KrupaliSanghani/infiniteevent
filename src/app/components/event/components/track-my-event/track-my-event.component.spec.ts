import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackMyEventComponent } from './track-my-event.component';

describe('TrackMyEventComponent', () => {
  let component: TrackMyEventComponent;
  let fixture: ComponentFixture<TrackMyEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackMyEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackMyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
