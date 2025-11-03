import { Component, Input } from '@angular/core';
import { New } from '../model/new';

@Component({
  selector: 'app-news-section',
  imports: [],
  templateUrl: './news-section.html',
  styleUrl: './news-section.css',
})
export class NewsSection {
  @Input({required: true}) new!: New;
}
