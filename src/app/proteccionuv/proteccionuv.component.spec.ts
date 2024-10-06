import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteccionuvComponent } from './proteccionuv.component';

describe('ProteccionuvComponent', () => {
  let component: ProteccionuvComponent;
  let fixture: ComponentFixture<ProteccionuvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProteccionuvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProteccionuvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
