import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickSvgComponent } from './tick.svg.component';

describe('TickSvgComponent', () => {
  let component: TickSvgComponent;
  let fixture: ComponentFixture<TickSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TickSvgComponent]
    });
    fixture = TestBed.createComponent(TickSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
