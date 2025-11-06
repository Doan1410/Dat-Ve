import { Component, Input } from '@angular/core';
import { Movie } from '../../model/moive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-section',
  imports: [],
  standalone: true,
  templateUrl: './movies-section.html',
  styleUrl: './movies-section.css',
})
export class MoviesSection {
  
  @Input({required: true}) movie!: Movie;

  constructor(private router: Router) {}
  goToDetail() {
    // Điều hướng sang /movie/:id
    this.router.navigate(['/movie', this.movie.id]);
  }
}
