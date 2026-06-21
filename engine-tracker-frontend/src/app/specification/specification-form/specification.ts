import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Specification {
  id: number;
  certification_code: string;
  max_temperature_celsius: number;
  last_calibrated: string;
}

@Injectable({
  providedIn: 'root',
})
export class SpecificationService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8000/api/specifications/';

  addSpecification(newSpecData: { certification_code: string; max_temperature_celsius: number; last_calibrated: string }) {
    this.http.post<Specification>(this.apiUrl, newSpecData).subscribe({
      next: (createdSpec) => {
        console.log('Specification created:', createdSpec);
      },
      error: (err) => console.error('Błąd zapisu specyfikacji w Django:', err)
    });
  }
}
