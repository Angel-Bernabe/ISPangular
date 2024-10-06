import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomocionComponent } from './automocion.component';

describe('AutomocionComponent', () => {
  let component: AutomocionComponent;
  let fixture: ComponentFixture<AutomocionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomocionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
