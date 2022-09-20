import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosAddComponent } from './eventos-add.component';

describe('EventosAddComponent', () => {
  let component: EventosAddComponent;
  let fixture: ComponentFixture<EventosAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
