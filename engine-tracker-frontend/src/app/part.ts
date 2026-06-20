import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Part {
  id: number;
  name: string;
  serial_number: string;
  specification: any;
  assigned_engineers: any[];
}

@Injectable({
  providedIn: 'root'
})
export class PartService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8000/api/parts/';

  parts = signal<Part[]>([]);

  fetchParts() {
    this.http.get<Part[]>(this.apiUrl).subscribe({
      next: (data) => this.parts.set(data),
      error: (err) => console.error('Error fetching parts:', err)
    });
  }

  addPart(newPartData: { name: string; serial_number: string; specification: number | null }) {
    
    // Tworzymy pełny obiekt, którego żąda Django
    const fullPayload = {
      ...newPartData,
      assigned_engineers: [9] // <--- Dorzucamy pustą listę, żeby DRF był szczęśliwy
    };

    this.http.post<Part>(this.apiUrl, fullPayload).subscribe({
      next: (createdPart) => {
        this.parts.update(currentParts => [...currentParts, createdPart]);
      },
      error: (err) => console.error('Błąd zapisu części w Django:', err)
    });
  }
}