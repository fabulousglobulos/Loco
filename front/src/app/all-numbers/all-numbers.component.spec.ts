import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNumbersComponent } from './all-numbers.component';

describe('AllNumbersComponent', () => {
  let component: AllNumbersComponent;
  let fixture: ComponentFixture<AllNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
