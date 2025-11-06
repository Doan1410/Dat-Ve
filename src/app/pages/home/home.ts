import { Component } from '@angular/core';
import { MoviesSection } from '../../shared/movies-section/movies-section';
import { MOVIES, NEWS } from '../../shared/db-data';
import { NewsSection } from '../../shared/news-section/news-section';
import { BannerSlider } from '../../shared/banner-slider/banner-slider';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MoviesSection, NewsSection, BannerSlider],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
  movies = MOVIES;
  news = NEWS;
}
