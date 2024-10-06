import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteccionsolarComponent } from './proteccionsolar.component';

describe('ProteccionsolarComponent', () => {
  let component: ProteccionsolarComponent;
  let fixture: ComponentFixture<ProteccionsolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProteccionsolarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProteccionsolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
