import { AfterViewInit, Component, signal } from '@angular/core';
import { Menu4Component } from './shared/menu4/menu4.component';
import { RouterOutlet } from '@angular/router';
// import { MoviesSection } from './movies-section/movies-section';
// import { MOVIES, NEWS } from './shared/db-data';
// import { NewsSection } from './news-section/news-section';
// import { BannerSlider } from './banner-slider/banner-slider';

import Lenis from '@studio-freight/lenis';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Menu4Component,RouterOutlet,
    //  MoviesSection, NewsSection, BannerSlider, 
    // SmoothScrollDirective
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements AfterViewInit {
 ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('active');
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.ncc_reveal').forEach(el => observer.observe(el));
  }
  // movies = MOVIES;
  // news = NEWS;
}
