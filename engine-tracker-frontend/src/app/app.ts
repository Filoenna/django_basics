import { Component, OnInit, inject } from '@angular/core'; // <-- Importujemy signal
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { PartService } from './part';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private partService = inject(PartService);
 
  parts = this.partService.parts; // <-- Używamy sygnału z serwisu

  partForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    serial_number: new FormControl('', [Validators.required]),
    specification: new FormControl<number|null>(null, [Validators.required]),
  });

  ngOnInit() {
    this.partService.fetchParts(); // Pobieramy dane przy inicjalizacji
  }

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