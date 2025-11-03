import { AfterViewInit, Component, signal } from '@angular/core';
import { Menu4Component } from './menu4/menu4.component';
import { MoviesSection } from './movies-section/movies-section';
import { MOVIES, NEWS } from './db-data';
import { NewsSection } from './news-section/news-section';
import { BannerSlider } from './banner-slider/banner-slider';
import { Sliders } from './sliders/sliders';
import Lenis from '@studio-freight/lenis';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Menu4Component, MoviesSection, NewsSection, BannerSlider,Sliders],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements AfterViewInit{
  // protected readonly title = signal('datve');
  ngAfterViewInit(): void {
    const lenis = new Lenis({
      duration: 0.6, // 🟢 phản hồi nhanh hơn
      easing: (t) => t * (2 - t), // 🟢 ease-out nhẹ (tự nhiên, không delay)
      lerp: 0.08, // 🟢 độ mượt (0.05 là nhanh hơn, 0.1 mượt hơn)
    

      touchMultiplier: 1.3, // nhạy chuột vừa phải
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }
  movies = MOVIES;
  news = NEWS;
}
