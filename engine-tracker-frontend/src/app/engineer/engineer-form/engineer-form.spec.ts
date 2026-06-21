import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerForm } from './engineer-form';

describe('EngineerForm', () => {
  let component: EngineerForm;
  let fixture: ComponentFixture<EngineerForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngineerForm],
    }).compileComponents();

    fixture = TestBed.createComponent(EngineerForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
