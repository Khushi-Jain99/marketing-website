import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly dark = signal(false);

  constructor() {
    const persisted = localStorage.getItem('theme-mode');
    this.dark.set(persisted === 'dark');
    this.syncTheme();
  }

  readonly isDark = this.dark.asReadonly();

  toggleTheme(): void {
    this.dark.update((mode) => !mode);
    this.syncTheme();
  }

  private syncTheme(): void {
    document.documentElement.classList.toggle('dark', this.dark());
    localStorage.setItem('theme-mode', this.dark() ? 'dark' : 'light');
  }
}
