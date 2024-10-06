import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulidoComponent } from './pulido.component';

describe('PulidoComponent', () => {
  let component: PulidoComponent;
  let fixture: ComponentFixture<PulidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PulidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
