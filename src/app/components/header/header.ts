import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public langService = inject(LanguageService);
  
  // Tracks if the mobile menu is open or closed
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(val => !val);
  }

  // Closes the menu when a user clicks a link (good for mobile UX)
  closeMenu() {
    this.isMenuOpen.set(false);
  }
}