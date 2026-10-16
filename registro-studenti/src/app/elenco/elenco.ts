import { Component, inject } from '@angular/core';
import { StudentiService } from '../services/studenti-service';

@Component({
  imports: [],
  selector: 'app-elenco',
  templateUrl: './elenco.html',
  styleUrl: './elenco.css',
})
export class Elenco {
  private readonly studentiService = inject(StudentiService);
  readonly studenti = this.studentiService.studenti;

  rimuovi(id: number): void {
    this.studentiService.rimuovi(id);
  }
}