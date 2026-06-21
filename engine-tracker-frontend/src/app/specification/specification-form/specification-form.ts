import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { PartService } from '../../part/part';

@Component({
  selector: 'app-specification-form',
  imports: [ReactiveFormsModule],
  templateUrl: './specification-form.html',
  styleUrl: './specification-form.css',
})
export class SpecificationForm {
   private partService = inject(PartService);

  specificationForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    serial_number: new FormControl('', [Validators.required]),
    specification: new FormControl<number|null>(null, [Validators.required]),
  });

  onSubmit() {
    if (this.specificationForm.valid) {
      const formData = this.specificationForm.value;
      
      this.partService.addPart({
        name: formData.name!,
        serial_number: formData.serial_number!,
        // Jeśli pole jest puste, ślemy null, jeśli nie - liczbę
        specification: formData.specification ? Number(formData.specification) : null
      });

      this.specificationForm.reset();
    }
  }

}
