import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isMenuOpen = signal(false);

  constructor(public readonly themeService: ThemeService) {}

  toggleMenu(): void {
    this.isMenuOpen.update((state) => !state);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
