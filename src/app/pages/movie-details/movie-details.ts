import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOVIES } from '../../shared/db-data';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-movie-details',
  imports: [CommonModule],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails implements OnInit {
  movie: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = MOVIES.find(m => m.id === id);
  }
}
