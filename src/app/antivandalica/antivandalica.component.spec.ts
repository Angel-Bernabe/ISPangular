import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntivandalicaComponent } from './antivandalica.component';

describe('AntivandalicaComponent', () => {
  let component: AntivandalicaComponent;
  let fixture: ComponentFixture<AntivandalicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntivandalicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntivandalicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
