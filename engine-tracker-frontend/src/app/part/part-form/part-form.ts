import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { PartService } from '../part';
@Component({
  selector: 'app-part-form',
  imports: [ReactiveFormsModule],
  templateUrl: './part-form.html',
  styleUrl: './part-form.css',
})
export class PartForm {
  private partService = inject(PartService);

  partForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    serial_number: new FormControl('', [Validators.required]),
    specification: new FormControl<number|null>(null, [Validators.required]),
  });

  onSubmit() {
    if (this.partForm.valid) {
      const formData = this.partForm.value;
      
      this.partService.addPart({
        name: formData.name!,
        serial_number: formData.serial_number!,
        // Jeśli pole jest puste, ślemy null, jeśli nie - liczbę
        specification: formData.specification ? Number(formData.specification) : null
      });

      this.partForm.reset();
    }
  }
}
