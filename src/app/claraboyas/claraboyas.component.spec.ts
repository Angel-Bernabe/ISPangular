import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaraboyasComponent } from './claraboyas.component';

describe('ClaraboyasComponent', () => {
  let component: ClaraboyasComponent;
  let fixture: ComponentFixture<ClaraboyasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaraboyasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaraboyasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
