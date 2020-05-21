import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionCardLiteComponent } from './description-card-lite.component';

describe('DescriptionCardLiteComponent', () => {
  let component: DescriptionCardLiteComponent;
  let fixture: ComponentFixture<DescriptionCardLiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionCardLiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionCardLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
