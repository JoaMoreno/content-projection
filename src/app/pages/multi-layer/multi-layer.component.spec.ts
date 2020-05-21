import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLayerComponent } from './multi-layer.component';

describe('MultiLayerComponent', () => {
  let component: MultiLayerComponent;
  let fixture: ComponentFixture<MultiLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
