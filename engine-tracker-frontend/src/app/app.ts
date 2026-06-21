import { Component, OnInit, inject } from '@angular/core'; // <-- Importujemy signal
import { PartService } from './part/part';
import { PartForm } from './part/part-form/part-form';
import { SpecificationForm } from './specification/specification-form/specification-form';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PartForm, SpecificationForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private partService = inject(PartService);
 
  parts = this.partService.parts; // <-- Używamy sygnału z serwisu

  

  ngOnInit() {
    this.partService.fetchParts(); // Pobieramy dane przy inicjalizacji
  }

  
}