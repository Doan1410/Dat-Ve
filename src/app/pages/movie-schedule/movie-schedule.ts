import { Component,OnInit } from '@angular/core';
import { MOVIES } from '../../shared/db-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-schedule',
  imports: [CommonModule],
  templateUrl: './movie-schedule.html',
  styleUrl: './movie-schedule.css',
})
export class MovieSchedule implements OnInit {
  movies = MOVIES;
// Tạo 7 ngày gần nhất (từ hôm nay trở về trước)
  dates: string[] = this.generateDateRange(7);
  selectedDate = this.dates[0];
  filteredMovies: any[] = [];

  ngOnInit() {
    this.filterMovies();
  }

  // Tạo mảng ngày: YYYY-MM-DD
  private generateDateRange(days: number): string[] {
    const dates: string[] = [];
    const today = new Date();
    for (let i = 0; i < days; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      dates.push(this.formatDate(date));
    }
    return dates.reverse(); // cũ → mới
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  selectDate(date: string) {
    this.selectedDate = date;
    this.filterMovies();
  }

  filterMovies() {
    this.filteredMovies = this.movies.filter(movie => {
      if (movie.state === 'sắp chiếu') return false;

      const start = movie.date;
      const end = movie.endDate || start;
      return this.selectedDate >= start && this.selectedDate <= end;
    });
  }

  // Hiển thị ngày đẹp: Hôm nay / T2, 7/11 / ...
  formatDisplayDate(dateStr: string): string {
    const date = new Date(dateStr);
    const weekdays = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const weekday = weekdays[date.getDay()];
    const today = new Date().toISOString().split('T')[0];
    return dateStr === today ? `Hôm nay` : `${weekday}, ${day}/${month}`;
  }
}
