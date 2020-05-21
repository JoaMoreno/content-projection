import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRepeatComponent } from './no-repeat.component';

describe('NoRepeatComponent', () => {
  let component: NoRepeatComponent;
  let fixture: ComponentFixture<NoRepeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoRepeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
