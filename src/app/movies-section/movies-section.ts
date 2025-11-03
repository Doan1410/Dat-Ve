import { Component, Input } from '@angular/core';
import { Movie } from '../model/moive';

@Component({
  selector: 'app-movies-section',
  imports: [],
  standalone: true,
  templateUrl: './movies-section.html',
  styleUrl: './movies-section.css',
})
export class MoviesSection {
  
  @Input({required: true}) movie!: Movie;

}
