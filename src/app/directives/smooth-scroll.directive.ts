import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[smoothScroll]',
  standalone: true
})
export class SmoothScrollDirective {
  private ticking = false;

  @HostListener('wheel', ['$event'])
  onWheel(e: WheelEvent) {
    e.preventDefault();                // vẫn chặn xoẹt
    if (this.ticking) return;          // tránh spam
    this.ticking = true;

    const delta = e.deltaY;
    const duration = 500;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = progress * (2 - progress);  // mượt như iPhone
      window.scrollBy(0, delta * ease);

      if (progress < 1) requestAnimationFrame(step);
      else this.ticking = false;       // 👈 THẢ RA ĐỂ KHÔNG ĐƠ
    };
    requestAnimationFrame(step);
  }
}