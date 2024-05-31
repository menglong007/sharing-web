import {Injectable, signal} from '@angular/core';

const themeKey: string = 'sr-projects-theme';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public default = 'light';
  public themeChanged = signal(this.theme);

  constructor() {
  }

  public get theme(): string {
    return localStorage.getItem(themeKey) ?? this.default;
  }

  public set theme(value: string) {
    localStorage.setItem(themeKey, value);
    this.themeChanged.set(value);
  }

  public get isDark(): boolean {
    return this.theme == 'dark';
  }
}
