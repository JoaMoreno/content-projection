import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPayCardComponent } from './button-pay-card.component';

describe('ButtonPayCardComponent', () => {
  let component: ButtonPayCardComponent;
  let fixture: ComponentFixture<ButtonPayCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonPayCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
