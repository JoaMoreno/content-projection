import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseBtn2Component } from './collapse-btn2.component';

describe('CollapseBtn2Component', () => {
  let component: CollapseBtn2Component;
  let fixture: ComponentFixture<CollapseBtn2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseBtn2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseBtn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
