import { Component,HostListener ,ViewEncapsulation} from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-menu4',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './menu4.component.html',
  styleUrl: './menu4.component.css',
  encapsulation: ViewEncapsulation.None
})
export class Menu4Component {
  isOpen = false;
  isScrolled = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }
}
