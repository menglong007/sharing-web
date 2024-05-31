import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavigateBarComponent} from "./shared/navigate-bar/navigate-bar.component";
import {NgClass} from "@angular/common";
import {ThemeService} from "../core/service/theme.service";

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigateBarComponent,
    NgClass
  ],
  templateUrl: './pages.component.html',
})
export class PagesComponent {

  constructor(public themeService: ThemeService) {

  }
}
