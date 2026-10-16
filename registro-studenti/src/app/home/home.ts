import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StudentiService } from '../services/studenti-service';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly studentiService = inject(StudentiService);
}