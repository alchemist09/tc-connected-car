import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPinComponent } from './send-pin.component';

describe('SendPinComponent', () => {
  let component: SendPinComponent;
  let fixture: ComponentFixture<SendPinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendPinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
