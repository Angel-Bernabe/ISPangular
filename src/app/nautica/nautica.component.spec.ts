import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NauticaComponent } from './nautica.component';

describe('NauticaComponent', () => {
  let component: NauticaComponent;
  let fixture: ComponentFixture<NauticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NauticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NauticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
