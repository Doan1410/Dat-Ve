import { Component, OnDestroy ,OnInit, AfterViewInit} from '@angular/core';
import { BANNERS } from '../db-data';
import { Banner } from '../../model/banner';

@Component({
  selector: 'app-banner-slider',
  imports: [],
  templateUrl: './banner-slider.html',
  styleUrl: './banner-slider.css',
})
export class BannerSlider  implements OnInit, AfterViewInit, OnDestroy{
  banners: Banner[] = BANNERS; // Lấy trực tiếp từ db-data
  currentIndex = 0;
  private autoSlideInterval: any;
  private hoverPaused = false;

  ngOnInit() {
    if (this.banners.length === 0) {
      console.warn('No banners loaded!');
    }
  }

  ngAfterViewInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  goToSlide(index: number) {
    if (index < 0) index = this.banners.length - 1;
    if (index >= this.banners.length) index = 0;
    this.currentIndex = index;
    this.restartAutoSlide();
  }

  next() {
    this.goToSlide(this.currentIndex + 1);
  }

  prev() {
    this.goToSlide(this.currentIndex - 1);
  }

  startAutoSlide() {
    this.stopAutoSlide();
    this.autoSlideInterval = setInterval(() => {
      if (!this.hoverPaused) {
        this.next();
      }
    }, 15000); // 15 giây
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  restartAutoSlide() {
    this.startAutoSlide();
  }

  onMouseEnter() {
    this.hoverPaused = true;
  }

  onMouseLeave() {
    this.hoverPaused = false;
  }
}
