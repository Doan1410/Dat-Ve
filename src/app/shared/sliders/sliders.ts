import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-sliders',
  standalone: true,              
  imports: [CommonModule],
  templateUrl: './sliders.html',
  styleUrl: './sliders.css',
})
export class Sliders implements OnInit, OnDestroy {
  currentIndex: number = 0;
  intervalID: any;

  ngOnInit(): void {
    this.startAutoSlide();
    
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalID);
  }
  sliders: string[] = [

    'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019278.jpg&w=1920&q=75',
    'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019224.jpg&w=1920&q=75',
    'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019278.jpg&w=1920&q=75',
    'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019224.jpg&w=1920&q=75',
    'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019278.jpg&w=1920&q=75',
    'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019224.jpg&w=1920&q=75',
    'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019278.jpg&w=1920&q=75',
    'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019224.jpg&w=1920&q=75',
    'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019278.jpg&w=1920&q=75',

  ]

  startAutoSlide():void{
    this.intervalID = setInterval(() => this.next(), 10000);
  }
  resume():void{
   this.startAutoSlide();
  }
  pause():void{
    clearInterval(this.intervalID);
  }
  prev():void{
    this.currentIndex=(this.currentIndex-1+this.sliders.length) % this.sliders.length;
  }

  next():void{
    this.currentIndex=(this.currentIndex+1) % this.sliders.length;
  }
  
}
