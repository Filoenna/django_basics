import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificationForm } from './specification-form';

describe('SpecificationForm', () => {
  let component: SpecificationForm;
  let fixture: ComponentFixture<SpecificationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificationForm],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecificationForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
