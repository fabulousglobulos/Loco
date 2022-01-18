import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroComplementaireComponent } from './numero-complementaire.component';

describe('NumeroComplementaireComponent', () => {
  let component: NumeroComplementaireComponent;
  let fixture: ComponentFixture<NumeroComplementaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumeroComplementaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroComplementaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
