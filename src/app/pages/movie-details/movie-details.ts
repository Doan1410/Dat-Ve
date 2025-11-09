import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOVIES, CINEMAS } from '../../shared/db-data';
import { CommonModule } from '@angular/common';
import { Showtime } from '../../model/moive';
import { Cinema } from '../../model/cinema';

@Component({
  selector: 'app-movie-details',
  imports: [CommonModule],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails implements OnInit {
  movie: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = MOVIES.find(m => m.id === id);
  }


  selectedShowtime?: Showtime;
  selectedCinema?: Cinema;
  seatMap: any[][] = [];



  selectShowtime(showtime: Showtime) {
    this.selectedShowtime = showtime;
    this.selectedCinema = CINEMAS.find(c => c.id === showtime.cinemaId)!;
    this.generateSeats(this.selectedCinema.rows, this.selectedCinema.cols);
  }
  generateSeats(rows: string[], cols: number) {
    this.seatMap = rows.map(row =>
      Array.from({ length: cols }, (_, i) => {
        const col = i + 1;
        let type = 'normal';
        if (['D', 'E', 'F', 'G'].includes(row) && col >= 5 && col <= 10) type = 'vip';
        if (['H', 'I'].includes(row)) type = 'double';
        return { row, number: col, type, status: 'available' };
      })
    );


  }

}
